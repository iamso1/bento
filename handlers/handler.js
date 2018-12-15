const { LineHandler } = require('bottender');

const handleAdminlFlow = require('./handle-admin-flow');
const handleUserlFlow = require('./handle-user-flow');

//只允許透過group使用機器人 並且只能接受文字
const init = context => {
  const { session, event } = context;
  console.log('currentSessionType', session.type);
  console.log('currentMessageType', event.rawEvent.message.type);
  return session.type === 'user'
    ? true
    : false || event.rawEvent.message.type !== 'text';
};

const isUserFlow = context => {
  return true;
};

const isAdminFlow = context => {
  return true;
};

module.exports = new LineHandler()
  .on(init, context => context.replyText('only support group and message type'))
  .on(isUserFlow, handleUserlFlow)
  .on(isAdminFlow, handleAdminlFlow)
  .onEvent(context => {
    console.log('Uncaught event:', context.event.rawEvent);
  })
  .build();
