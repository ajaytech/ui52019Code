/*global QUnit*/

sap.ui.define([
	"demo/layout/demolayout/controller/first.controller"
], function (Controller) {
	"use strict";

	QUnit.module("first Controller");

	QUnit.test("I should test the first controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});