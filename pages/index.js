import Head from 'next/head';
import { Inter } from '@next/font/google';
import '../styles/Header.module.css';



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Lettercutter</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={`${process.env.FAVICON}/favicon.ico`} />
      </Head>
      <main>
        <div>Lettercutter</div>
      </main>
    </>
  )
}