/*global QUnit*/

sap.ui.define([
	"dev/demo/AnalyticalApp/controller/dashboard.controller"
], function (Controller) {
	"use strict";

	QUnit.module("dashboard Controller");

	QUnit.test("I should test the dashboard controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});