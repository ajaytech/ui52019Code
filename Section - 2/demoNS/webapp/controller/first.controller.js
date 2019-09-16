sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("demo.ns.demoNS.controller.first", {
		onInit: function () {

			this.getView().setModel()
		},
		
		onBeforeRendering: function() {
            // Do something here...
          },
          
          
		onAfterRendering: function() {
            // Do something here...
          }
	});
});