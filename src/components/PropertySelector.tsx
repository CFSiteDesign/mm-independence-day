import { useState } from "react";
import { Input } from "@/components/ui/input";
import { PROPERTIES, COUNTRIES, type CountryFilter } from "@/data/properties";

export default function PropertySelector() {
  const [search, setSearch] = useState("");
  const [activeCountry, setActiveCountry] = useState<CountryFilter>("All");

  const filtered = PROPERTIES.filter((p) => {
    const matchCountry = activeCountry === "All" || p.country === activeCountry;
    const matchSearch =
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.country.toLowerCase().includes(search.toLowerCase());
    return matchCountry && matchSearch;
  });

  return (
    <section
      id="find-your-hostel"
      className="py-20 px-4 bg-[#F5EDD8]"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <span className="inline-block mb-4 px-4 py-1 bg-[#CC2200] text-white font-black text-xs tracking-[0.3em] uppercase brutalist-border">
            23 LOCATIONS
          </span>
          <h2 className="font-display text-5xl md:text-7xl text-[#1B2A5C] leading-none">
            FIND YOUR HOSTEL
          </h2>
          <p className="mt-4 text-gray-600 font-bold uppercase tracking-widest text-sm">
            Southeast Asia's most epic 4th of July — pick your base.
          </p>
        </div>

        {/* Search */}
        <div className="mb-6 max-w-md mx-auto">
          <Input
            placeholder="Search by city or country..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="text-base py-3 h-12 font-bold"
          />
        </div>

        {/* Country filters */}
        <div className="flex flex-wrap gap-2 justify-center mb-10">
          {COUNTRIES.map((country) => (
            <button
              key={country}
              onClick={() => setActiveCountry(country)}
              className={`px-4 py-2 text-xs font-black uppercase tracking-widest border-2 border-black transition-all brutalist-shadow-hover ${
                activeCountry === country
                  ? "bg-[#CC2200] text-white brutalist-shadow"
                  : "bg-white text-black hover:bg-[#1B2A5C] hover:text-white"
              }`}
            >
              {country}
            </button>
          ))}
        </div>

        {/* Results */}
        {filtered.length === 0 ? (
          <div className="text-center py-16">
            <p className="font-display text-3xl text-[#1B2A5C]">NO RESULTS</p>
            <p className="text-gray-500 mt-2 font-bold">Try a different search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((property) => (
              <div
                key={property.id}
                className="bg-white brutalist-border brutalist-shadow p-5 flex flex-col gap-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <p className="text-xs font-black uppercase tracking-widest text-[#CC2200] mb-1">
                      {property.country}
                    </p>
                    <h3 className="font-display text-2xl text-[#1B2A5C] uppercase leading-tight">
                      {property.name}
                    </h3>
                  </div>
                  <span className="text-xl mt-1">🇺🇸</span>
                </div>

                {property.url ? (
                  <a
                    href={property.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-block px-4 py-2 bg-[#CC2200] text-white font-black text-xs uppercase tracking-widest brutalist-border brutalist-shadow brutalist-shadow-hover text-center"
                  >
                    GET ACCESS
                  </a>
                ) : (
                  <span className="mt-auto inline-block px-4 py-2 bg-gray-100 text-gray-400 font-black text-xs uppercase tracking-widest brutalist-border text-center">
                    COMING SOON
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
