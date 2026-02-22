import { useState, useEffect } from 'react'

export default function FilterBar({ products, onFilterChange }) {
  const [sortBy, setSortBy] = useState('')
  const [sizeFilter, setSizeFilter] = useState('')
  const [brandFilter, setBrandFilter] = useState('')

  // Extract unique sizes and car brands
  const sizes = [...new Set(products.map(p => p.size))].sort()
  const carBrands = [...new Set(products.map(p => p.brand))].sort()

  // Reset filters when products change (e.g., when tyre brand changes)
  useEffect(() => {
    setSortBy('')
    setSizeFilter('')
    setBrandFilter('')
    onFilterChange({ sort: '', size: '', brand: '' })
  }, [products, onFilterChange])

  const handleSortChange = (e) => {
    const value = e.target.value
    setSortBy(value)
    onFilterChange({ sort: value, size: sizeFilter, brand: brandFilter })
  }

  const handleSizeChange = (e) => {
    const value = e.target.value
    setSizeFilter(value)
    onFilterChange({ sort: sortBy, size: value, brand: brandFilter })
  }

  const handleBrandChange = (e) => {
    const value = e.target.value
    setBrandFilter(value)
    onFilterChange({ sort: sortBy, size: sizeFilter, brand: value })
  }

  const handleReset = () => {
    setSortBy('')
    setSizeFilter('')
    setBrandFilter('')
    onFilterChange({ sort: '', size: '', brand: '' })
  }

  const isFilterActive = sortBy || sizeFilter || brandFilter

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-700">Filter</h3>
        {isFilterActive && (
          <button
            onClick={handleReset}
            className="text-sm text-[#004aad] hover:text-orange-500 transition-colors"
          >
            Filter zurücksetzen
          </button>
        )}
      </div>

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

        {/* Filter by Car Brand */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Automarke
          </label>
          <select
            value={brandFilter}
            onChange={handleBrandChange}
            className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2.5 
                     focus:outline-none focus:ring-2 focus:ring-[#004aad] focus:border-transparent
                     hover:border-[#004aad] transition-colors"
          >
            <option value="">Alle Marken</option>
            {carBrands.map(brand => (
              <option key={brand} value={brand}>{brand}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Active Filters Display */}
      {isFilterActive && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex flex-wrap gap-2">
            {sortBy && (
              <span className="inline-flex items-center gap-1 bg-blue-50 text-[#004aad] px-3 py-1 rounded-full text-sm">
                Sortierung: {sortBy === 'low-high' ? 'Niedrigster Preis' : 'Höchster Preis'}
              </span>
            )}
            {sizeFilter && (
              <span className="inline-flex items-center gap-1 bg-blue-50 text-[#004aad] px-3 py-1 rounded-full text-sm">
                Größe: {sizeFilter}
              </span>
            )}
            {brandFilter && (
              <span className="inline-flex items-center gap-1 bg-blue-50 text-[#004aad] px-3 py-1 rounded-full text-sm">
                Marke: {brandFilter}
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
