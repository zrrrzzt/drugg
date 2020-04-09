import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <Html lang='no'>
        <Head />
        <body>
          <Main />
          <NextScript />
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
          `}
          </style>
        </body>
      </Html>
    )
  }
}

export default MyDocument
