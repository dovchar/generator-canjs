'use strict';
var util   = require('util');
var yeoman = require('yeoman-generator');
var path   = require('path');
var base   = require('../base.js')

var ModelGenerator = module.exports = function ModelGenerator(args, options, config) {
  base.apply(this, arguments);
};

util.inherits(ModelGenerator, base);

ModelGenerator.prototype.askForName = base.namePrompt('Please enter the path to the model eg.: models/user:');

ModelGenerator.prototype.files = function files() {
  if(this.name){
    this._mkdirp(this.name);
    this.template((this._isUsingRequireJS() ? 'requirejs' : 'none') + '.js', this._fullName());
  } else {
    console.log('You must provide path to the model!');
  }
}