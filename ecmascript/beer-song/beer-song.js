let s;
let ninetyNine;
let ninetyEight;
let takeOneDownAndPassItAround;

const template = () => `${ninetyNine[0]} bottle${s[0]} of beer on the wall, ${ninetyNine[1]} bottle${s[0]} of beer.
${takeOneDownAndPassItAround}, ${ninetyEight} bottle${s[1]} of beer on the wall.
`;

const beerSong = {
  verse: (verseNumber) => {
    s = ['s', 's'];
    ninetyNine = [verseNumber, verseNumber];
    ninetyEight = verseNumber - 1;
    takeOneDownAndPassItAround = 'Take one down and pass it around';

    if (verseNumber === 2) {
      s[1] = '';
      return template();
    }
    if (verseNumber === 1) {
      s[0] = '';
      ninetyEight = 'no more';
      takeOneDownAndPassItAround = 'Take it down and pass it around';
      return template();
    }
    if (verseNumber === 0) {
      ninetyNine[0] = 'No more';
      ninetyNine[1] = 'no more';
      takeOneDownAndPassItAround = 'Go to the store and buy some more';
      ninetyEight = 99;
      return template();
    }
    return template();
  },
  sing: (firstVerse = 99, lastVerse = 0) => {
    const lyrics = [];
    for (let i = firstVerse; i >= lastVerse; i -= 1) {
      lyrics.push(beerSong.verse(i));
    }
    return lyrics.join('\n');
  },
};

export default beerSong;
