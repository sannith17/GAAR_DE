import { useRouter } from 'next/router'
import { playClickSound } from '../../utils/sound'

export default function ModelButton({ model }) {
  const router = useRouter()

  const handleClick = () => {
    playClickSound()
    router.push(`/models/${model}`)
  }

  return (
    <button
      onClick={handleClick}
      className="tyre-button group relative overflow-hidden"
    >
      <span className="relative z-10">{model}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 
                      translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
    </button>
  )
}
