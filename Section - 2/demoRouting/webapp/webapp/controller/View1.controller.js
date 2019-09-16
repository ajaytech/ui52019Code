sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("CustomMastertoDetail.CustomMastertoDetail.controller.View1", {
	
	
		onInit: function () {
			
			// var oTable = this.getView().byId("abc");
			// var newvar = this.getView().getModel("i18n").getResourceBundle().getText("Northwind");
			var oModel = new sap.ui.model.json.JSONModel("https://cors-anywhere.herokuapp.com/https://services.odata.org/v3/northwind/northwind.svc/Products");
		//	var that = this;
		//	oModel.setData(data);
	this.getView().setModel(oModel);
			// var aData = jQuery.ajax({
			// 	type: "GET",
			// 	contentType: "application/json",
			// 	url: newvar,
			// 	dataType: "json",
			// 	async: false,
			// 	success: function (data, textStatus, jqXHR) {
			// 		oModel.setData(data);
			// 		oTable.setModel(oModel);
			// 		alert("success to post");
			// 	}
			// });
		},
		onListItemPressed: function (oEvent) {
			var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
		
			// var oItem = evt.getSource();
	  //      var	s = evt.getSource();
			// var p = s.oBindingContexts.namedModel.sPath;
		
 	var oItem, oCtx;

			oItem = oEvent.getSource();
			oCtx = oItem.getBindingContext();

			debugger;
			//first aaproach
		//	var selectedProductId = this.byId("abc").getModel("namedModel").getProperty(p);
//	 var selectedProductId   = oItem.getBindingContextPath().substr(7);
		//     var	 data = {
		// 	ProductID: "",
		// ProductName: "",
		// SupplierID: "",
		// CategoryID: "",
		// QuantityPerUnit:""
				
		// 	};
			
		//     data.CategoryID = selectedProductId.CategoryID;
		//      data.ProductID = selectedProductId.ProductID;
		//       data.ProductName = selectedProductId.ProductName;
		//       data.QuantityPerUnit = selectedProductId.QuantityPerUnit;
		//         data.SupplierID = selectedProductId.SupplierID;
		    
			//var selectedProductId =	evt.getSource().getSelectedItem().getBindingContext("ProductID").getObject();
			oRouter.navTo("Detail", {
				productId: oCtx.getProperty("ProductID")-1
			});
		},
			onpress: function (evt) {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
					oRouter.navTo("NotFound", {
			
			});
			}
		// onselection:function(oevnt)
		// {
			
			
		// }
		
	
	});
});