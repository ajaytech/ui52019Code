/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"demo/viz1/demoViz2/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});