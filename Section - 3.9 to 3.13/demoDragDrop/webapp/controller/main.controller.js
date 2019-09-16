sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("demo.dd.table.demoDragDrop.controller.main", {
		onInit: function () {
			var oData = jQuery.sap.sjax({
				url: "https://openui5.hana.ondemand.com/test-resources/sap/ui/documentation/sdk/products.json",
				dataType: "json"
			}).data;
			
			oData.ProductCollection.forEach(function(oProduct){
				oProduct.Rank = 0;
			});   
			
			this.getView().setModel(new sap.ui.model.json.JSONModel(oData));
		}
		
	});
});