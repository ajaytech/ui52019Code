sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("demo.action.simple.actionSimpleDemo.controller.Main", {
		
		onInit: function () {
		
			debugger;
			this.addRoute();
		},
		
		addRoute : function(){
			this.oRoute = sap.ui.core.UIComponent.getRouterFor(this);
		},
		
		onPressButton : function(){
			
			//var oRoute = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRoute.navTo("buttonPage");
			
		},
			onPressBreadcrumbs : function(){
			
			//var oRoute = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRoute.navTo("breadcrumbs");
			
		},
		onPressLinkExample : function(){
			//var oRoute = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRoute.navTo("linkDemo");
		},
		onPressMenuExample : function(){
			//var oRoute = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRoute.navTo("menuItem");
		},
		onPressURLHelperExample : function(){
			//var oRoute = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRoute.navTo("urlHelper");
		},
		onPressActionSheetExample : function(){
			//var oRoute = sap.ui.core.UIComponent.getRouterFor(this);
			this.oRoute.navTo("actionSheet");
		}
	});
});