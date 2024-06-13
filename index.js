"use strict";

const methods = require("./data/methods.json");
const constants = require("./data/constants.json");
const constructors = require("./data/constructors.json");
const properties = require("./data/properties.json");
const implicit = Object.keys(require("./data/implicitfunctions.json")).join(
  "|"
);

const p5globals = { ...methods, ...constants, ...constructors, ...properties };

module.exports = { p5globals, implicit };
