const { LineHandler } = require('bottender');

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

module.exports = new LineHandler()
  .on(isGetOrders, handleGetOrders)
  .on(isGetShipping, handleGetShipping)
  .onEvent(context => console.log('Uncaught event:', context.event.rawEvent))
  .build();
