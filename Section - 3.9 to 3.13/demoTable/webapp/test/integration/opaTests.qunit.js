/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"demo/table/demoTable/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});