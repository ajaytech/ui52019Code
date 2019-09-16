/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"demo/QV/demo/QuickView/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});