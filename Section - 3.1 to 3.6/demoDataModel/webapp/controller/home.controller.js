sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("demo.data.demoDataModel.controller.home", {
		onInit: function () {
			
			var oDataJSON = {
				"someProp":"someVal"
			};
			this.getView().setModel(new sap.ui.model.json.JSONModel(oDataJSON),"hardCoded");
			this.getView().setModel(
				new sap.ui.model.json.JSONModel("https://jsonplaceholder.typicode.com/todos/")
				,"fromURL");

		}
	});
});