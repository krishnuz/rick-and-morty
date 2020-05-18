import Head from 'next/head'

import Counter from '../components/organisms/Counter'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Rick and Morty characters</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Counter />
      </main>
    </div>
  )
}
