const { LineHandler } = require('bottender');

//TODO 實作各種功能判斷以及回應
//查詢訂單
const isGetOrders = context => {
  return true;
};

const handleGetOrders = context => {
  context.replyText('You click QueryOrders');
};

module.exports = new LineHandler()
  .on(isGetOrders, handleGetOrders)
  .onEvent(context => console.log('Uncaught event:', context.event.rawEvent))
  .build();
