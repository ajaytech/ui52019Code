sap.ui.define([
	"sap/ui/core/util/MockServer"
	
], function (MockServer) {
	"use strict";
	var oMockServer = new MockServer({
				rootUri: "/sap/opu/odata/sap/EPM_REF_APPS_PROD_MAN_SRV/"
			});
			var sPath = sap.ui.require.toUrl("sap/ui/demo/smartControls/localService");
			oMockServer.simulate(sPath + "/metadata.xml", {
				sMockdataBaseUrl: sPath + "/mockdata",
				bGenerateMissingMockData: true
			});
			oMockServer.start();
	sap.ui.require(["sap/ui/core/ComponentSupport"]);
});
