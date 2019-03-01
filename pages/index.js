import React from 'react'
import Head from 'next/head'
import shuffle from 'crypto-shuffle'
import getRandomFont from 'random-font'
import words from '../lib/words'
import intros from '../lib/intros'
function getWord () {
  const wordList = shuffle(words.slice(0))
  const introList = shuffle(intros.slice(0))
  return `${introList[0]} ${wordList[0]}!`
}

const Index = class extends React.Component {
  constructor () {
    super()
    this.state = {
      word: getWord(),
      font: getRandomFont()

    }
    this.deployHappiness = this.deployHappiness.bind(this)
  }

  deployHappiness () {
    const word = getWord()
    const font = getRandomFont()
    this.setState({ word: word, font: font })
  }

  render () {
    return (
      <div>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1.0' />
          <title>Drugg gjør livet lysere!</title>
        </Head>
        <div className={'wrapper'}>
          <h1>Drugg gjør livet lysere!</h1>
          <img src={'/static/drugg.jpg'} />
          <div className='fortune-box'>
            {this.state.word}
          </div>
          <p>
            <button onClick={this.deployHappiness}>Gi meg mer lys!</button>
          </p>
          <style jsx global>
            {`
            body {
              background-color: PaleVioletRed;
              padding: 20px;
            }
            img {
              border-radius: 25px;
            }
            button {
              width: 90%;
              height: 60px;
              font-size: 30px;
              border-radius: 25px;
              border: 1px solid black;
              cursor: pointer;
              display: inline-block;
              text-decoration: none;
              background-color: thistle;
              outline: 0;
            }
            button:focus {
              outline:0;
            }
            button:active {
              outline: 0;
              background-color: plum;
            }
            .fortune-box {
              font-size: 48px;
              font-family: ${this.state.font};
              padding: 15px;
            }
            .wrapper {
              text-align: center;
            }
          `}
          </style>
        </div>
      </div>
    )
  }
}

export default Index
