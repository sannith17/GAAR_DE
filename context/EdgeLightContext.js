import { createContext, useState } from 'react'

export const EdgeLightContext = createContext()

export function EdgeLightProvider({ children }) {
  const [edgeLightTrigger, setEdgeLightTrigger] = useState(false)
  const [edgeLightColor, setEdgeLightColor] = useState('#004aad')

  return (
    <EdgeLightContext.Provider value={{ 
      edgeLightTrigger, 
      setEdgeLightTrigger, 
      edgeLightColor, 
      setEdgeLightColor 
    }}>
      {children}
    </EdgeLightContext.Provider>
  )
}
