sap.ui.define([
	'sap/uxap/BlockBase'
	],function(BlockBase){
	
	var BlockEmpDetailPart1 = BlockBase.extend("demo.op2.demoOP2.forms.formSimple1", {
		metadata: {
			views: {
				Collapsed: {
					viewName: "demo.op2.demoOP2.forms.formSimple1",
					type: "XML"
				},
				Expanded: {
					viewName: "demo.op2.demoOP2.forms.formSimple1",
					type: "XML"
				}
			}
		}
	});
	
	return BlockEmpDetailPart1;
},true);