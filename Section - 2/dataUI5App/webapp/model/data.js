sap.ui.define([
	"sap/ui/model/json/JSONModel"
], function (JSONModel) {
	"use strict";

	return {

		getSampleData: function () {

			var oModel = new JSONModel("https://jsonplaceholder.typicode.com/todos");
			//oModel.setDefaultBindingMode("OneWay");
			return oModel;
		}

	};
});