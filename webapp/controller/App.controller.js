sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function (BaseController) {
  "use strict";

  return BaseController.extend("project1.controller.App", {
      onInit:function() {

        this.createModel();
      },


      createModel: function () {
        var oModel = new sap.ui.model.json.JSONModel()
        //   step2 set the data inside the model
        oModel.setData( {

            "empStr": {
                "empNo": 100,
                "eName": "krish",
                "salary": 15000,
                "currency": "EUR",
                "smoker": false
            },
            "empTab": [
                {
                    "empNo": 100,
                    "eName": "prave",
                    "salary": 15000,
                    "currency": "GBP",
                    "smoker": false
                },
                {
                    "empNo": 100,
                    "eName": "ram",
                    "salary": 16000,
                    "currency": "EUR",
                    "smoker": false
                },
                {
                    "empNo": 100,
                    "eName": "kishore",
                    "salary": 18000,
                    "currency": "INR",
                    "smoker": false
                },
                {
                    "empNo": 100,
                    "eName": "siva",
                    "salary": 18000,
                    "currency": "INR",
                    "smoker": false
                }
            ]
        });



        sap.ui.getCore().setModel(oModel);




    },
   
giveMe: function(){

var val = this.getView().byId("idIn").getValue();
alert(val);

      }

  });
});




































// var button = new sap.m.Button("idPraveen",{
//   text: "clickMe",
// // press: function(){
//   // var btn = sap.ui.getCore().byId("idPraveen");
// //  btn.setText("hello you clicked");
// // btn.setVisible(false);
// // } 
// press:function(){
// var value =sap.ui.getCore().byId("idinp").getValue();
// alert(value);
// }
