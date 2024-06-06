"use strict";

const functions = require("./data/functions.json");
const variables = require("./data/variables.json");
const classes = require("./data/classes.json");
const implicit = [require("./data/implicitfunctions.json")].join("|");

const p5globals = { ...functions, ...variables, ...classes };

module.exports = { p5globals, implicit };
