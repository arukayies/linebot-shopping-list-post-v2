const prop = PropertiesService.getScriptProperties();
const LINE_TOKEN = 'LINEのトークンを指定(取得方法：https://arukayies.com/gas/line_bot/gettoken)';

//買い物リストBOTのメイン処理
function doPost(e) {
  //テキスト内容によって制御
  try {
    const res = e.postData.getDataAsString();
    postLog(res);
    const event = JSON.parse(res).events[0];

    switch (event.type) {
      //メッセージイベントの場合
      case 'message':
        getMessage(event);
        break;
      //ポストバックイベントの場合
      case 'postback':
        getPostback(event);
        break;
      default:
        postLog(res);
        break;
    }
  } catch (e) {
    postLog(e);
  }
}