sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sycor/model/model"
], function(Controller, Model) {
	"use strict";
	return Controller.extend("sycor.controller.Main", {
		
		
			onInit : function(){
					//getting the data from Model.js
		var routesModel = Model.getTripsModel();
			//setting routesModel to the view
		this.getView().setModel(routesModel,"routesModel");
		}
		
	});
});