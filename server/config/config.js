const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 5000,
    jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
    mongoUri: 'mongodb+srv://user:QgOVTyn4wOcG8MbV@messenger-2geth.mongodb.net/test?retryWrites=true&w=majority',
    SENDGRID_USERNAME: "dreamteammessenger@gmail.com",
    SENDGRID_PASSWORD: "TBH-qG9-d7r-zi8"
  }
  
  export default config