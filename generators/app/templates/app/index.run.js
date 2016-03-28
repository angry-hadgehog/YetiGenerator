(function () {
	'use strict';

	angular
			.module('<%- appName %>')
			.run(init);

	/** @ngInject */
	function init() {
		angular.element(document).foundation('reflow');
		

	}

})();
