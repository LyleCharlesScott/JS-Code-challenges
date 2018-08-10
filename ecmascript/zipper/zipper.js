class NodiBranch {
  constructor(value = null, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}

const clone = (datum) => {
  if (datum instanceof Object && datum !== null) {
    return Object.keys(datum).reduce((clonedData, key) => {
      const clonedSoFar = clonedData;
      clonedSoFar[key] = clone(datum[key]);
      return clonedSoFar;
    }, new NodiBranch());
  }
  return datum;
};

class Zipper {
  constructor(focus, path) {
    this.focus = focus;
    this.path = path;
  }

  toTree() {
    return this.path[0] === undefined ?
      this.focus : this.path[this.path.length - 1];
  }

  value() {
    return this.focus.value;
  }

  traverse(rightLeftOrUp) {
    if (rightLeftOrUp === 'up') {
      return this.path[0] === undefined ?
        null : new Zipper(this.path[0], this.path.slice(1));
    }
    const rightOrLeft = rightLeftOrUp;
    return this.focus[rightOrLeft] === null ?
      null : new Zipper(this.focus[rightOrLeft], [this.focus].concat(this.path));
  }

  left() {
    return this.traverse('left');
  }

  right() {
    return this.traverse('right');
  }

  up() {
    return this.traverse('up');
  }

  set(target, value) {
    this.focus[target] = value;
    return new Zipper(this.focus, this.path);
  }

  setValue(value) {
    return this.set('value', value);
  }

  setLeft(value) {
    return this.set('left', value);
  }

  setRight(value) {
    return this.set('right', value);
  }
}

Zipper.fromTree = root => new Zipper(clone(root), []);

export default Zipper;
