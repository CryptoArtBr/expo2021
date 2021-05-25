import Head from 'next/head'
import Header from '../components/Regions/Header'
import Footer from '../components/Regions/Footer'
import JogoCryptoBrick from '../components/experiments/JogoCryptoBrick/JogoCryptoBrick'

import styles from '../styles/Page.module.css'
import Link from 'next/link'
import Button from '../components/Button/Button'

export default function Sobre() {
  return (
    <div className={styles.container}>
      <Head>
        <title>🐐 CriptoArtBr 2021 🐐</title>
      </Head>
      <Header />
      <main className={styles.flex_row}>
        <Link href="/colecoes">
          <div className={styles.colecoes_btn}> 
            <Button>acessar coleções</Button>
          </div>
        </Link>
        <JogoCryptoBrick />
      </main>
      <Footer />
    </div>
  )
}