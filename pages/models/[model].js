import { useRouter } from 'next/router'
import { useState, useMemo, useEffect } from 'react'
import tyresData from '../../data/tyres.json'
import ProductCard from '../../components/ui/ProductCard'
import FilterBar from '../../components/ui/FilterBar'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'

export default function ModelPage() {
  const router = useRouter()
  const { model } = router.query
  const [filters, setFilters] = useState({ sort: '', size: '', brand: '' })
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (model) {
      setIsLoading(false)
    }
  }, [model])

  const filteredProducts = useMemo(() => {
    if (!model || isLoading) return []
    
    let products = tyresData.filter(tyre => 
      tyre.brand.toLowerCase() === model?.toLowerCase()
    )

    // Apply size filter
    if (filters.size) {
      products = products.filter(p => p.size === filters.size)
    }

    // Apply tyre brand filter
    if (filters.brand) {
      products = products.filter(p => p.tyreBrand === filters.brand)
    }

    // Apply sorting
    if (filters.sort === 'low-high') {
      products.sort((a, b) => a.sellingPrice - b.sellingPrice)
    } else if (filters.sort === 'high-low') {
      products.sort((a, b) => b.sellingPrice - a.sellingPrice)
    }

    return products
  }, [model, filters, isLoading])

  if (!model || isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#004aad] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Lädt...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <button 
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#004aad] 
                   transition-colors mb-8 group cursor-pointer"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Zurück
        </button>

        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#004aad] to-gray-600 bg-clip-text text-transparent">
          Reifen für {model}
        </h1>
        <p className="text-gray-600 mb-8">
          {filteredProducts.length} Produkte verfügbar
        </p>
        
        <FilterBar 
          products={tyresData.filter(t => t.brand.toLowerCase() === model?.toLowerCase())}
          onFilterChange={setFilters}
        />
        
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg">
              Keine Reifen für diese Marke gefunden.
            </p>
            <Link 
              href="/models" 
              className="inline-block mt-4 text-[#004aad] hover:underline"
            >
              Alle Produkte anzeigen
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
