sap.ui.define(

    ["sap/ui/model/json/JSONModel"],
    function(JSONModel){
return{
    createJSONModel: function(filePath){

        var oModel = new JSONModel()
        oModel.loadData(filePath);
        //  oModel.setDefaultBindingMode("OneWay");
        return oModel;
    }

};

    }

);