//ログをシートに書き込む処理
function addLog(log) {
  const ss = SpreadsheetApp.openById('シートID');
  const sheet = ss.getSheetByName('シート名');
  sheet.appendRow([new Date(), log]);
  return log
}