import '../styles/globals.css'
import { CartProvider } from '../context/CartContext'
import { EdgeLightProvider } from '../context/EdgeLightContext'
import Layout from '../components/layout/Layout'
import EdgeLighting from '../components/ui/EdgeLighting'

export default function App({ Component, pageProps }) {
  return (
    <EdgeLightProvider>
      <CartProvider>
        <Layout>
          <EdgeLighting />
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </EdgeLightProvider>
  )
}
