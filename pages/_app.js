import '../styles/globals.css'
import { CartProvider } from '../context/CartContext'
import Layout from '../components/layout/Layout'
import { useState, createContext } from 'react'
import EdgeLighting from '../components/ui/EdgeLighting'

export const EdgeLightContext = createContext()

export default function App({ Component, pageProps }) {
  const [edgeLightTrigger, setEdgeLightTrigger] = useState(false)
  const [edgeLightColor, setEdgeLightColor] = useState('#004aad')

  return (
    <EdgeLightContext.Provider value={{ 
      edgeLightTrigger, 
      setEdgeLightTrigger, 
      edgeLightColor, 
      setEdgeLightColor 
    }}>
      <CartProvider>
        <Layout>
          <EdgeLighting trigger={edgeLightTrigger} color={edgeLightColor} />
          <Component {...pageProps} />
        </Layout>
      </CartProvider>
    </EdgeLightContext.Provider>
  )
}
