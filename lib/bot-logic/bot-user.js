isGenOrders = text => {
  console.log('current text', text.trim());
  const content = text.trim().split(' ');
  return content[0] === '訂餐' ? true : false;
};

isGetOrders = text => {
  console.log('current text', text.trim());
  const content = text.trim().split(' ');
  return content[0] === '查詢' ? true : false;
};

isCancelOrders = text => {
  console.log('current text', text.trim());
  const content = text.trim().split(' ');
  return content[0] === '取消' ? true : false;
};

module.exports = {
  isGenOrders: function(text) {
    return isGenOrders(text);
  },
  isGetOrders: function(text) {
    return isGetOrders(text);
  },
  isCancelOrders: function(text) {
    return isCancelOrders(text);
  },
};
