import { useRouter } from 'next/router'
import { useState, useMemo } from 'react'
import tyresData from '@/data/tyres.json'
import ProductCard from '@/components/ui/ProductCard'
import FilterBar from '@/components/ui/FilterBar'

export default function ModelPage() {
  const router = useRouter()
  const { model } = router.query
  const [filters, setFilters] = useState({ sort: '', size: '', brand: '' })

  const filteredProducts = useMemo(() => {
    let products = tyresData.filter(tyre => 
      tyre.model.toLowerCase() === model?.toLowerCase()
    )

    // Apply size filter
    if (filters.size) {
      products = products.filter(p => p.size === filters.size)
    }

    // Apply brand filter
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
    <div className="container-custom py-20">
      <h1 className="text-3xl font-bold mb-8">
        Reifen für {model}
      </h1>
      
      <FilterBar 
        products={tyresData.filter(t => t.model.toLowerCase() === model?.toLowerCase())}
        onFilterChange={setFilters}
      />
      
      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-600 py-12">
          Keine Reifen für dieses Modell gefunden.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}
