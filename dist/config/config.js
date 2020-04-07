"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "YOUR_secret_key",
  mongoUri: 'mongodb+srv://team:QgOVTyn4wOcG8MbV@users-f5jfa.mongodb.net/test?retryWrites=true&w=majority'
};
var _default = config;
exports["default"] = _default;