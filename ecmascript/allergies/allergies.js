const allAllergies = ['eggs', 'peanuts', 'shellfish', 'strawberries', 'tomatoes', 'chocolate', 'pollen', 'cats', ];

const getAllergies = (code) => {
  let workingCode = code;
  return allAllergies.reduceRight((allergies, allergy, index) => {
    const allergyCode = 2 ** index;
    if (workingCode >= allergyCode) {
      workingCode -= allergyCode;
      allergies.unshift(allergy);
    }
    return allergies
  }, [])
}

class Allergies {
  constructor(code) {
    this.code = code % (2 ** allAllergies.length);
    this.allergies = getAllergies(this.code);
  }

  list() {
    return this.allergies;
  }

  allergicTo(allergy) {
    return this.allergies.includes(allergy);
  }
}

export default Allergies;
