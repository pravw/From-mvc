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



      onSelect: function(oEvent){
        // 1.in internal table which index of record
        // 2.get objct of simple form
        // 3. bind the element with simple form

        var sPath = oEvent.getParameter("rowContext").getPath();
        var oSimple = this.getView().byId("idSim");
        oSimple.bindElement(sPath);




       },


      createModel: function () {
      

        var oModel=  models.createJSONModel("model/mockData/praveenData.json");
        sap.ui.getCore().setModel(oModel);

        var oModel1 = models.createJSONModel("model/mockData/dataSet2.json")
        sap.ui.getCore().setModel(oModel1,"ola");



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
