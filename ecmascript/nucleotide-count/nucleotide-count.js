const nucleotides = { A: 0, C: 0, G: 0, T: 0 };

const nucleotideCount = {
  parse: (strand) => {
    const output = [...strand].reduce((accumulator, nucleotide) => {
      const count = accumulator;
      if (count[nucleotide] === undefined) throw new Error('Invalid nucleotide in strand');
      count[nucleotide] += 1;
      return count;
    }, { ...nucleotides });
    return `${output.A} ${output.C} ${output.G} ${output.T}`;
  },
};

export default nucleotideCount;
