/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"demo/ui5/dataUI5App/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});