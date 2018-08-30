import WordSearch from './word-search';


describe('single line grids', () => {
  test('Should accept an initial game grid', () => {
    const grid = ["jefblpepre"];

    const wordSearch = new WordSearch(grid);

    expect(wordSearch instanceof WordSearch).toEqual(true);
  });

  test('can accept a target search word', () => {

    const grid = ["jefblpepre"];

    const wordSearch = new WordSearch(grid);

    expect(wordSearch.find(["glasnost"])).toEqual({"glasnost": undefined});
  });

  test('should locate a word written left to right', () => {
    const grid = ["clojurermt"];

    const expectedResults = {
      "clojure": {
        "start": [1, 1],
        "end":   [1, 7]
      }
    };


    const wordSearch = new WordSearch(grid);

    expect(wordSearch.find(["clojure"])).toEqual(expectedResults);
  });

  test('can locate a left to right word in a different position', () => {

    const grid = ["mtclojurer"];

    const expectedResults = {
      "clojure": {
        "start": [1, 3],
        "end":   [1, 9]
      }
    };

    const wordSearch = new WordSearch(grid);

    expect(wordSearch.find(["clojure"])).toEqual(expectedResults);

  });

  test('can locate a different left to right word', () => {

    const grid = ["coffeelplx"];

    const expectedResults = {
      "coffee": {
        "start": [1, 1],
        "end":   [1, 6]
      }
    };

    const wordSearch = new WordSearch(grid);

    expect(wordSearch.find(["coffee"])).toEqual(expectedResults);

  });

  test('can locate that different left to right word in a different position', () => {

    const grid = ["xcoffeezlp"];

    const expectedResults = {
      "coffee": {
        "start": [1, 2],
        "end":   [1, 7]
      }
    };

    const wordSearch = new WordSearch(grid);

    expect(wordSearch.find(["coffee"])).toEqual(expectedResults);

  });

});

describe('multi line grids', () => {
  test('can locate a left to right word in a two line grid', () => {

    const grid = [
      "jefblpepre",
      "clojurermt"
    ];

    const expectedResults = {
      "clojure": {
        "start": [2, 1],
        "end":   [2, 7]
      }
    };

    const wordSearch = new WordSearch(grid);

    expect(wordSearch.find(["clojure"])).toEqual(expectedResults);

  });

  test('can locate a left to right word in a different position in a two line grid', () => {

    const grid = [
      "jefblpepre",
      "tclojurerm"
    ];

    const expectedResults = {
      "clojure": {
        "start": [2, 2],
        "end":   [2, 8]
      }
    };

    const wordSearch = new WordSearch(grid);

    expect(wordSearch.find(["clojure"])).toEqual(expectedResults);

  });

  test('can locate a left to right word in a three line grid', () => {

    const grid = [
      "camdcimgtc",
      "jefblpepre",
      "clojurermt",
    ];

    const expectedResults = {
      "clojure": {
        "start": [3, 1],
        "end":   [3, 7]
      }
    };

    const wordSearch = new WordSearch(grid);

    expect(wordSearch.find(["clojure"])).toEqual(expectedResults);

  });

  test('can locate a left to right word in a ten line grid', () => {

    const grid = [
      "jefblpepre",
      "camdcimgtc",
      "oivokprjsm",
      "pbwasqroua",
      "rixilelhrs",
      "wolcqlirpc",
      "screeaumgr",
      "alxhpburyi",
      "jalaycalmp",
      "clojurermt"
    ];

    const expectedResults = {
      "clojure": {
        "start": [10, 1],
        "end":   [10, 7]
      }
    };

    const wordSearch = new WordSearch(grid);

    expect(wordSearch.find(["clojure"])).toEqual(expectedResults);

  });

  test('can locate a left to right word in a different position in a ten line grid', () => {

    const grid = [
      "jefblpepre",
      "camdcimgtc",
      "oivokprjsm",
      "pbwasqroua",
      "rixilelhrs",
      "wolcqlirpc",
      "screeaumgr",
      "alxhpburyi",
      "clojurermt",
      "jalaycalmp"
    ];

    const expectedResults = {
      "clojure": {
        "start": [9, 1],
        "end":   [9, 7]
      }
    };

    const wordSearch = new WordSearch(grid);

    expect(wordSearch.find(["clojure"])).toEqual(expectedResults);

  });

  test('can locate a different left to right word in a ten line grid', () => {

    const grid = [
      "jefblpepre",
      "camdcimgtc",
      "oivokprjsm",
      "pbwasqroua",
      "rixilelhrs",
      "wolcqlirpc",
      "screeaumgr",
      "alxhpburyi",
      "clojurermt",
      "jalaycalmp"
    ];

    const expectedResults = {
      "scree": {
        "start": [7, 1],
        "end":   [7, 5]
      }
    };

    const wordSearch = new WordSearch(grid);

    expect(wordSearch.find(["scree"])).toEqual(expectedResults);

  });

});


