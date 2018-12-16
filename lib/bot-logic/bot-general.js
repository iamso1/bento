isGeneralFlow = text => {
  const content = text.trim().split(' ');
  const generalCommands = new Set(['關於', '幫助']);
  return generalCommands.has(content[0]) ? true : false;
};

isUserFlow = (groupId, userId) => {
  return true;
};

isAdminFlow = (groupId, userId) => {
  return true;
};

isAbout = text => {
  const content = text.trim().split(' ');
  return content[0] === '關於' ? true : false;
};

module.exports = {
  isAbout: function(text) {
    return isAbout(text);
  },
  isGeneralFlow: function(text) {
    return isGeneralFlow(text);
  },
  isUserFlow: function(text) {
    return isUserFlow(text);
  },
  isAdminFlow: function(text) {
    return isAdminFlow(text);
  },
};
