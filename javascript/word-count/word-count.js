const Words = function () {};

Words.prototype.count = function (input) {
    return input.replace(/[,.!?¡¿&@$%^&#:;"(){}[\]\t\n]/g, ' ')
        .replace(/\s{2,}/g,' ')
        .trim()
        .toLowerCase()
        .split(' ')
        .reduce((output, word) => {
            word = word.replace(/^\'|\'$/g, '');
            typeof output[word] === 'number' ? output[word]++ : output[word] = 1;
            return output;
        }, {});
}

module.exports = Words;