import { useState } from 'react'

export default function FilterBar({ products, onFilterChange }) {
  const [sortBy, setSortBy] = useState('')
  const [sizeFilter, setSizeFilter] = useState('')
  const [brandFilter, setBrandFilter] = useState('')

  // Extract unique sizes and brands
  const sizes = [...new Set(products.map(p => p.size))]
  const brands = [...new Set(products.map(p => p.tyreBrand))]

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
    <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Sort by Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Sortieren nach Preis
          </label>
          <select
            value={sortBy}
            onChange={handleSortChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
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
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Alle Größen</option>
            {sizes.map(size => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>

        {/* Filter by Brand */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Marke
          </label>
          <select
            value={brandFilter}
            onChange={handleBrandChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="">Alle Marken</option>
            {brands.map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  )
}
