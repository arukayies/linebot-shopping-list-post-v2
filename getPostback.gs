//ポストバックイベントの処理
function getPostback(event) {
  //eventの宛先IDを取得
  let to;
  if (event.source.type == 'user') {
    to = event.source.userId;
  } else {
    to = event.source.roomId;
  }
  //設定値を0にする
  prop.setProperty('CONF', 0);
  //買い物リストの文字列を取得
  const stringLists = prop.getProperty('LIST');
  //買い物リストの文字列を配列に変換して取得
  const ArrayLists = stringLists.split(',');

  //ポストバックから受け取ったデータを取得
  const data = event.postback.data;

  //買い物リストから削除する
  const newArrayLists = ArrayLists.filter(function (a) {
    return a !== data.replace('delete=', '');
  });

  //買い物リストを更新する
  prop.setProperty('LIST', newArrayLists.join(','));

  //削除結果をLINEに送信する
  const lineMessageObject = [
    {
      type: 'text',
      text: `『${data.replace('delete=', '')}』を削除しました`,
    },
  ]
  return pushLine(lineMessageObject, to);
}