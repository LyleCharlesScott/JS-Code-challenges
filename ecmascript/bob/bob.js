/* eslint-disable no-unused-vars */
const theReplyWhenThey = new Map([
  ['aSimpleQuestion', 'Sure.'],
  ['aQuestionYelledInAllCaps', "Calm down, I know what I'm doing!"],
  ['yellingInAllCaps', 'Whoa, chill out!'],
  ['literallyNothing', 'Fine. Be that way!'],
  ['anythingElse', 'Whatever.'],
]);
const leavingOutALotOfIt = lastThingSomeoneSaidToBob => lastThingSomeoneSaidToBob.replace(/\\.|[^a-zA-Z?0-9]/g, '');
const BobisAskedAQuestion = whatBobHeard => whatBobHeard.endsWith('?');
const BobIsYelledAtInAllCaps = whatBobHeard => (/^[^a-z]*$/g).test(whatBobHeard) && (/[A-Z]/g).test(whatBobHeard);
const BobIsToldLiterallyNothing = whatBobHeard => whatBobHeard === '';

class Bob {
  hey(lastThingSomeoneSaidToBob = '') {
    this.thingBobHeard = leavingOutALotOfIt(lastThingSomeoneSaidToBob);
    if (BobisAskedAQuestion(this.thingBobHeard)) {
      if (BobIsYelledAtInAllCaps(this.thingBobHeard)) return theReplyWhenThey.get('aQuestionYelledInAllCaps');
      return theReplyWhenThey.get('aSimpleQuestion');
    }
    if (BobIsYelledAtInAllCaps(this.thingBobHeard)) return theReplyWhenThey.get('yellingInAllCaps');
    if (BobIsToldLiterallyNothing(this.thingBobHeard)) return theReplyWhenThey.get('literallyNothing');
    return theReplyWhenThey.get('anythingElse');
  }
}

export default Bob;
