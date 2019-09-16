/*global QUnit*/

sap.ui.define([
	"demo/smartTable/demoSmartTable/controller/first.controller"
], function (Controller) {
	"use strict";

	QUnit.module("first Controller");

	QUnit.test("I should test the first controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});