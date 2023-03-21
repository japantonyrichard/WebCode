"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.setCityAction = void 0;

var _actionType = require("./action-type");

/**
 * 导出所有action
 */
var setCityAction = function setCityAction(name) {
  return {
    type: _actionType.SET_CITY,
    payload: name
  };
};

exports.setCityAction = setCityAction;