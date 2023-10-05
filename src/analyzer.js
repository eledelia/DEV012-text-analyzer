const analyzer = {
  getWordCount: (text) => {
    if (text === "") {
      return 0;
    } else {
      const palabras = text.split(/\s+/);
      return palabras.length;
    }
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

  getAverageWordLength: (text) => {
    const words = text.split(/\s+/);
    let SumWords = 0;
    if (text === "") {
      return 0;
    } else {
      for (let i = 0; i < words.length; i++) {
        const word = words[i].length;
        SumWords += word;
      }
      const average = SumWords / words.length;
      return average.toFixed(2);
    }
  },
  getNumberCount: (text) => {
    let number = 0;

    for (let i = 0; i < text.length; i++) {
      const caracter = text[i];
      if (!isNaN(parseInt(caracter))) {
        number++;
      }
    }

    return number;
  },

  getNumberSum: (text) => {
    let number = 0;

    for (let i = 0; i < text.length; i++) {
      const caracter = text[i];
      if (!isNaN(parseInt(caracter))) {
        number += parseInt(caracter);
      }
    }

    return number;
  },
};

export default analyzer;
