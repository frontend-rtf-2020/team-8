"use strict";

var _app = _interopRequireDefault(require("../app"));

var _config = _interopRequireDefault(require("../config/config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_app["default"].listen(_config["default"].port, function (err) {
  if (err) {
    console.log(err);
  }

  console.info('Server started on port %s.', _config["default"].port);
});