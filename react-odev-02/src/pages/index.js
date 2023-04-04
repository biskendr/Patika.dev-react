import Head from 'next/head'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>React Weather App</title>
        <meta name="description" content="React Weather App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="icon" type="image/svg+xml" href="/react.svg" />
      </Head>
      <main className={styles.main}>
      </main>
    </>
  )
}
