sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"demo/route/demoRouteList/model/models"
], function (UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("demo.route.demoRouteList.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// this.setModel(new sap.ui.model.json.JSONModel(
			// 	"https://cors-anywhere.herokuapp.com/https://services.odata.org/V2/Northwind/Northwind.svc/Products")
			// )
			// enable routing
			this.getRouter().initialize();

			// set the device model
			this.setModel(models.createDeviceModel(), "device");
		}
	});
});