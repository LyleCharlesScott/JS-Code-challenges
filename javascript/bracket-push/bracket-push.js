const bracket = function (setOfBrackets) {
    let thisSetOfBrackets = setOfBrackets.replace(/[^\(\)\[\]\{\}]/g, '');

    const removeNestedBrackets = function (bracketString) {
        let reducedString = bracketString.replace('()', '').replace('[]', '').replace('{}', '');
        if (reducedString !== bracketString) {
            return removeNestedBrackets(reducedString);
        }
        return reducedString.length === 0;
    }

    return removeNestedBrackets(thisSetOfBrackets);
}

module.exports = bracket;