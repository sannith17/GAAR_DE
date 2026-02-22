import { useState } from 'react'

export default function FilterBar({ products, onFilterChange }) {
  const [sortBy, setSortBy] = useState('')
  const [sizeFilter, setSizeFilter] = useState('')
  const [brandFilter, setBrandFilter] = useState('')

  // Extract unique sizes and tyre brands
  const sizes = [...new Set(products.map(p => p.size))].sort()
  const tyreBrands = [...new Set(products.map(p => p.tyreBrand))].sort()

  const handleSortChange = (e) => {
    setSortBy(e.target.value)
    onFilterChange({ sort: e.target.value, size: sizeFilter, brand: brandFilter })
  }

  const handleSizeChange = (e) => {
    setSizeFilter(e.target.value)
    onFilterChange({ sort: sortBy, size: e.target.value, brand: brandFilter })
  }

  const handleBrandChange = (e) => {
    setBrandFilter(e.target.value)
    onFilterChange({ sort: sortBy, size: sizeFilter, brand: e.target.value })
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Sort by Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Sortieren nach Preis
          </label>
          <select
            value={sortBy}
            onChange={handleSortChange}
            className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2.5 
                     focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:border-transparent
                     hover:border-[#004aad] transition-colors"
          >
            <option value="">Bitte auswählen</option>
            <option value="low-high">Niedrigster zuerst</option>
            <option value="high-low">Höchster zuerst</option>
          </select>
        </div>

        {/* Filter by Size */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Reifengröße
          </label>
          <select
            value={sizeFilter}
            onChange={handleSizeChange}
            className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2.5 
                     focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:border-transparent
                     hover:border-[#004aad] transition-colors"
          >
            <option value="">Alle Größen</option>
            {sizes.map(size => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>

        {/* Filter by Tyre Brand */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Reifenmarke
          </label>
          <select
            value={brandFilter}
            onChange={handleBrandChange}
            className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2.5 
                     focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:border-transparent
                     hover:border-[#004aad] transition-colors"
          >
            <option value="">Alle Marken</option>
            {tyreBrands.map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}
