/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"graph/demo/demoGraph/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});