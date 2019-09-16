sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("demo.grid.demoGrid.controller.first", {
		onInit: function () {
			var oModel = new sap.ui.model.json.JSONModel("https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/products.json");
			this.getView().setModel(oModel);
		}
	});
});