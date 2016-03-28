'use strict';


var files = require('../files.json');
var path = require('path');


module.exports = function (GulpAngularGenerator) {


	GulpAngularGenerator.prototype.writing = function () {
		var self = this;
		
		files.templates.forEach( function (file) {
			var src = file;
			var dest = file;
			if (file) {
				var basename = path.basename(file);
				src = file.replace(basename, '_' + basename);
			}
			self.template(
					self.templatePath(src),
					self.destinationPath(dest),
					self.props
			);
		});
	}


};