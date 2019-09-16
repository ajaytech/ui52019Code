/*global QUnit*/

sap.ui.define([
	"demo/ui5route/demoRouting/controller/FirstView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("FirstView Controller");

	QUnit.test("I should test the FirstView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});