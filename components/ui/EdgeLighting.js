import { useContext } from 'react'
import { EdgeLightContext } from '../../context/EdgeLightContext'

export default function EdgeLighting() {
  const { edgeLightTrigger, edgeLightColor } = useContext(EdgeLightContext)

  if (!edgeLightTrigger) return null

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999]">
      {/* Top edge */}
      <div className="absolute top-0 left-0 right-0 h-1 animate-edgeLightFlow">
        <div 
          className="absolute inset-0 blur-md"
          style={{ 
            background: `linear-gradient(90deg, transparent, ${edgeLightColor}, transparent)`
          }}
        ></div>
      </div>
      
      {/* Right edge */}
      <div className="absolute top-0 bottom-0 right-0 w-1 animate-edgeLightFlow">
        <div 
          className="absolute inset-0 blur-md"
          style={{ 
            background: `linear-gradient(180deg, transparent, ${edgeLightColor}, transparent)`
          }}
        ></div>
      </div>
      
      {/* Bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 h-1 animate-edgeLightFlow">
        <div 
          className="absolute inset-0 blur-md"
          style={{ 
            background: `linear-gradient(90deg, transparent, ${edgeLightColor}, transparent)`
          }}
        ></div>
      </div>
      
      {/* Left edge */}
      <div className="absolute top-0 bottom-0 left-0 w-1 animate-edgeLightFlow">
        <div 
          className="absolute inset-0 blur-md"
          style={{ 
            background: `linear-gradient(180deg, transparent, ${edgeLightColor}, transparent)`
          }}
        ></div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 left-0 w-16 h-16">
        <div 
          className="absolute top-0 left-0 w-full h-full blur-xl opacity-70 animate-pulse"
          style={{ background: `radial-gradient(circle at top left, ${edgeLightColor}, transparent)` }}
        ></div>
      </div>
      <div className="absolute top-0 right-0 w-16 h-16">
        <div 
          className="absolute top-0 right-0 w-full h-full blur-xl opacity-70 animate-pulse"
          style={{ background: `radial-gradient(circle at top right, ${edgeLightColor}, transparent)` }}
        ></div>
      </div>
      <div className="absolute bottom-0 left-0 w-16 h-16">
        <div 
          className="absolute bottom-0 left-0 w-full h-full blur-xl opacity-70 animate-pulse"
          style={{ background: `radial-gradient(circle at bottom left, ${edgeLightColor}, transparent)` }}
        ></div>
      </div>
      <div className="absolute bottom-0 right-0 w-16 h-16">
        <div 
          className="absolute bottom-0 right-0 w-full h-full blur-xl opacity-70 animate-pulse"
          style={{ background: `radial-gradient(circle at bottom right, ${edgeLightColor}, transparent)` }}
        ></div>
      </div>
    </div>
  )
}
