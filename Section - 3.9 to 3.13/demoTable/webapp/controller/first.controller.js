sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("demo.table.demoTable.controller.first", {
		onInit: function () {
			
			this.getView().setModel(new sap.ui.model.json.JSONModel("model/product.json"));
			

		}
	});
});