import User from "../models/User";
import crypto from "crypto";
import VerificationToken from "../models/VerificationToken";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import config from "../config/config";

//Create new user method
const create = async (req, res) => {
  const { login, email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        errors: [
          {
            msg: "Пользователь с данным e-mail уже существует!",
          },
        ],
      });
    }

    user = await User.findOne({ login })
    if (user) {
      return res.status(400).json({
        errors: [
          {
            msg: "Пользователь с данным логином уже существует!",
          },
        ],
      });
    }

    user = new User({
      login,
      email,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    await user.save();

    // Verification token
    const token = new VerificationToken({
      userId: user.id,
      token: crypto.randomBytes(16).toString("hex"),
    });
    await token.save();

    //Send email
    const transporter = nodemailer.createTransport(config.smtpConfig);
    const mailOptions = {
      from: "Dream team",
      to: email,
      subject: "Подтверждение регистрации",
      text:
        "Привет!\nДля подтверждения регистрации перейди по ссылке: (тут ссылка)\nТокен: " + token.token
    };
    transporter.sendMail(mailOptions, (err) => {
      if (err) {
        return res.status(400).json({
          errors: [
            {
              msg: "По техническим причинам e-mail не был отправлен",
            },
          ],
        });
      }
      res.status(200).json({
        msg: "На адрес " + user.email + " было отправлено письмо для подтверждения регистрации",
      });
    });

  } catch (err) {
    console.error(err.message);
    return res.status(400).json({
      errors: [
        {
          msg: "Регистрация не удалась по техническим причинам... Попробуйте ещё раз"
        },
      ],
    });
  }
};

const userByID = async (req, res, next, id) => {
  try {
    const user = await User.findById(id).select("-password");
    req.user = user
    next();
  } catch (err) {
    res.status(500).send("Server Error");
  }
};

const getToken = async (req, res, next, token) => {
  VerificationToken.findOne({ token: token }).exec((err, token) => {
    if (err || !token) return res.status(400).json({
      error: "We were unable to find a valid token. Your token may have expired."
    })
    req.token = token
    console.log(req.token)
    next()
  })
};

const confirm = async (req, res) => {
  // Try to find a token
  let token = req.token

  // If we found a token, find a matching user
  let user = await User.findOne({
    _id: token.userId,
  });

  if (!user) {
    return res.status(400).send({
      msg: "We were unable to find a user for this token.",
    });
  }
  if (user.isVerified) {
    return res.json({
      msg: "This user has already been verified.",
    });
  }

  // Verify and save the user
  user.isVerified = true;
  await user.save((err) => {
    if (err) {
      return res.status(500).send({
        msg: err.message,
      });
    }
  });

  // Delete verification token from db
  await VerificationToken.findOneAndRemove({
    userId: user.id
  });

  res.status(200).send("The account has been verified. Please log in.");
};

const resend = async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
  });
  if (!user) {
    return res.status(400).json({
      errors: [
        {
          msg: "Пользователь с данным e-mail не найден"
        }
      ]
    });
  }
  if (user.isVerified) {
    return res.status(400).json({
      errors: [
        {
          msg: "Данный аккаунт уже подтверждён!"
        }
      ]
    });
  }

  //Delete old token
  await VerificationToken.findOneAndRemove({
    userId: user.id,
  });

  // Verification token
  const token = new VerificationToken({
    userId: user.id,
    token: crypto.randomBytes(16).toString("hex"),
  });

  // Save the token
  await token.save();

  //Send email
  const transporter = nodemailer.createTransport(config.smtpConfig);
  const mailOptions = {
    from: "Dream team",
    to: user.email,
    subject: "Подтверждение регистрации",
    text:
      "Привет!\nДля подтверждения регистрации перейди по ссылке: (тут ссылка)\nТокен: " + token.token
  };
  transporter.sendMail(mailOptions, (err) => {
    if (err) {
      return res.status(400).json({
        errors: [
          {
            msg: "По техническим причинам e-mail не был отправлен",
          },
        ],
      });
    }
    res.status(200).json({
      msg: "На адрес " + user.email + " было отправлено письмо для подтверждения регистрации",
    });
  });
};

//Get all the users in the database method
const list = async (req, res) => {
  try {
    const users = await User.find().select("id login email");;

    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// DONT REALLY NEED THAT
/*
//Get a specific user by ID method
const read = (req, res) => {
  return res.json(req.user)
};

//Changed user data for a specific use method
const update = (req, res, next) => {
  res.json({
    msg: "Changed user data for a specific use method"
  })
};

//Delete a specific user from the database method
const remove = (req, res, next) => {
  res.json({
    msg: "Delete a specific user from the database method"
  })
};
*/

export default {
  create,
  userByID,
  confirm,
  resend,
  getToken,
  list
};
