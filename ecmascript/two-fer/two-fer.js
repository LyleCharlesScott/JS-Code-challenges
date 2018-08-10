const twoFer = (name) => {
  const recipient = name === '' ? 'you' : name;
  return `One for ${recipient}, one for me.`;
};

export default twoFer;
