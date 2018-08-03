var TwoFer = function (who) {
  
};

TwoFer.prototype.twoFer = function (who = "you") {
  let recipient = who;
  return `One for ${recipient}, one for me.` 
};

module.exports = TwoFer;