const SLACK_TOKEN = 'Slackのトークンを指定(取得方法：https://arukayies.com/gas/slack_bot/gettoken)';

//ログをSlackに送信する処理
function postLog(log) {
  const scriptId = ScriptApp.getScriptId();
  const scriptName = DriveApp.getFileById(scriptId).getName();
  const apiUrl = 'https://slack.com/api/chat.postMessage?token=' + SLACK_TOKEN;
  const attachments = JSON.stringify([
    {
      'color': '#FD8F07',
      'blocks': [
        {
          'type': 'section',
          'fields': [
            {
              'type': 'mrkdwn',
              'text': '*スクリプト名:*\n' + scriptName
            },
            {
              'type': 'mrkdwn',
              'text': '*時間:*\n' + new Date()
            }

          ]
        },
        {
          'type': 'section',
          'text': {
            'type': 'mrkdwn',
            'text': '*ログ:*\n```' + log + '```'
          }
        }
      ]
    }
  ]);
  const payload = {
    'channel': 'gas',
    'attachments': attachments
  };
  const options = {
    'method': 'post',
    'payload': payload
  };
  return UrlFetchApp.fetch(apiUrl, options);
}