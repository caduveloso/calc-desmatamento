import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div className="bg-fixed bg-screen bg-contain bg-repeat-x pb-10" style={{ backgroundImage: `url("/images/bg1.png")` }}>
          <Main />
          <NextScript />
        </div>
      </body>
    </Html>
  )
}
