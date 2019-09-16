sap.ui.define([], function () {
	"use strict";

	return {

		changeText: function (sValue,sState) {
			
			if(sValue && sState === true )return sValue.split(" ")[0];
			
			return "";
		}

	};
});