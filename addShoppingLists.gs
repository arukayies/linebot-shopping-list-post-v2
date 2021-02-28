//買い物リストを追加モードにする処理
function addShoppingLists(TO) {
  //設定値を1にする
  prop.setProperty('CONF', 1);
  //使い方の内容
  const message =
    `追加したい品目を入力してください。
改行すると、複数追加できます。`;
  const lineMessageObject = [
    {
      type: 'text',
      text: message,
    },
  ];
  return pushLine(lineMessageObject, TO);
}