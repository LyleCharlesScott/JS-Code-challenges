let Bob = function () {
    this.isHowBobRepliesTo = {
        aSimpleQuestion: 'Sure.',
        aQuestionYelledInAllCaps: "Calm down, I know what I'm doing!",
        yellingInAllCaps: 'Whoa, chill out!',
        literallyNothing: 'Fine. Be that way!',
        anythingElse: 'Whatever.'
    }
}

Bob.prototype.hey = function (lastThingSomeoneSaidToBob = '') {
    let whatBobHeard = breakItDownToBrassTacks(lastThingSomeoneSaidToBob);
    if (BobisAskedAQuestion(whatBobHeard)) {
        if (BobIsYelledAtInAllCaps(whatBobHeard)) {
            return this.isHowBobRepliesTo.aQuestionYelledInAllCaps;
        } 
        return this.isHowBobRepliesTo.aSimpleQuestion;
    }
    if (BobIsYelledAtInAllCaps(whatBobHeard)) {
        return this.isHowBobRepliesTo.yellingInAllCaps;
    }
    if (BobIsToldLiterallyNothing(whatBobHeard)) {
        return this.isHowBobRepliesTo.literallyNothing;
    }
    return this.isHowBobRepliesTo.anythingElse;
}

module.exports = Bob;

const BobisAskedAQuestion = function (whatBobHeard) {
    return whatBobHeard.match(/.$/g) == '?';
}

const BobIsYelledAtInAllCaps = function (whatBobHeard) {
    return whatBobHeard.match(/^[^a-z]*$/g) && 
        whatBobHeard.match(/[A-Z]/g);
}

const BobIsToldLiterallyNothing = function (whatBobHeard) {
    return whatBobHeard === '';
}

const breakItDownToBrassTacks = function (lastThingSomeoneSaidToBob) {
    return lastThingSomeoneSaidToBob.replace(/\\.|[^a-zA-Z?0-9]/g, '');
}
