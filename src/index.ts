const convertText = (inputValue: string) => {
  if (inputValue.length === 0) return;

  let wordOfPhrase = inputValue.split(' ');
  const newArr = [];

  for (const word of wordOfPhrase) {
    newArr.push(converted(word));
  }
  return newArr.join;
};

const converted = (word: string) => {
  let c = 0;
  let newWord = '';
  for (const letter of word) {
    if (c % 2 === 0) {
      newWord += letter.toUpperCase();
    } else {
      newWord += letter.toLowerCase();
    }

    c++;
  }
  return newWord;
};

export default convertText;
