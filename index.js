const tutorials = [
  'what does the this keyword mean?',
  'What is the Contutorialuctor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {
  const firstCapitalized = tutorials.map(string => {
    return string.split(' ').map(word => capitalizeWord(word)).join(' ')
  })
  return firstCapitalized
}

const capitalizeWord = (word) => (word.substring(0, 1).toUpperCase() + word.substring(1))
