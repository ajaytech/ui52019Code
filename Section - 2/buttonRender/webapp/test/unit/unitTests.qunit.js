/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"demo/render/buttonRender/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});