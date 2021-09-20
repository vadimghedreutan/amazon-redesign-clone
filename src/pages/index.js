import Head from 'next/head'
import Banner from '../components/Banner'
import ProductFeed from '../components/ProductFeed'

export default function Home({ products }) {
  return (
    <>
      <Head>
        <title>Amazon - Redesign Concept</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <ProductFeed products={products} />
    </>
  )
}

export async function getServerSideProps(context) {
  const products = await fetch('https://fakestoreapi.com/products').then(
    (res) => res.json()
  )

  return {
    props: {
      products,
    },
  }
}
