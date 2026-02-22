import { useRouter } from 'next/router'
import { useState, useMemo } from 'react'
import tyresData from '../../data/tyres.json'
import ProductCard from '../../components/ui/ProductCard'
import FilterBar from '../../components/ui/FilterBar'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'

export default function ModelsPage() {
  const router = useRouter()
  const { tyreBrand } = router.query
  const [filters, setFilters] = useState({ sort: '', size: '', brand: '' })

  const filteredProducts = useMemo(() => {
    let products = [...tyresData]

    // Filter by tyre brand if specified
    if (tyreBrand) {
      products = products.filter(p => 
        p.tyreBrand.toLowerCase() === tyreBrand.toLowerCase()
      )
    }

    // Apply size filter
    if (filters.size) {
      products = products.filter(p => p.size === filters.size)
    }

    // Apply car brand filter
    if (filters.brand) {
      products = products.filter(p => p.brand === filters.brand)
    }

    // Apply sorting
    if (filters.sort === 'low-high') {
      products.sort((a, b) => a.sellingPrice - b.sellingPrice)
    } else if (filters.sort === 'high-low') {
      products.sort((a, b) => b.sellingPrice - a.sellingPrice)
    }

    return products
  }, [tyreBrand, filters])

  const tyreBrandName = tyreBrand || 'Alle Marken'

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Back Button */}
        <Link 
          href="/#models" 
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#004aad] 
                   transition-colors mb-8 group"
        >
          <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          Zurück zur Übersicht
        </Link>

        <h1 className="text-4xl font-bold mb-2 bg-gradient-to-r from-[#004aad] to-gray-600 bg-clip-text text-transparent">
          {tyreBrand ? `${tyreBrand} Reifen` : 'Alle Reifen'}
        </h1>
        <p className="text-gray-600 mb-8">
          {filteredProducts.length} Produkte verfügbar
        </p>
        
        <FilterBar 
          products={tyresData}
          onFilterChange={setFilters}
        />
        
        {filteredProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-600 text-lg">
              Keine Reifen gefunden.
            </p>
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
