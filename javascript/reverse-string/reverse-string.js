let ReverseString = (string) => {
        if (!string) {
            return '';
        };
        let output = '';
        let len = string.length-1;
        for (let i = len; i >= 0; i--) {
            output += string[i];
        }
        return output;
};

module.exports = ReverseString;