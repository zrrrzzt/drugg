import { useRouter } from 'next/router'
import Head from 'next/head'
import toaster from 'toasted-notes'
import { encode, decode } from '../lib/base64urls'
const copy = require('copy-text-to-clipboard')
const generateHappiness = require('../lib/generate-happiness')

const Happiness = () => {
  const router = useRouter()
  const { data } = router.query
  const happiness = data ? decode(data) : generateHappiness()
  const { font, word } = happiness

  const handleCopy = (event) => {
    event.preventDefault()
    copy(window.location.href)
    toaster.notify('Lenken er kopiert. Lim inn hvor du vil.', { duration: 2000 })
  }

  const handleDeployHappiness = () => {
    const { font, word } = generateHappiness()
    const data = encode(JSON.stringify({ font, word }))
    router.push('/[data]', `/${data}`)
  }

  return (
    <div>
      <Head>
        <link rel='apple-touch-icon' sizes='180x180' href='/static/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/static/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/static/favicon-16x16.png' />
        <link rel='manifest' href='/static/manifest.json' />
        <link rel='mask-icon' href='/static/safari-pinned-tab.svg' color='#5bbad5' />
        <link rel='shortcut icon' href='/static/favicon.ico' />
        <meta name='msapplication-TileColor' content='#da532c' />
        <meta name='msapplication-config' content='/static/browserconfig.xml' />
        <meta name='theme-color' content='#ffffff' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content='Side som genererer tilfeldige ting Eva Susanne elsker.' />
        <title>Drugg gjør livet lysere!</title>
      </Head>
      <div className='wrapper'>
        <h1>Drugg gjør livet lysere!</h1>
        <img src='/static/drugg.jpg' alt='Profilbilde Eva Susanne' />
        <div className='fortune-box'>
          {word}
        </div>
        <p>
          <button onClick={handleDeployHappiness}>Gi meg mer lys!</button>
        </p>
        <div className='share-wrapper'>
          <a href='/' className='share' onClick={handleCopy} title='Del lyset fra Drugg'>🔗</a>
        </div>
        <style jsx global>
          {`
          body {
              background-color: PaleVioletRed;
              padding: 20px;
              font-family: ${font};
            }
            img {
              border-radius: 25px;
            }
            button {
              width: 90%;
              height: 60px;
              font-family: ${font};
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
            .share {
              font-size: 48px;
              cursor: pointer;
              text-decoration: none;
            }
          .fortune-box {
            font-size: 48px;
            padding: 15px;
          }
          .wrapper {
            text-align: center;
          }
          .Toaster__alert {
            background-color: white;
            overflow: hidden;
            max-width: 650px;
            position: relative;
            border-radius: 0.4rem;
            display: flex;
            padding: 1rem;
            box-shadow: rgba(52, 58, 64, 0.15) 0px 1px 10px 0px,
              rgba(52, 58, 64, 0.1) 0px 6px 12px 0px,
              rgba(52, 58, 64, 0.12) 0px 6px 15px -2px;
          }
          
          .Toaster__alert_text {
            box-sizing: border-box;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
              "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji",
              "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
            color: rgb(33, 37, 41);
            -webkit-font-smoothing: antialiased;
            font-weight: 500;
            line-height: 1.5;
            font-size: 1rem;
            margin: 0px;
          }
          
          .Toaster__alert_close {
            display: none;
            padding: 12px;
            outline: none;
            cursor: pointer;
            background-color: transparent;
            position: absolute;
            top: 7px;
            right: 4px;
            border-radius: 0.4rem;
            border: 0;
            -webkit-appearance: none;
            font-size: 1rem;
            font-weight: 700;
            line-height: 1;
            text-shadow: 0 1px 0 #fff;
            opacity: 0.5;
          }
          
          .Toaster__alert_close:focus {
            box-shadow: rgba(52, 58, 64, 0.15) 0px 0px 0px 3px;
          }
          
          .Toaster__message-wrapper {
            padding: 8px;
          }          
        `}
        </style>
      </div>
    </div>
  )
}

Happiness.getInitialProps = async ({ req }) => {
  const path = req ? req.url : window.location.pathname
  const list = path.split('/')
  const data = list.pop()
  return { data }
}

export default Happiness
