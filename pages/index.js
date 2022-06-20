import Head from 'next/head'
import App from '../components/Home/App'
import { library } from '@fortawesome/fontawesome-svg-core';
import { useState } from 'react';

const defaultSidePane = {
  status: false,
  component: ''
}

export default function Home() {
  const [sidePane, setSidePaneStatus] = useState(defaultSidePane)
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
        <App sidePane={sidePane} setSidePaneStatus={setSidePaneStatus} />
      </main>
    </>
  )
}
