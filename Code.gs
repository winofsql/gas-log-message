// ************************************
// メニューの追加
// ************************************
function onOpen(e) {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('GAS の LOG テスト')
     .addItem('GasLogTest', 'GasLogTest')
     .addToUi();
  
}

// ************************************
// テンプレートリテラルは
// Chrome V8 ランタイムを有効にする
// ************************************
function CheckFromHtml(param) {
  Browser.msgBox(`HTML より呼びだされました : ${param}`);
}
function CheckLogger(param) {
  Logger.log(`HTML より呼びだされました : ${param}` );
}
function CheckConsole(param) {
  console.log(`HTML より呼びだされました : ${param}` );
}

// ************************************
// メニューの実行部分
// ************************************
function GasLogTest() {
  var html = HtmlService.createHtmlOutputFromFile('use-jquery.html')
     .setWidth(750)
     .setHeight(480);
  
  SpreadsheetApp.getUi().showModalDialog(html, '画面に jQuery を使用');
  
}
