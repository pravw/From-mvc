sap.ui.define([
  "sap/ui/core/mvc/Controller"
], function (BaseController) {
  "use strict";

  return BaseController.extend("project1.controller.App", {
      onInit() {
      },

      pressMe: function(){

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
