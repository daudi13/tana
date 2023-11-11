import Layout from './layout'


export default function App({ Component, pageProps }) { 
  return (
    <Layout>
      <title>Ne</title>
      <Component {...pageProps} />
    </Layout>
  )
}
