import shuffle from 'crypto-shuffle'
import emoji from 'random-happy-emoji'

export default () => {
  const seed = Array.from(Array(3).keys())
  const numberOfEmjois = shuffle(seed)[0] + 1
  let emojis = []
  let emjoiCount = 0
  while (emjoiCount < numberOfEmjois) {
    emjoiCount++
    emojis.push(emoji())
  }
  return emojis.join('')
}