describe('can find multiple words', () => {
  test('can find two words written left to right', () => {
    const grid = [
      "aefblpepre",
      "camdcimgtc",
      "oivokprjsm",
      "pbwasqroua",
      "rixilelhrs",
      "wolcqlirpc",
      "screeaumgr",
      "alxhpburyi",
      "jalaycalmp",
      "clojurermt",
      "xjavamtzlp"
    ];

    const expectedResults = {
      "clojure": {
        "start": [10, 1],
        "end":   [10, 7]
      },
      "java":    {
        "start": [11, 2],
        "end":   [11, 5]
      }
    };

    const wordSearch = new WordSearch(grid);

    expect(wordSearch.find(["java", "clojure"])).toEqual(expectedResults);

  });
});

describe('different directions', () => {



  test('should locate a single word written right to left', () => {
    const grid = ["rixilelhrs"];

    const expectedResults = {
      "elixir": {
        "start": [1, 6],
        "end":   [1, 1]
      }
    };

    const wordSearch = new WordSearch(grid);

    expect(wordSearch.find(["elixir"])).toEqual(expectedResults);

  });

  test('should locate multiple words written in different horizontal directions', ()=> {
    const grid = [
      "jefblpepre",
      "camdcimgtc",
      "oivokprjsm",
      "pbwasqroua",
      "rixilelhrs",
      "wolcqlirpc",
      "screeaumgr",
      "alxhpburyi",
      "jalaycalmp",
      "clojurermt"
    ];

    const expectedResults = {
      "clojure": {
        "start": [10, 1],
        "end":   [10, 7]
      },
      "elixir":    {
        "start": [5, 6],
        "end":   [5, 1]
      }
    };

    const wordSearch = new WordSearch(grid);

    expect(wordSearch.find(["elixir", "clojure"])).toEqual(expectedResults);

  });
});

