import Head from 'next/head'
import '../styles/globals.css'
import { Profile } from '../data/data'

const siteURL = 'https://sayak2k1maruti.github.io'
const title = `${Profile.name} | Software Engineer`
const description = `${Profile.role} at ${Profile.company}, building distributed trading systems, data platforms and agentic AI.`

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={siteURL} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${siteURL}/og-image.png`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={`${siteURL}/og-image.png`} />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
