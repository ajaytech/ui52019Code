sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("demo.action.comp.demoActionComp.controller.first", {
		onInit: function () {
			this.lengthData = 1;
			this.getView().setModel(
				new sap.ui.model.json.JSONModel("https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/products.json")
				.attachRequestCompleted(function(){
					var oModel = this.getView().getModel()
					
					oModel.setData(
						{
							"ProductCollection":oModel.getData().ProductCollection.slice(0,this.lengthData)
							
						});
					
				}.bind(this))
			);
		},
		
		onRefresh : function(){
			this.lengthData++;
			this.getView().setModel(
				new sap.ui.model.json.JSONModel("https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/products.json")
				.attachRequestCompleted(function(){
					var oModel = this.getView().getModel()
					
					oModel.setData(
						{
							"ProductCollection":oModel.getData().ProductCollection.slice(0,this.lengthData)
							
						});
					
				}.bind(this))
			);
			this.byId("idRefreshOnClick").hide();
		}
		
	});
});