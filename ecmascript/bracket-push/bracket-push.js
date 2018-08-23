const bracketPush = (stringWithBrackets) => {
  const cleanedBrackets = stringWithBrackets.replace(/[^\(\)\[\]\{\}]/g, '');

  const findAndRemoveGoodBrackets = (originalString) => {
    const modifiedString = originalString.replace('()', '').replace('[]', '').replace('{}', '');
    if (modifiedString !== originalString) return findAndRemoveGoodBrackets(modifiedString);
    return modifiedString.length === 0;
  };

  return findAndRemoveGoodBrackets(cleanedBrackets);
};

export { bracketPush };
