sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"demo/ui5/myFirstUI5App/externalURL/externalURL"
], function (Controller,oURL) {
	"use strict";

	return Controller.extend("demo.ui5.myFirstUI5App.controller.App", {
		onInit: function () {
			
			var oModel = new sap.ui.model.json.JSONModel(oURL.jsonDemo);   
			this.getView().setModel(oModel,"demoView");
		}
	});
});