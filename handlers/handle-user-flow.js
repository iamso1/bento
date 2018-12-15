const { LineHandler } = require('bottender');

const preprocess = context => {
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
  const { groupId, userId, text } = preprocess(context);
  console.log(groupId, userId, text);
  return true;
};

const handleGenOrders = context => {
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

module.exports = new LineHandler()
  .on(isGenOrders, handleGenOrders)
  .on(isGetOrders, handleGetOrders)
  .on(isCancelOrders, handleCancelOrders)
  .onEvent(context => console.log('Uncaught event:', context.event.rawEvent))
  .build();