describe('vertical directions', ()=> {
  test('should locate words written top to bottom', ()=> {
    const grid = [
      "jefblpepre",
      "camdcimgtc",
      "oivokprjsm",
      "pbwasqroua",
      "rixilelhrs",
      "wolcqlirpc",
      "screeaumgr",
      "alxhpburyi",
      "jalaycalmp",
      "clojurermt"
    ];

    const expectedResults = {
      "clojure": {
        "start": [10, 1],
        "end":   [10, 7]
      },
      "elixir":    {
        "start": [5, 6],
        "end":   [5, 1]
      },
      "ecmascript": {
        "start": [1, 10],
        "end":   [10, 10]
      }
    };

    const wordSearch = new WordSearch(grid);

    expect(wordSearch.find(["elixir", "clojure", "ecmascript"])).toEqual(expectedResults);

  });

  test('should locate words written bottom to top', ()=> {
    const grid = [
      "jefblpepre",
      "camdcimgtc",
      "oivokprjsm",
      "pbwasqroua",
      "rixilelhrs",
      "wolcqlirpc",
      "screeaumgr",
      "alxhpburyi",
      "jalaycalmp",
      "clojurermt"
    ];

    const expectedResults = {
      "clojure": {
        "start": [10, 1],
        "end":   [10, 7]
      },
      "elixir":    {
        "start": [5, 6],
        "end":   [5, 1]
      },
      "ecmascript": {
        "start": [1, 10],
        "end":   [10, 10]
      },
      "rust":{
        "start": [5, 9],
        "end":   [2, 9]
      }
    };

    const wordSearch = new WordSearch(grid);

    expect(wordSearch.find(["elixir", "clojure", "ecmascript", "rust"])).toEqual(expectedResults);

  });
  test('should locate words written top left to bottom right', ()=> {
    const grid = [
      "jefblpepre",
      "camdcimgtc",
      "oivokprjsm",
      "pbwasqroua",
      "rixilelhrs",
      "wolcqlirpc",
      "screeaumgr",
      "alxhpburyi",
      "jalaycalmp",
      "clojurermt"
    ];

    const expectedResults = {
      "clojure": {
        "start": [10, 1],
        "end": [10, 7]
      },
      "elixir": {
        "start": [5, 6],
        "end": [5, 1]
      },
      "ecmascript": {
        "start": [1, 10],
        "end": [10, 10]
      },
      "rust": {
        "start": [5, 9],
        "end": [2, 9]
      },
      "java": {
        "start": [1, 1],
        "end": [4, 4]
      }
    };

    const wordSearch = new WordSearch(grid);

    expect(wordSearch.find([
      "clojure",
      "elixir",
      "ecmascript",
      "rust",
      "java"
    ])).toEqual(expectedResults);

  });

  test('should locate words written bottom right to top left', ()=> {
    const grid = [
      "jefblpepre",
      "camdcimgtc",
      "oivokprjsm",
      "pbwasqroua",
      "rixilelhrs",
      "wolcqlirpc",
      "screeaumgr",
      "alxhpburyi",
      "jalaycalmp",
      "clojurermt"
    ];

    const expectedResults = {
      "clojure": {
        "start": [10, 1],
        "end": [10, 7]
      },
      "elixir": {
        "start": [5, 6],
        "end": [5, 1]
      },
      "ecmascript": {
        "start": [1, 10],
        "end": [10, 10]
      },
      "rust": {
        "start": [5, 9],
        "end": [2, 9]
      },
      "java": {
        "start": [1, 1],
        "end": [4, 4]
      },
      "lua": {
        "start": [9, 8],
        "end": [7, 6]
      }
    };

    const wordSearch = new WordSearch(grid);

    expect(wordSearch.find([
      "clojure",
      "elixir",
      "ecmascript",
      "rust",
      "java",
      "lua"
    ])).toEqual(expectedResults);

  });

  test('should locate words written bottom left to top right', ()=> {
    const grid = [
      "jefblpepre",
      "camdcimgtc",
      "oivokprjsm",
      "pbwasqroua",
      "rixilelhrs",
      "wolcqlirpc",
      "screeaumgr",
      "alxhpburyi",
      "jalaycalmp",
      "clojurermt"
    ];

    const expectedResults = {
      "clojure": {
        "start": [10, 1],
        "end": [10, 7]
      },
      "elixir": {
        "start": [5, 6],
        "end": [5, 1]
      },
      "ecmascript": {
        "start": [1, 10],
        "end": [10, 10]
      },
      "rust": {
        "start": [5, 9],
        "end": [2, 9]
      },
      "java": {
        "start": [1, 1],
        "end": [4, 4]
      },
      "lua": {
        "start": [9, 8],
        "end": [7, 6]
      },
      "lisp": {
        "start": [6, 3],
        "end": [3, 6]
      }
    };

    const wordSearch = new WordSearch(grid);

    expect(wordSearch.find([
      "clojure",
      "elixir",
      "ecmascript",
      "rust",
      "java",
      "lua",
      "lisp"
    ])).toEqual(expectedResults);

  });

  test('should locate words written top right to bottom left', ()=> {
    const grid = [
      "jefblpepre",
      "camdcimgtc",
      "oivokprjsm",
      "pbwasqroua",
      "rixilelhrs",
      "wolcqlirpc",
      "screeaumgr",
      "alxhpburyi",
      "jalaycalmp",
      "clojurermt"
    ];

    const expectedResults = {
      "clojure": {
        "start": [10, 1],
        "end": [10, 7]
      },
      "elixir": {
        "start": [5, 6],
        "end": [5, 1]
      },
      "ecmascript": {
        "start": [1, 10],
        "end": [10, 10]
      },
      "rust": {
        "start": [5, 9],
        "end": [2, 9]
      },
      "java": {
        "start": [1, 1],
        "end": [4, 4]
      },
      "lua": {
        "start": [9, 8],
        "end": [7, 6]
      },
      "lisp": {
        "start": [6, 3],
        "end": [3, 6]
      },
      "ruby": {
        "start": [6, 8],
        "end": [9, 5]
      }
    };

    const wordSearch = new WordSearch(grid);

    expect(wordSearch.find([
      "clojure",
      "elixir",
      "ecmascript",
      "rust",
      "java",
      "lua",
      "lisp",
      "ruby"
    ])).toEqual(expectedResults);

  });

  test('should locate multiple words written in different horizontal directions', ()=> {
    const grid = [
      "pclojurere",
      "oamdcimgtc",
      "nivokprjsm",
      "snopdsnopp",
      "rixilelhro",
      "wolsnoprpn",
      "screeaumgs",
      "elixirsfje",
      "jalaycalmp",
      "clojurermt"
    ];

    const expectedResults = {
      "clojure": {
        "start": [10, 1],
        "end":   [10, 7]
      },
      "elixir":    {
        "start": [5, 6],
        "end":   [5, 1]
      }
    };

    const wordSearch = new WordSearch(grid);

    expect(wordSearch.find(["elixir", "clojure", "snop"])).toEqual(expectedResults);

  });

  describe('a larger dataset', ()=> {
    test('should locate 50 capitals', ()=> {
      const grid = [
        'WAMEMUUKIHFAVWEBTESSLBDYZ', 'LKGFAFPCNCOYOMXSTRJHOFVHL',
        'ECNAIIIODKINFOTLYJETSCBQH', 'KEFTJCCRIKRVANRETMHNFVAAO',
        'REVNEDHEALAITTOTIRAQTGTNN', 'MTJANYELNNLASPFSCLVDROOEI',
        'OBZSRFYTADEGUEKUADXVINNLT', 'NYIDSDETPRIMGLNUMCPERSRES',
        'TSTSWONIOOGEUIAFOGRXWQOHU', 'GNRIMBNLLFHLAERFHYBAMEUNA',
        'OQNACAELITTAGRFZAMXIMSGDV', 'MWLICNRXSRSSATNALTAXREELQ',
        'EXOBAOOCRAGIUNOSKCAJBSNOS', 'RSZMAXRSKHWBWSHDONZPMOSTS',
        'YIBULUMKRNOTSELRAHCOTAYAO', 'OLCLAGMTPEUZHESFPGIALTIVC',
        'RONONPOXGLFBIKIRLNLTINDEO', 'EPOCSHZLUFTFPROGELLCTNLLL',
        'VANZIOALAMGTEVESAANPOLYMU', 'ONOVNEONUNONIJAHKOAMIMYAM',
        'DNTBGNNDIPCDENAESUHVPSDLB', 'HASLOICREVEGBSCRLCHIPXKBU',
        'TVOHEXPKLNJGSIAGISACTACXS', 'BBBONSAXCJQETCWRAPFBOISEP',
        'LINCOLNENLEYLSHNCHVLWUMBT',
      ];

      const expectedResults = {
        "ANNAPOLIS": { start: [ 22, 2 ], end: [ 14, 2 ] },
        "ATLANTA": { start: [ 12, 19 ], end: [ 12, 13 ] },
        "AUGUSTA": { start: [ 10, 13 ], end: [ 4, 13 ] },
        "AUSTIN": { start: [ 10, 25 ], end: [ 5, 25 ] },
        "BATONROUGE": { start: [ 3, 23 ], end: [ 12, 23 ] },
        "BISMARCK": { start: [ 7, 2 ], end: [ 14, 9 ] },
        "BOISE": { start: [ 24, 20 ], end: [ 24, 24 ] },
        "BOSTON": { start: [ 24, 3 ], end: [ 19, 3 ] },
        "CARSONCITY": { start: [ 24, 14 ], end: [ 15, 23 ] },
        "CHARLESTON": { start: [ 15, 19 ], end: [ 15, 10 ] },
        "CHEYENNE": { start: [ 4, 7 ], end: [ 11, 7 ] },
        "COLUMBIA": { start: [ 18, 4 ], end: [ 11, 4 ] },
        "COLUMBUS": { start: [ 16, 25 ], end: [ 23, 25 ] },
        "DENVER": { start: [ 5, 6 ], end: [ 5, 1 ] },
        "DESMOINES": { start: [ 11, 24 ], end: [ 19, 16 ] },
        "DOVER": { start: [ 21, 1 ], end: [ 17, 1 ] },
        "FRANKFORT": { start: [ 11, 15 ], end: [ 3, 15 ] },
        "HARTFORD": { start: [ 14, 10 ], end: [ 7, 10 ] },
        "HELENA": { start: [ 9, 24 ], end: [ 4, 24 ] },
        "HONOLULU": { start: [ 23, 4 ], end: [ 16, 11 ] },
        "INDIANAPOLIS": { start: [ 1, 9 ], end: [ 12, 9 ] },
        "JACKSON": { start: [ 13, 20 ], end: [ 13, 14 ] },
        "JEFFERSONCITY": { start: [ 20, 14 ], end: [ 8, 2 ] },
        "LANSING": { start: [ 15, 5 ], end: [ 21, 5 ] },
        "LINCOLN": { start: [ 25, 1 ], end: [ 25, 7 ] },
        "LITTLEROCK": { start: [ 10, 8 ], end: [ 1, 8 ] },
        "MADISON": { start: [ 4, 18 ], end: [ 10, 24 ] },
        "MONTGOMERY": { start: [ 6, 1 ], end: [ 15, 1 ] },
        "MONTPELIER": { start: [ 2, 14 ], end: [ 11, 14 ] },
        "NASHVILLE": { start: [ 25, 16 ], end: [ 17, 24 ] },
        "OKLAHOMACITY": { start: [ 14, 17 ], end: [ 3, 17 ] },
        "OLYMPIA": { start: [ 17, 25 ], end: [ 23, 19 ] },
        "PHOENIX": { start: [ 17, 6 ], end: [ 23, 6 ] },
        "PROVIDENCE": { start: [ 16, 17 ], end: [ 25, 8 ] },
        "RALEIGH": { start: [ 4, 11 ], end: [ 10, 11 ] },
        "RICHMOND": { start: [ 24, 16 ], end: [ 17, 23 ] },
        "SACRAMENTO": { start: [ 6, 16 ], end: [ 15, 25 ] },
        "SAINTPAUL": { start: [ 14, 25 ], end: [ 22, 17 ] },
        "SALEM": { start: [ 12, 12 ], end: [ 8, 12 ] },
        "SALTLAKECITY": { start: [ 14, 23 ], end: [ 25, 12 ] },
        "SANTAFE": { start: [ 7, 4 ], end: [ 1, 4 ] },
        "SPRINGFIELD": { start: [ 24, 6 ], end: [ 14, 16 ] },
        "TALLAHASSEE": { start: [ 15, 21 ], end: [ 25, 11 ] },
        "TOPEKA": { start: [ 19, 12 ], end: [ 24, 7 ] },
        "TRENTON": { start: [ 1, 17 ], end: [ 7, 23 ] },
      };

      const wordSearch = new WordSearch(grid);

      expect(wordSearch.find([
        "ANNAPOLIS", "ATLANTA", "AUGUSTA", "AUSTIN", "BATONROUGE",
        "BISMARCK", "BOISE", "BOSTON", "CARSONCITY", "CHARLESTON",
        "CHEYENNE", "COLUMBIA", "COLUMBUS", "DENVER", "DESMOINES",
        "DOVER", "FRANKFORT", "HARTFORD", "HELENA", "HONOLULU",
        "INDIANAPOLIS", "JACKSON", "JEFFERSONCITY", "LANSING", "LINCOLN",
        "LITTLEROCK", "MADISON", "MONTGOMERY", "MONTPELIER", "NASHVILLE",
        "OKLAHOMACITY", "OLYMPIA", "PHOENIX", "PROVIDENCE", "RALEIGH",
        "RICHMOND", "SACRAMENTO", "SAINTPAUL", "SALEM", "SALTLAKECITY",
        "SANTAFE", "SPRINGFIELD", "TALLAHASSEE", "TOPEKA", "TRENTON",
      ])).toEqual(expectedResults);
    });

  });


});
