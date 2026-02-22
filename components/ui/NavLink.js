import Link from 'next/link'
import { useRouter } from 'next/router'

export default function NavLink({ href, children, className = '' }) {
  const router = useRouter()

  const handleClick = (e) => {
    e.preventDefault()
    router.push(href).then(() => {
      window.scrollTo(0, 0)
    })
  }

  return (
    <a 
      href={href} 
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  )
}
