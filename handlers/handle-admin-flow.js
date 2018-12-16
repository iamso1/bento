const { LineHandler } = require('bottender');
const botAdmin = require('../lib/bot-logic/bot-admin');

//TODO 實作各種功能判斷以及回應

//查詢訂單
const isGetOrders = context => {
  return true;
};

const handleGetOrders = context => {
  context.replyText('admin getOrders');
};

//查詢送貨資訊
const isGetShipping = context => {
  return false;
};

const handleGetShipping = context => {
  context.replyText('You click QueryOrders');
};

//例外處理
const handleUncaughtEvent = context => {
  console.log('Uncaught event:', context.event.rawEvent);
};

module.exports = new LineHandler()
  .on(isGetOrders, handleGetOrders)
  .on(isGetShipping, handleGetShipping)
  .onEvent(handleUncaughtEvent)
  .build();
