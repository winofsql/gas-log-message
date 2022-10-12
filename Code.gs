// ************************************
// メニューの追加
// ************************************
function onOpen(e) {

  var cur_ui = SpreadsheetApp.getUi();
  cur_ui.createMenu('GAS の LOG テスト')
     .addItem('ダイアログ表示', 'GasLogTest')
     .addToUi();
  
}

// ************************************
// テンプレートリテラルは
// Chrome V8 ランタイムを有効にする
// ************************************
function CheckAlert(param) {
  SpreadsheetApp.getUi().alert(`alett が HTML より呼びだされました : ${param}`);
}
function CheckLogger(param) {
  Logger.log(`Logger.log が HTML より呼びだされました : ${param}` );
}
function CheckConsole(param) {
  console.log(`console.log が HTML より呼びだされました : ${param}` );
}

// ************************************
// メニューの実行部分
// ************************************
function GasLogTest() {

  CheckAlert("ダイアログ呼び出し");

  var html = HtmlService.createHtmlOutputFromFile('use-jquery.html')
     .setWidth(750)
     .setHeight(480);
  
  SpreadsheetApp.getUi().showModalDialog(html, '画面に jQuery を使用');
  
}
