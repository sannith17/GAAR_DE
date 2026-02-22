import Link from 'next/link'
import { FaShoppingCart } from 'react-icons/fa'
import { useCart } from '../../context/CartContext'

export default function CartIcon() {
  const { cart } = useCart()
  const itemCount = cart.items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <Link href="/cart" className="relative group">
      {/* Cart Icon - Gold with glow and hover animation */}
      <div className="relative">
        <FaShoppingCart 
          size={22} 
          className="text-yellow-400 group-hover:text-yellow-300 transition-all 
                     drop-shadow-[0_0_8px_rgba(250,204,21,0.5)] 
                     group-hover:scale-110 transform duration-200" 
        />
        
        {/* Subtle pulse ring effect */}
        <div className="absolute inset-0 rounded-full border-2 border-yellow-400/30 
                      group-hover:scale-125 group-hover:border-yellow-400/50 
                      transition-all duration-300 opacity-0 group-hover:opacity-100">
        </div>
      </div>
      
      {/* Item Count Badge - Gold themed */}
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-gradient-to-br from-yellow-400 to-yellow-500 
                       text-white text-xs w-5 h-5 rounded-full flex items-center justify-center 
                       font-bold shadow-lg group-hover:scale-110 transition-transform
                       border border-yellow-300">
          {itemCount}
        </span>
      )}
    </Link>
  )
}
