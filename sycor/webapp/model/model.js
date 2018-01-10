sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function() {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},

	getTripsModel: function() {
				var oModel = new JSONModel();
			var oData = [{
				type: "by Bus",
				tooltip: "Frankfurt to Dillenburg",
				color: "rgb(0,76,153)",
				startIcon: "sap-icon://bus-public-transport",
				endIcon: "sap-icon://bus-public-transport",
				startMarkerImage: "images/end.png",
				endMarkerImage: "images/start.png",
				startMarkerAlignment: "6",
				endMarkerAlignment: "6",
				position: [{
					"lng": "8.602294921875",
					"lat": "50.15930523913416"
				}, {
					"lng": "8.4869384765625",
					"lat": "50.597186230587035"
				}, {
					"lng": "8.4210205078125",
					"lat": "50.61461743826626"
				},  {
					"lng": "8.020019531249998",
					"lat": "50.84410451978964"
				}, {
					"lng": "7.965087890625",
					"lat": "50.86491125522503"
				}]
			}, {
				type: "by Car",
				tooltip: "Hannover to Bielefeld",
				color: "rgb(95, 53, 84)",
				startIcon: "sap-icon://car-rental",
				endIcon: "sap-icon://car-rental",
				startMarkerImage: "images/truck.png",
				endMarkerImage: "images/factory.png",
				startMarkerAlignment: "5",
				endMarkerAlignment: "1",
				position: [{
					lng: "9.849243164062498",
					lat: "52.41247205962487"
				}, {
					lng: "9.8162841796875",
					lat: "52.429222277955134"
				},  {
					lng: "9.2559814453125",
					lat: "52.22779941887071"
				},  {
					lng: "9.0911865234375",
					lat: "52.217704193421454"
				}, {
					lng: "9.019775390625",
					lat: "52.217704193421454"
				} , {
					lng: "8.624267578125",
					lat: "52.00179230422271"
				}]
			}, {
				type: "by Taxi",
				tooltip: "Paris to Chartres",
				color: "rgb(0,76,153)",
				startIcon: "sap-icon://taxi",
				endIcon: "sap-icon://bus-public-transport",
				startMarkerImage: "",
				endMarkerImage: "",
				position: [{
					"lng": 2.340087890625,
					"lat": 48.83941303819501
				}, {
					"lng": 2.2357177734374996,
					"lat": 48.69458640884518
				}, {
					"lng": 1.9720458984374998,
					"lat": 48.56388521347092
				},  {
					"lng": 1.4948272705078125,
					"lat": 48.445827971920465
				}, {
					"lng": 1.4936256408691406,
					"lat": 48.446852771568224
				}]
			}];
			oModel.setData({
				routes: oData
			});
			return oModel;
		}

	};

});