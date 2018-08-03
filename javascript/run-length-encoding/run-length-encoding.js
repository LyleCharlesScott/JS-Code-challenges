let RLE = {
    encode: function (string) {
        let encodedOutput = '';
        let counter = 1;
        for (let i = 1; i <= string.length; i++) {
            if (string[i-1] != string[i]) {
                encodedOutput += counter == 1 ? string[i-1] : counter + string[i-1];
                counter = 1;
            } else {
                counter ++;
            }
        }
        return encodedOutput;
    },
    decode: function (string) {
        let decodedOutput = '';
        let currentNumber = '';
        for (let i in string) {
            if (string[i].match(/^[0-9]/g)) {
                currentNumber += string[i];
            } else {
                currentNumber = currentNumber ? parseInt(currentNumber, 10) : 1;
                for (let j = 0; j < currentNumber; j++) {
                    decodedOutput += string[i];
                }
                currentNumber = '';
            }
        }
        return decodedOutput;
    }
};

module.exports = RLE;