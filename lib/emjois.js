import shuffle from 'crypto-shuffle'
import emoji from 'random-happy-emoji'

const emojis = () => {
  const seed = Array.from(Array(3).keys())
  const numberOfEmjois = shuffle(seed)[0] + 1
  const emojis = []
  let emjoiCount = 0
  while (emjoiCount < numberOfEmjois) {
    emjoiCount++
    emojis.push(emoji())
  }
  return emojis.join('')
}

export default emojis
