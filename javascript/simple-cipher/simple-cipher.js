let Cipher = function (key) {
    key !== undefined ? this.storeUserKey(key) : this.generateKey();
}

Cipher.prototype.storeUserKey = function(key) {
    if (key == '' || typeof key !== 'string' || !key.match(/^[a-z]/)) {
        throw new Error("Bad key");
    } else {
        this.key = key
    }
}

Cipher.prototype.generateKey = function () {
    this.key = '';
    let keyLength = Math.floor(Math.random()*100 + 100);
    for (let i = 0; i < keyLength; i ++) {
        this.key += String.fromCharCode(Math.floor(Math.random() * 26 + 97));
    }
    return this.key;
}

Cipher.prototype._encodeCharacter = function (letter, key) { 
    let adjustment = letter.charCodeAt() + key.charCodeAt() - 97;
    return String.fromCharCode(adjustment < 123 ? adjustment : adjustment - 26)  
}

Cipher.prototype._decodeCharacter = function (letter, key) {
    let adjustment = letter.charCodeAt() - key.charCodeAt() + 97;
    return String.fromCharCode(adjustment < 97 ? adjustment + 26 : adjustment);
}

Cipher.prototype._processMessage = function (message, codingType) {
    let processedMessage = '';
    let keyLength = this.key.length;
    for (let i in message) {
        processedMessage += this[`_${codingType}Character`](message[i], this.key[i % keyLength]);
    }
    return processedMessage;
}

Cipher.prototype.encode = function (message) {
    return this._processMessage(message, 'encode');
}

Cipher.prototype.decode = function (message) {
    return this._processMessage(message, 'decode');
}

module.exports = Cipher;