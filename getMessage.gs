//メッセージイベントの処理
function getMessage(event) {
  //テキスト内容によって制御
  try {
    //eventの宛先IDを取得
    let to;
    if (event.source.type == 'user') {
      to = event.source.userId;
    } else {
      to = event.source.roomId;
    }
    switch (event.message.text) {
      //買い物リストを表示
      case '表示':
        pushShoppingLists(to);
        break;
      //買い物リストの追加
      case '追加':
        addShoppingLists(to);
        break;
      //買い物リストの削除
      case '削除':
        deleteShoppingLists(to);
        break;
      //使い方の表示
      case '使い方':
        pushReadme(to);
        break;
      default:
        //現在の設定値を取得
        const CONF = prop.getProperty('CONF');
        //設定値が1なら買い物リストを追加する
        if (CONF == 1) {
          //設定値を0にする
          prop.setProperty('CONF', 0);
          //空文字は削除する
          let shoppingLists = event.message.text.split(/\n/);
          shoppingLists = shoppingLists.filter(function (x) {
            return !(x === null || x === undefined || x === '');
          })
          //買い物リストを追加する
          prop.setProperty('LIST', prop.getProperty('LIST') + ',' + shoppingLists.join(','));
          const lineMessageObject = [
            {
              type: 'text',
              text: '追加しました！',
            },
          ];
          pushLine(lineMessageObject, to);
          pushShoppingLists(to);
        }
        break;
    }
  } catch (event) {
    postLog(event);
  }
}