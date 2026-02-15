import Image from 'next/image'
import { useState } from 'react'
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa'
import { useCart } from '@/context/CartContext'
import Toast from './Toast'
import { playClickSound } from '@/utils/sound'

export default function ProductCard({ product }) {
  const { addToCart } = useCart()
  const [showToast, setShowToast] = useState(false)

  const handleAddToCart = () => {
    playClickSound()
    addToCart(product)
    setShowToast(true)
    setTimeout(() => setShowToast(false), 3000)
  }

  const renderRating = (rating) => {
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 >= 0.5

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<FaStar key={i} className="text-yellow-400" />)
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<FaStarHalfAlt key={i} className="text-yellow-400" />)
      } else {
        stars.push(<FaRegStar key={i} className="text-yellow-400" />)
      }
    }
    return stars
  }

  return (
    <>
      <div className="product-card">
        <div className="relative h-48 bg-gray-100">
          <Image
            src={product.image}
            alt={product.tyreBrand}
            fill
            className="object-cover"
          />
        </div>
        
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-lg">{product.tyreBrand}</h3>
            <div className="flex items-center space-x-1">
              {renderRating(product.rating)}
              <span className="text-sm text-gray-600 ml-1">({product.rating})</span>
            </div>
          </div>
          
          <p className="text-sm text-gray-600 mb-1">Serie: {product.serialNo}</p>
          <p className="text-sm text-gray-600 mb-1">Größe: {product.size}</p>
          <p className="text-sm text-gray-600 mb-1">Typ: {product.type}</p>
          <p className="text-sm text-gray-600 mb-3">Lastindex: {product.loadIndex}</p>
          
          <div className="flex items-center justify-between mt-3">
            <div>
              <span className="text-2xl font-bold text-primary">
                €{product.sellingPrice.toLocaleString('de-DE')}
              </span>
              {product.originalPrice > product.sellingPrice && (
                <span className="text-sm text-gray-500 line-through ml-2">
                  €{product.originalPrice.toLocaleString('de-DE')}
                </span>
              )}
            </div>
            
            <button
              onClick={handleAddToCart}
              className="bg-primary text-white px-4 py-2 rounded-lg 
                       hover:bg-primary/90 transition-colors text-sm font-semibold"
            >
              In den Warenkorb
            </button>
          </div>
        </div>
      </div>

      {showToast && (
        <Toast message={`${product.tyreBrand} wurde in den Warenkorb gelegt`} />
      )}
    </>
  )
}
