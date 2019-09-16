sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("demo.form.demoForm.controller.first", {
		onInit: function () {

			var oData = {
					"SupplierName": "Red Point Stores",
					"Street": "Main St",
					"HouseNumber": "1618",
					"ZIPCode": "31415",
					"City": "Maintown",
					"Country": "Germany",
					"Url": "http://www.sap.com",
					"Twitter": "@sap",
					"Tel": "+49 6227 747474",
					"Sms": "+49 173 123456",
					"Email": "john.smith@sap.com"
			};
			var oModel = new sap.ui.model.json.JSONModel(oData);
			this.getView().setModel(oModel);
			debugger;

		}
		
	});
});