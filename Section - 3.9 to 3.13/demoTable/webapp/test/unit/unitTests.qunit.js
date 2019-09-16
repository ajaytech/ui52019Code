/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"demo/table/demoTable/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});