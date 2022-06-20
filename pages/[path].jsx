import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import App from '../components/Home/App'
import Head from 'next/head'
const Page = () => {
    let defaultSidePane = {
        status: false,
        component: ''
    }
    const [sidePane, setSidePaneStatus] = useState(defaultSidePane)
    const router = useRouter()
    const { path } = router.query
    console.log(path)
    useEffect(() => {
        if (path.toLowerCase() === 'skill')
            setSidePaneStatus({ status: true, component: 'Skill' })
        else if (path.toLowerCase() === 'work')
            setSidePaneStatus({ status: true, component: 'Work' })
        else if (path.toLowerCase() === 'contact')
            setSidePaneStatus({ status: true, component: 'Contact' })
    }, [path])

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


export default Page
