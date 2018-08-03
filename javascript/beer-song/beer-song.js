let bottles, ninetyNine, ninetyEight, takeOneDownAndPassItAround;

const BeerSong = function () {};

BeerSong.prototype.template = () => {
    return `${ninetyNine[0]} ${bottles[0]} of beer on the wall, ${ninetyNine[1]} ${bottles[0]} of beer.
${takeOneDownAndPassItAround}, ${ninetyEight} ${bottles[1]} of beer on the wall.
`;
}

BeerSong.prototype.verse = function (verseNumber) {
    bottles = ['bottles', 'bottles'];
    ninetyNine = [verseNumber, verseNumber] 
    ninetyEight = verseNumber - 1;
    takeOneDownAndPassItAround = 'Take one down and pass it around';
 
    if (verseNumber > 2) {
        return this.template();
    } 
    if (verseNumber === 2) {
        bottles[1] = 'bottle';
        return this.template();
    }
    if (verseNumber === 1) {
        bottles[0] = 'bottle';
        ninetyEight = 'no more';
        takeOneDownAndPassItAround = 'Take it down and pass it around';
        return this.template();
    }
    if (verseNumber === 0) {
        ninetyNine[0] = 'No more';
        ninetyNine[1] = "no more"
        takeOneDownAndPassItAround = 'Go to the store and buy some more';
        ninetyEight = 99;
        return this.template();
    }
};

BeerSong.prototype.sing = function (firstVerse = 99, lastVerse = 0) {
    let lyrics = [];
    for (var i = firstVerse; i >= lastVerse; i--) {
        lyrics.push(this.verse(i));
    }
    return lyrics.join('\n');
}

module.exports = BeerSong;
