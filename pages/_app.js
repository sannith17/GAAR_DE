import '../styles/globals.css'
import { CartProvider } from '../context/CartContext'
import Layout from '../components/layout/Layout'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    // Handle client-side navigation issues
    const handleRouteChange = (url) => {
      console.log('Route changed to:', url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router])

  return (
    <CartProvider>
      <Layout>
        <Component {...pageProps} key={router.asPath} />
      </Layout>
    </CartProvider>
  )
}
