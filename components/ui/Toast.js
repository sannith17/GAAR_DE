import { useEffect } from 'react'
import { FaCheckCircle } from 'react-icons/fa'

export default function Toast({ message, onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (onClose) onClose()
    }, 3000)

    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg 
                    flex items-center space-x-3 animate-fadeIn z-50">
      <FaCheckCircle size={20} />
      <span>{message}</span>
    </div>
  )
}
