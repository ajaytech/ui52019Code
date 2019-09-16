sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("demo.ui5route.demoRouting.controller.FirstView", {
		onInit: function () {

		},
		onPress: function(){
			
			var oRoute = sap.ui.core.UIComponent.getRouterFor(this);

			oRoute.navTo("demoSecondRoute");
			
		}
	});
});