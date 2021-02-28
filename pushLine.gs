//LINEに送信する処理
function pushLine(lineMessageObject, TO) {
  //LINEに送信用のURL
  const PUSH_API_URL = 'https://api.line.me/v2/bot/message/push';

  const headers = {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + LINE_TOKEN
  };
  const data = {
    to: TO,
    messages: lineMessageObject
  };
  const options = {
    method: 'POST',
    headers: headers,
    payload: JSON.stringify(data)
  };
  return UrlFetchApp.fetch(PUSH_API_URL, options);
}
