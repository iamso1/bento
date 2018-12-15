const { LineHandler } = require('bottender');

const handleAdminlFlow = require('./handle-admin-flow');
const handleUserlFlow = require('./handle-user-flow');

//只允許透過group使用機器人
const init = context => {
  const { session } = context;
  console.log('currentType', session.type);
  return session.type === 'user' ? true : false;
};

const isUserFlow = context => {
  return false;
};

const isAdminFlow = context => {
  return true;
};

module.exports = new LineHandler()
  .on(init, context => context.replyText('not support user'))
  .on(isUserFlow, handleUserlFlow)
  .on(isAdminFlow, handleAdminlFlow)
  .onEvent(context => {
    console.log('Uncaught event:', context.event.rawEvent);
  })
  .build();
