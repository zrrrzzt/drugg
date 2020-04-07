import shuffle from 'crypto-shuffle'
import getRandomFont from 'random-font'
import words from './words'
import intros from './intros'
import emojis from './emjois'

const getWord = () => {
  const wordList = shuffle(words.slice(0))
  const introList = shuffle(intros.slice(0))
  return `${introList[0]} ${wordList[0]} ${emojis()}!`
}

module.exports = () => {
  return {
    word: getWord(),
    font: getRandomFont()
  }
}
