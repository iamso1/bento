const { LineHandler } = require('bottender');
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

//關於
const isAbout = context => {
  const { text } = preProcess(context);
  const content = text.trim().split(' ');
  return content[0] === '關於' ? true : false;
};

const handleAbout = context => {
  context.replyText('welecome to use bento bot');
};

//例外處理
const handleUncaughtEvent = context => {
  console.log('Uncaught event:', context.event.rawEvent);
};

module.exports = new LineHandler()
  .on(isAbout, handleAbout)
  .onEvent(handleUncaughtEvent)
  .build();
