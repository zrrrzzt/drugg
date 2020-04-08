import { useRouter } from 'next/router'
import Head from 'next/head'
import { encode, decode } from '../lib/base64urls'
const generateHappiness = require('../lib/generate-happiness')

const Happiness = () => {
  const router = useRouter()
  const { data } = router.query
  const happiness = data ? decode(data) : generateHappiness()
  const { font, word } = happiness

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
            font-family: ${font};
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

Happiness.getInitialProps = async ({ req }) => {
  const path = req ? req.url : window.location.pathname
  const list = path.split('/')
  const data = list.pop()
  return { data }
}

export default Happiness
