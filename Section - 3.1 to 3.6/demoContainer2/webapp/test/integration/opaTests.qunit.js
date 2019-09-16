/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"demo/container2/demoContainer2/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});