sap.ui.define(function(){
	"use strict";
	var formatterInternal;
	formatterInternal = {
		"changeDesc": function(sDesc){
			if(sDesc.toString().length>30){
				return sDesc.toString().substring(0, 29)+"...";
			}
			return sDesc;
		},
		"changeDescAddQunatit": function(sDesc,quant){
			if(sDesc.toString().length>30){
				return quant.toString()+" Items, "+sDesc.toString().substring(0, 29)+"...";
			}
			return sDesc;
		}
		
	};
	
	
	return formatterInternal;
	
},true);