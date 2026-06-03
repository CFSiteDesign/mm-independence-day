import { useState, useMemo } from 'react'
import { PROPERTIES, COUNTRIES, type CountryFilter } from '@/data/properties'
import ScatteredStars from './ScatteredStars'

export default function PropertySelector() {
  const [filter, setFilter] = useState<CountryFilter>('All')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((prop) => {
      const matchesCountry = filter === 'All' || prop.country === filter
      const matchesSearch =
        searchTerm === '' ||
        prop.name.toLowerCase().includes(searchTerm.toLowerCase())
      return matchesCountry && matchesSearch
    })
  }, [filter, searchTerm])

  return (
    <section className="relative w-full bg-white py-12 md:py-24 px-4 md:px-8">
      <ScatteredStars />

      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight mb-4">
            Pick Your Destination
          </h2>
          <p className="text-lg md:text-xl font-semibold max-w-2xl">
            23 epic locations across Southeast Asia
          </p>
        </div>

        {/* Search bar */}
        <div className="mb-8 md:mb-10">
          <input
            type="text"
            placeholder="Search by location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 md:px-6 py-3 md:py-4 border-4 border-black rounded-none bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#CC2200] font-semibold"
          />
        </div>

        {/* Country filters */}
        <div className="mb-8 md:mb-12 flex gap-2 md:gap-3 overflow-x-auto pb-2 no-scrollbar">
          {COUNTRIES.map((country) => (
            <button
              key={country}
              onClick={() => setFilter(country)}
              className={`px-4 md:px-6 py-2 md:py-3 border-2 border-black rounded-none font-bold uppercase whitespace-nowrap transition-all duration-200 ${
                filter === country
                  ? 'bg-[#CC2200] text-white shadow-md'
                  : 'bg-white text-black hover:bg-gray-100'
              }`}
            >
              {country}
            </button>
          ))}
        </div>

        {/* Properties grid */}
        {filteredProperties.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredProperties.map((prop) => (
              <div
                key={prop.id}
                className="bg-white border-4 border-black rounded-none p-6 md:p-8 shadow-sm hover:shadow-md transition-all duration-200"
              >
                <div className="flex flex-col h-full">
                  <div className="mb-4">
                    <span className="inline-block bg-[#1B2A5C] text-white px-3 py-1 border-2 border-black rounded-none text-xs font-bold uppercase">
                      {prop.country}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold uppercase mb-6 flex-grow">
                    {prop.name}
                  </h3>
                  <button className="w-full px-4 py-3 bg-[#CC2200] text-white border-2 border-black rounded-none font-bold uppercase shadow-sm hover:shadow-md transition-all duration-200">
                    {prop.url ? 'GET ACCESS' : 'COMING SOON'}
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-lg md:text-xl font-semibold text-gray-600">
              No parties found. Try a different location.
            </p>
          </div>
        )}

        {/* Results count */}
        <div className="mt-8 md:mt-12 text-center text-sm md:text-base font-semibold text-gray-600">
          Showing {filteredProperties.length} of {PROPERTIES.length} destinations
        </div>
      </div>
    </section>
  )
}
