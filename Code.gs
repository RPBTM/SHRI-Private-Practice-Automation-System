var drugDxTable = "https://docs.google.com/spreadsheets/d/1BIbZ24yZ3mxYpoOE6wg8OtU7YeyiYRmnxl8KhFFuTx0/edit?usp=sharing";
var sheetNameDrug = "Drugs";
var sheetNameDx = "Diagnosis List";
var sheetNameDrugInterval = "Drug Interval";

var prescriptionTable = "https://docs.google.com/spreadsheets/d/1h07nOZ6Qfqp9tE7kb_O5sfSM4dvDh6jEun_MZYm6F0w/edit?usp=sharing";
var sheetNamePresTable = "Main";

function doGet(request) {

  if(request.parameters.v){
    return HtmlService.createTemplateFromFile('DispenseView').evaluate();
  }else{
    return HtmlService.createTemplateFromFile('FrontPage').evaluate();

}
  return HtmlService.createTemplateFromFile('FrontPage').evaluate();

}

function include(File) {
    return HtmlService.createHtmlOutputFromFile(File).getContent();
};

function getUrl() {
    return ScriptApp.getService().getUrl();
}

function retrieveDrugDropdown(){

  var ss = SpreadsheetApp.openByUrl(drugDxTable);
  var ws = ss.getSheetByName(sheetNameDrug);
  var data_ws_drug = ws.getRange("B:F").getValues();

  Logger.log('data_ws : %s', data_ws_drug);
  return data_ws_drug
}

function retrieveDrugInterval(){

  var ss = SpreadsheetApp.openByUrl(drugDxTable);
  var ws = ss.getSheetByName(sheetNameDrugInterval);
  var data_ws_drug_interval = ws.getRange("A:D").getValues();

  Logger.log('data_ws : %s', data_ws_drug_interval);
  return data_ws_drug_interval
}


function retrieveDxList(){

  var ss = SpreadsheetApp.openByUrl(drugDxTable);
  var ws = ss.getSheetByName(sheetNameDx);
  var data_ws_DxList = ws.getRange("A:B").getValues();

  Logger.log('data_ws : %s', data_ws_DxList);
  return data_ws_DxList
}


function saveToSheet(presData){

  // var presData = {};
  // presData.presID = 'P2323232323';
  // presData.name = 'Test Name';
  // presData.age = '44';

  var ss = SpreadsheetApp.openByUrl(prescriptionTable);
  var ws = ss.getSheetByName(sheetNamePresTable);
  var wsIndex = ss.getSheetByName("Index");
  var data_ws_wsIndex = wsIndex.getRange("A:A").getValues();

  var presID_status = 'Not Found';

  for (var i = 1; i < data_ws_wsIndex.length; i++) {
    if(presData.presID==data_ws_wsIndex[i][0]){
      if(presData.presID==ws.getRange('D'+(i+1).toString()).getValue()){
        presID_status = 'Found';
        ws.getRange('E'+(i+1).toString()).setValue(presData.name);
        ws.getRange('F'+(i+1).toString()).setValue(presData.age);
      }
    }
  }

  if(presID_status == 'Not Found'){
      var lastRowIndex = ws.getLastRow();
      ws.getRange('D'+(lastRowIndex+1).toString()).setValue(presData.presID);
      ws.getRange('E'+(lastRowIndex+1).toString()).setValue(presData.name);
      ws.getRange('F'+(lastRowIndex+1).toString()).setValue(presData.age);


      ws.getRange('G'+(lastRowIndex+1).toString()).setValue(presData.gender);
      ws.getRange('H'+(lastRowIndex+1).toString()).setValue(presData.date);

      ws.getRange('I'+(lastRowIndex+1).toString()).setValue(presData.drug_1);
      ws.getRange('J'+(lastRowIndex+1).toString()).setValue(presData.drug_freq_1);
      ws.getRange('K'+(lastRowIndex+1).toString()).setValue(presData.drug_dur_1);
      ws.getRange('L'+(lastRowIndex+1).toString()).setValue(presData.cost_1);

      ws.getRange('M'+(lastRowIndex+1).toString()).setValue(presData.drug_2);
      ws.getRange('N'+(lastRowIndex+1).toString()).setValue(presData.drug_freq_2);
      ws.getRange('O'+(lastRowIndex+1).toString()).setValue(presData.drug_dur_2);
      ws.getRange('P'+(lastRowIndex+1).toString()).setValue(presData.cost_2);

      ws.getRange('Q'+(lastRowIndex+1).toString()).setValue(presData.drug_3);
      ws.getRange('R'+(lastRowIndex+1).toString()).setValue(presData.drug_freq_3);
      ws.getRange('S'+(lastRowIndex+1).toString()).setValue(presData.drug_dur_3);
      ws.getRange('T'+(lastRowIndex+1).toString()).setValue(presData.cost_3);

      ws.getRange('U'+(lastRowIndex+1).toString()).setValue(presData.drug_4);
      ws.getRange('V'+(lastRowIndex+1).toString()).setValue(presData.drug_freq_4);
      ws.getRange('W'+(lastRowIndex+1).toString()).setValue(presData.drug_dur_4);
      ws.getRange('X'+(lastRowIndex+1).toString()).setValue(presData.cost_4);

      ws.getRange('Y'+(lastRowIndex+1).toString()).setValue(presData.drug_5);
      ws.getRange('Z'+(lastRowIndex+1).toString()).setValue(presData.drug_freq_5);
      ws.getRange('AA'+(lastRowIndex+1).toString()).setValue(presData.drug_dur_5);
      ws.getRange('AB'+(lastRowIndex+1).toString()).setValue(presData.cost_5);

      ws.getRange('AC'+(lastRowIndex+1).toString()).setValue(presData.drug_6);
      ws.getRange('AD'+(lastRowIndex+1).toString()).setValue(presData.drug_freq_6);
      ws.getRange('AE'+(lastRowIndex+1).toString()).setValue(presData.drug_dur_6);
      ws.getRange('AF'+(lastRowIndex+1).toString()).setValue(presData.cost_6);

      ws.getRange('AG'+(lastRowIndex+1).toString()).setValue(presData.drug_7);
      ws.getRange('AH'+(lastRowIndex+1).toString()).setValue(presData.drug_freq_7);
      ws.getRange('AI'+(lastRowIndex+1).toString()).setValue(presData.drug_dur_7);
      ws.getRange('AJ'+(lastRowIndex+1).toString()).setValue(presData.cost_7);

      ws.getRange('AK'+(lastRowIndex+1).toString()).setValue(presData.drug_8);
      ws.getRange('AL'+(lastRowIndex+1).toString()).setValue(presData.drug_freq_8);
      ws.getRange('AM'+(lastRowIndex+1).toString()).setValue(presData.drug_dur_8);
      ws.getRange('AN'+(lastRowIndex+1).toString()).setValue(presData.cost_8);

      ws.getRange('AO'+(lastRowIndex+1).toString()).setValue(presData.diagnosis);
      ws.getRange('AP'+(lastRowIndex+1).toString()).setValue(presData.fee);

    
  }
  return presID_status
}



























