sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";

	return Controller.extend("sap.ui.demo.smartControls.SmartFieldWithValueHelp", {
		onInit: function() {
			//debugger;
			//this.getView().bindElement("/Products");
			this.getView().bindElement("/Products('4711')");

		}
	});

});
