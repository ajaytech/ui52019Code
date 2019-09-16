sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/util/MockServer"
], function (Controller,MockServer) {
	"use strict";

	return Controller.extend("demo.smartTable.demoSmartTable.controller.first", {
		onInit: function () {
			
			var oMockServer =  new MockServer({
									rootUri:"smartTable/"
							});
			oMockServer.simulate("./MockServer/metadata.xml","./MockServer/");
			oMockServer.start();
			
			var oDataModel = new sap.ui.model.odata.v2.ODataModel("smartTable");
			this.getView().setModel(oDataModel);

		},
		excelBeforeExport: function(oEvt){
			oEvt.getParameter("exportSettings").worker=false;
		}
	});
});