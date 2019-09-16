/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"demo/grid/demoGrid/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});