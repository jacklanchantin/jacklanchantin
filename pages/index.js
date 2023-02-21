import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Jack Lanchantin - Meta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Jack Lanchantin" />
    
        Jack Lanchantin is a researcher at Meta NY. He did his bachelors at The State University of New York at Binghamton, and masters and PhD at UVA. 

        <p className="description">
        </p>
      </main>
    </div>
  )
}
