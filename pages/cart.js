import { useCart } from '@/context/CartContext'
import Image from 'next/image'
import Link from 'next/link'
import { FaTrash } from 'react-icons/fa'
import { playClickSound } from '@/utils/sound'

export default function Cart() {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart()

  const handleQuantityChange = (id, newQuantity) => {
    playClickSound()
    updateQuantity(id, parseInt(newQuantity))
  }

  const handleRemove = (id) => {
    playClickSound()
    removeFromCart(id)
  }

  if (cart.items.length === 0) {
    return (
      <div className="container-custom py-20 text-center">
        <h1 className="text-3xl font-bold mb-8">Ihr Warenkorb</h1>
        <p className="text-gray-600 mb-8">Ihr Warenkorb ist leer.</p>
        <Link 
          href="/" 
          className="bg-primary text-white px-6 py-3 rounded-lg inline-block hover:bg-primary/90 transition-colors"
        >
          Weiter einkaufen
        </Link>
      </div>
    )
  }

  return (
    <div className="container-custom py-20">
      <h1 className="text-3xl font-bold mb-8">Ihr Warenkorb</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2">
          {cart.items.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-sm p-4 mb-4 flex items-center gap-4">
              <div className="relative w-24 h-24 bg-gray-100 rounded">
                <Image 
                  src={item.image} 
                  alt={item.tyreBrand}
                  fill
                  className="object-cover rounded"
                />
              </div>
              
              <div className="flex-grow">
                <h3 className="font-semibold">{item.tyreBrand} {item.serialNo}</h3>
                <p className="text-sm text-gray-600">{item.size}</p>
                <p className="text-primary font-bold mt-1">€{item.sellingPrice.toLocaleString('de-DE')}</p>
              </div>
              
              <div className="flex items-center gap-3">
                <select 
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, e.target.value)}
                  className="border rounded px-2 py-1"
                >
                  {[1,2,3,4,5].map(num => (
                    <option key={num} value={num}>{num}</option>
                  ))}
                </select>
                
                <button 
                  onClick={() => handleRemove(item.id)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                >
                  <FaTrash size={18} />
                </button>
              </div>
            </div>
          ))}
          
          <button 
            onClick={clearCart}
            className="text-gray-600 hover:text-red-500 transition-colors mt-4"
          >
            Warenkorb leeren
          </button>
        </div>
        
        {/* Order Summary */}
        <div className="bg-white rounded-lg shadow-sm p-6 h-fit">
          <h2 className="text-xl font-bold mb-4">Bestellübersicht</h2>
          
          <div className="space-y-2 mb-4">
            <div className="flex justify-between">
              <span>Zwischensumme:</span>
              <span>€{cart.total.toLocaleString('de-DE')}</span>
            </div>
            <div className="flex justify-between">
              <span>Versand:</span>
              <span>€4,90</span>
            </div>
            <div className="border-t pt-2 font-bold text-lg">
              <div className="flex justify-between">
                <span>Gesamt:</span>
                <span className="text-primary">€{(cart.total + 4.9).toLocaleString('de-DE')}</span>
              </div>
            </div>
          </div>
          
          <button className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold">
            Zur Kasse
          </button>
          
          <p className="text-xs text-gray-500 text-center mt-4">
            inkl. MwSt. zzgl. Versandkosten
          </p>
        </div>
      </div>
    </div>
  )
}
