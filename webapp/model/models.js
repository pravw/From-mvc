sap.ui.define(

    ["sap/ui/model/json/JSONModel"],
    function(JSONModel){
return{
    createJSONModel: function(){

        var oModel = new JSONModel()
        oModel.loadData("model/mockData/praveenData.json");
        //  oModel.setDefaultBindingMode("OneWay");
        return oModel;
    }

};

    }

);