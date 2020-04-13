import User from "../models/User";
import crypto from "crypto";
import VerificationToken from "../models/VerificationToken";
import nodemailer from "nodemailer";
import bcrypt from "bcryptjs";
import config from "../config/config";

//Create new user method
const create = async (req, res) => {
  const { login, email, password } = req.body;

  try {
    let user = await User.findOne({
      email,
    });

    if (user) {
      return res.status(400).json({
        errors: [
          {
            msg: "User already exists",
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

    await token.save((err) => {
      if (err) {
        return res.status(500).send({
          msg: err.message,
        });
      }

      // Send the email
      const smtpConfig = {
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // use SSL
        auth: {
          user: config.SENDGRID_USERNAME,
          pass: config.SENDGRID_PASSWORD,
        },
      };
      const transporter = nodemailer.createTransport(smtpConfig);
      var mailOptions = {
        from: "Dream team",
        to: user.email,
        subject: "Подтверждение регистрации",
        text:
          "Привет!,\n" +
          "Для подтверждения регистрации перейдите по ссылке: (тут ссылка)\nТокен: " +
          token.token,
      };
      transporter.sendMail(mailOptions, (err) => {
        if (err) {
          return res.status(500).send({
            msg: err.message,
          });
        }
        res.status(200).json({
          msg: "A verification email has been sent to " + user.email,
        });
      });
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
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
    token: token,
  });
  res.status(200).send("The account has been verified. Please log in.");
};

const resend = async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
  });
  if (!user) {
    return res.status(400).send({
      msg: "We were unable to find a user with that email.",
    });
  }
  if (user.isVerified) {
    return res.status(400).send({
      msg: "This account has already been verified. Please log in.",
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
  await token.save((err) => {
    if (err) {
      return res.status(500).send({
        msg: err.message,
      });
    }

    // Send the email
    const smtpConfig = {
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // use SSL
      auth: {
        user: config.SENDGRID_USERNAME,
        pass: config.SENDGRID_PASSWORD,
      },
    };
    const transporter = nodemailer.createTransport(smtpConfig);
    var mailOptions = {
      from: "Dream team",
      to: user.email,
      subject: "Повторное подтверждение регистрации",
      text:
        "Привет!,\n" +
        "Для подтверждения регистрации перейдите по ссылке: (тут ссылка)\nТокен: " +
        token.token,
    };
    transporter.sendMail(mailOptions, (err) => {
      if (err) {
        return res.status(500).send({
          msg: err.message,
        });
      }
      res.status(200).json({
        msg: "A verification email has been sent to " + user.email,
      });
    });
  });
};

//Get a specific user by ID method
const read = (req, res) => {
  return res.json(req.user)
};

//Get all the users in the database method
const list = (req, res) => {
  res.json({
    msg: "Get all the users in the database methods"
  })
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

export default { 
    create, 
    userByID, 
    confirm, 
    resend,
    getToken,
    read, 
    list, 
    update, 
    remove 
};
