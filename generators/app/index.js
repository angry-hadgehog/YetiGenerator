'use strict';
var yeoman = require('yeoman-generator');

var yosay = require('yosay');
var chalk = require('chalk');



var YetiGenerator = yeoman.Base.extend({

  constructor: function () {
    yeoman.Base.apply(this, arguments);

    // Define arguments
    this.argument('appName', {
      type: String,
      required: false
    });
    
    this.props = {};
  },
  
  init: function() {
    this.log(yosay(
            'Welcome to the groovy ' + chalk.blue('yeti') + ' generator!'
    ));
  },

  install: function () {
    this.installDependencies();
  }
});


require('./src/prompts')(YetiGenerator);
require('./src/files')(YetiGenerator);


module.exports = YetiGenerator;