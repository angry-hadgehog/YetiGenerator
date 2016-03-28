'use strict';


var prompts = require('../prompts.json');

module.exports = function (GulpAngularGenerator) {


	GulpAngularGenerator.prototype.prompting = function () {
		var done = this.async();

		this.prompt(prompts, function (props) {
			this.props = props;

			done();
		}.bind(this));
	}


};