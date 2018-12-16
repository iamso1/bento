const { LineHandler } = require('bottender');

const handleAdminlFlow = require('./handle-admin-flow');
const handleUserlFlow = require('./handle-user-flow');
const handleGeneralFlow = require('./handle-general-flow');

const botGeneral = require('../lib/bot-logic/bot-general');

const preProcess = context => {
  const { groupId, userId } = context.event.source;
  const { text } = context.event.message;
  return {
    groupId,
    userId,
    text,
  };
};

//只允許透過group使用機器人 並且只能接受文字
const init = context => {
  const { session, event } = context;
  console.log('currentSessionType', session.type);
  console.log('currentMessageType', event.rawEvent.message.type);
  return session.type === 'user'
    ? true
    : false || event.rawEvent.message.type !== 'text';
};

const isGeneralFlow = context => {
  const { text } = preProcess(context);
  return botGeneral.isGeneralFlow(text);
};

const isUserFlow = context => {
  const { groupId, userId } = preProcess(context);
  return botGeneral.isUserFlow(groupId, userId);
};

const isAdminFlow = context => {
  const { groupId, userId } = preProcess(context);
  return botGeneral.isAdminFlow(groupId, userId);
};

module.exports = new LineHandler()
  .on(init, context => context.replyText('only support group and message type'))
  .on(isGeneralFlow, handleGeneralFlow)
  .on(isUserFlow, handleUserlFlow)
  .on(isAdminFlow, handleAdminlFlow)
  .onEvent(context => {
    console.log('Uncaught event:', context.event.rawEvent);
  })
  .build();
