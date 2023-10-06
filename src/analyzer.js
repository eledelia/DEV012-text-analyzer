const analyzer = {
  
  getWordCount: (text) => {
    if (text.trim() === "") {
      return 0;
    }
  
    const wordRegex = /\S+/g;
    const matches = text.match(wordRegex);
  
    return matches ? matches.length : 0;
  },
  
  getCharacterCount: (text) => {
    const character = text.length;
    return character;
  },

  getCharacterCountExcludingSpaces: (text) => {
    const textFiltrado = text.replace(/[^\w\d]/g, "");
    if (text === "") {
      return 0;
    } else {
      const character = textFiltrado.length;
      return character;
    }
  },

  getNumberCount: (text) => {
    const regexNum = /\b\d+(\.\d+)?\b/g;
    const matches = text.match(regexNum);

    let sum = 0;

    if (matches) {
      for (const match of matches) {
        // Intenta convertir a número solo si el match sigue el formato X.Y
        if (/^\d+(\.\d+)?$/.test(match)) {
          sum++;
        }
      }
    }

    return sum;
  },

  getNumberSum: (text) => {
    const regexNum = /\b\d+(\.\d+)?\b/g;
    const matches = text.match(regexNum);

    let sum = 0;

    if (matches) {
      for (const match of matches) {
        // Intenta convertir a número solo si el match sigue el formato X.Y
        if (/^\d+(\.\d+)?$/.test(match)) {
          sum += parseFloat(match);
        }
      }
    }

    return sum;
  },

  getAverageWordLength: (text) => {
    const words = text.split(/\s+/);
    const wordsToConsiderate = words.filter((words) => words.trim().length > 0);
    let SumWords = 0;
    if (wordsToConsiderate === "") {
      return 0;
    } else {
      for (let i = 0; i < wordsToConsiderate.length; i++) {
        const word = wordsToConsiderate[i].length;
        SumWords += word;
      }
      const average = SumWords / words.length;
      return parseFloat(average.toFixed(2));
    }
  },
};

export default analyzer;
