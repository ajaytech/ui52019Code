sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("demo.route.demoRouteList.controller.first", {
		onInit: function () {
			//var oModel = new sap.ui.model.json.JSONModel(
			//	"https://cors-anywhere.herokuapp.com/https://services.odata.org/V2/Northwind/Northwind.svc/Products");
			//this.getView().setModel(oModel);
		},
		onClick : function(oEvt){
			
			var sPath = oEvt.getSource().getBindingContextPath();
			var oRoute = sap.ui.core.UIComponent.getRouterFor(this);
			
			oRoute.navTo("secondPage",{
				productID: sPath.split("/")[1]
			})
			
		}
	});
});