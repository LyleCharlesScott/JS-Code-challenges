const isASublist = 'SUBLIST';
const isASuperlist = 'SUPERLIST';
const isEqual = 'EQUAL';
const isUnequal = 'UNEQUAL';

const isFirstInsideSecond = (first, second) => {
  if (first.length > second.length) return false;
  if (first.length !== 0) {
    const relativeIndex = second.indexOf(first[0]);
    if (relativeIndex === -1 || second.slice(relativeIndex).length < first.length) {
      return false;
    }

    for (let firstIndex = 0; firstIndex < first.length; firstIndex += 1) {
      const secondIndex = relativeIndex + firstIndex;
      if (first[firstIndex] !== second[secondIndex]) {
        return isFirstInsideSecond(first, second.slice(relativeIndex + 1));
      }
    }
  }
  return true;
};

const checkForSublists = (listOne, listTwo) => {
  if (isFirstInsideSecond(listOne, listTwo) === false) {
    if (isFirstInsideSecond(listTwo, listOne) === true) {
      return isASuperlist;
    }
    return isUnequal;
  }

  return listOne.length === listTwo.length ? isEqual : isASublist;
};

class List {
  constructor(array = []) {
    this.list = array;
  }

  compare(other = []) {
    return checkForSublists(this.list, other.list);
  }
}

export default List;
