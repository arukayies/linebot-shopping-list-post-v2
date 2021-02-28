//買い物リストをカルーセルテンプレートでLINEに送る処理
function deleteShoppingLists(to) {
  //設定値を2にする
  prop.setProperty('CONF', 2);
  //買い物リストの文字列を取得
  const stringLists = prop.getProperty('LIST');
  //買い物リストの文字列を配列に変換して取得
  const ArrayLists = stringLists.split(',');
  //先頭の『初期値』は削除する
  ArrayLists.shift();

  //買い物リストが空の場合
  if (stringLists == '初期値') {
    const lineMessageObject = [
      {
        type: 'text',
        text: '買い物リストは空っぽです。'
      }
    ];
    return pushLine(lineMessageObject, to);
    //買い物リストがある場合
  } else {
    pushLine(createContents(ArrayLists, '削除する品名をタップ', 'secondary'), to);
  }
}
