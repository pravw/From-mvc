sap.ui.define([
  "sap/ui/core/mvc/Controller",
  "project1/model/models"

], function (BaseController,models) {
  "use strict";

  return BaseController.extend("project1.controller.App", {
      onInit:function() {

        this.createModel();
      },


      onSwtChange: function(){

   var oModel = sap.ui.getCore().getModel();
      if(oModel.getProperty("/empStr/alia")=== true){

        oModel.setProperty("/empStr/alia", false);


      }else{
        oModel.setProperty("/empStr/alia", true);


      }

      },


      createModel: function () {
      

        var oModel=  models.createJSONModel();
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
