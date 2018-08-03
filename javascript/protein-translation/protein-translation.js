'use strict';

const rawCodonData = [
    { codons: ['AUG'], name: 'Methionine'},
    { codons: ['AUU', 'AUC', 'AUA'], name: 'Isoleucine'},
    { codons: ['ACA', 'ACC', 'ACG', 'ACU'], name: 'Threonine'},
    { codons: ['AAU', 'AAC'], name: 'Asparagine'},
    { codons: ['AAG', 'AAA'], name: 'Lysine'},
    { codons: ['AGA', 'AGG', 'CGA', 'CGC', 'CGG', 'CGU'], name: 'Arginine'},
    { codons: ['CCA', 'CCC', 'CCG', 'CCU'], name: 'Proline'},
    { codons: ['CAC', 'CAU'], name: 'Histidine'},
    { codons: ['CAA', 'CAG'], name: 'Glutamine'},
    { codons: ['UUU', 'UUC'], name: 'Phenylalanine'},
    { codons: ['UUA', 'UUG', 'CUA', 'CUC', 'CUG', 'CUU'], name: 'Leucine'},
    { codons: ['UCU', 'UCC', 'UCA', 'UCG', 'AGU', 'AGC'], name: 'Serine'},
    { codons: ['UAU', 'UAC'], name: 'Tyrosine'},
    { codons: ['UGU', 'UGC'], name: 'Cysteine'},
    { codons: ['UGG'], name: 'Tryptophan'},
    { codons: ['UAA', 'UAG', 'UGA'], name: 'STOP'},
    { codons: ['GUA', 'GUC', 'GUG', 'GUU'], name: 'Valine'},
    { codons: ['GCA', 'GCC', 'GCG', 'GCU'], name: 'Alanine'},
    { codons: ['GAU', 'GAC'], name: 'Aspartate'},
    { codons: ['GAA', 'GAG'], name: 'Glutamate'},
    { codons: ['GGA', 'GGC', 'GGG', 'GGU'], name: 'Glycine'}
];

const generateCodonTrie = function () {
    return rawCodonData.reduce((dictionary, aminoAcid) => {
        aminoAcid.codons.forEach(codon => {
            let branch = dictionary;
            [...codon].forEach((nucleotide) => {
                if (branch[nucleotide] == undefined) {
                    branch[nucleotide] = {};
                }
                branch = branch[nucleotide];
            })
            branch.name = aminoAcid.name;
         })
         return dictionary;
    }, {});
};

const codonDictionary = generateCodonTrie();

const proteinTranslator = function (RNA = '') {
    checkRNAForError(RNA);
    let polypeptide = [];
    for (let i = 0; i < RNA.length; i += 3) {
        let codon = RNA.substr(i, 3);
        let aminoAcid = getAminoAcidFromCodon(...codon);
        if (aminoAcid !== 'STOP') {
            polypeptide.push(aminoAcid);
        } else return polypeptide;
    }
    return polypeptide;
};

const getAminoAcidFromCodon = function (nucleotide1, nucleotide2, nucleotide3) {
    return codonDictionary[nucleotide1][nucleotide2][nucleotide3].name;
};

const checkRNAForError = function (RNA) {
    if (typeof RNA !== 'string' || RNA.match(/[^AGCU]/)) {
        throw new Error('Invalid codon');
    }
    if (RNA.length % 3 !== 0 && 
        !(
            RNA.indexOf('UAA') % 3 === 0 || 
            RNA.indexOf('UAG') % 3 === 0 || 
            RNA.indexOf('UGA') % 3 === 0)
    ) {
        throw new Error('Invalid codon: less than three nucleotides');
    }
};

module.exports = proteinTranslator;