const { LineHandler } = require('bottender');
const botUser = require('../lib/bot-logic/bot-user');

const preProcess = context => {
  const { groupId, userId } = context.event.source;
  const { text } = context.event.message;
  return {
    groupId,
    userId,
    text,
  };
};

//TODO 實作各種功能判斷以及回應
//產生訂單
const isGenOrders = context => {
  const { text } = preProcess(context);
  return botUser.isGenOrders(text);
};

const handleGenOrders = context => {
  const { groupId, userId, text } = preProcess(context);
  context.replyText('user GenOrders ');
};

//查詢訂單
const isGetOrders = context => {
  return false;
};

const handleGetOrders = context => {
  context.replyText('You click QueryOrders');
};

//取消訂單
const isCancelOrders = context => {
  return false;
};

const handleCancelOrders = context => {
  context.replyText('You click QueryOrders');
};

//例外處理
const handleUncaughtEvent = context => {
  console.log('Uncaught event:', context.event.rawEvent);
  context.replyText(`您輸入的指令看不懂拉Q口O 
---------------------
使用者指令格式: 
[指令] [哪棟] [中/晚] [餐點] [+數量] [備註]

範例:
訂餐 C棟 午餐 紅燒牛腩 +1 不飯
取消 C棟 午餐 紅燒牛腩 +1
查詢

注意:
參數間用空格分開,數量請不要用全形且不要空格
訂餐 C棟 午餐 紅燒牛腩 ＋1 (X)
訂餐 C棟 午餐 紅燒牛腩 + 10 (X)
訂餐 C棟 午餐 紅燒牛腩 +10 (O)
  `);
};

module.exports = new LineHandler()
  .on(isGenOrders, handleGenOrders)
  .on(isGetOrders, handleGetOrders)
  .on(isCancelOrders, handleCancelOrders)
  .onEvent(handleUncaughtEvent)
  .build();
