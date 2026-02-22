import { useRouter } from 'next/router'
import { useState, useMemo } from 'react'
import tyresData from '../../data/tyres.json'
import ProductCard from '../../components/ui/ProductCard'
import FilterBar from '../../components/ui/FilterBar'

export default function ModelPage() {
  const router = useRouter()
  const { model } = router.query
  const [filters, setFilters] = useState({ sort: '', size: '', brand: '' })

  const filteredProducts = useMemo(() => {
    if (!model) return []
    
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
  }, [model, filters])

  if (!model) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#004aad] to-gray-600 bg-clip-text text-transparent">
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
