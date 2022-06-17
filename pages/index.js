import Head from 'next/head'
import App from '../components/Home/App'
import { library } from '@fortawesome/fontawesome-svg-core';


export default function Home() {

  return (
    <>
      <Head>
        <title>@Sayak</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main onLoad={() => console.log('complete')} className="bg-dark-100">
        <span className="bg-dark-100" ></span>
        <span className="bg-dark-200"></span>
        <span className="bg-dark-300"></span>
        <span className="bg-light-200"></span>
        <App />
      </main>
    </>
  )
}
