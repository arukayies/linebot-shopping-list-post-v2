//使い方の内容をLINEに送信する処理
function pushReadme(TO) {
  //設定値を0にする
  prop.setProperty('CONF', 0);
  //使い方の内容
  const message =
    `以下のキーワードに反応します。

①『表示』:リストを表示。
②『追加』:リストに追加。
③『削除』:リストを削除。
④『使い方』:使い方を表示。`;
  const lineMessageObject = [
    {
      type: 'text',
      text: message,
    },
  ];
  return pushLine(lineMessageObject, TO);
}