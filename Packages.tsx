import { useState } from "react";
import { Star, Clock, MapPin, DollarSign } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";

const allPackages = [
  {
    id: 1,
    title: "Kerala Backwaters Escape",
    destination: "Kerala, India",
    duration: "5 Days / 4 Nights",
    price: 35999,
    rating: 4.9,
    reviews: 234,
    image: "https://images.unsplash.com/photo-1707893013488-51672ef83425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZXJhbGElMjBJbmRpYSUyMGJhY2t3YXRlcnMlMjBob3VzZWJvYXR8ZW58MXx8fHwxNzc0MjQ1MTg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    type: "Beach",
  },
  {
    id: 2,
    title: "Kashmir Valley Paradise",
    destination: "Kashmir, India",
    duration: "6 Days / 5 Nights",
    price: 42999,
    rating: 4.8,
    reviews: 189,
    image: "https://images.unsplash.com/photo-1665034640942-07c4170c2872?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLYXNobWlyJTIwSW5kaWElMjBkYWwlMjBsYWtlfGVufDF8fHx8MTc3NDI0NTE4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    type: "Mountain",
  },
  {
    id: 3,
    title: "Goa Beach Retreat",
    destination: "Goa, India",
    duration: "4 Days / 3 Nights",
    price: 28999,
    rating: 5.0,
    reviews: 312,
    image: "https://images.unsplash.com/photo-1667111838729-1a25f468856b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHb2ElMjBJbmRpYSUyMGJlYWNoJTIwc3Vuc2V0fGVufDF8fHx8MTc3NDE1OTQ4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    type: "Beach",
  },
  {
    id: 4,
    title: "Shimla Hills Experience",
    destination: "Shimla, India",
    duration: "5 Days / 4 Nights",
    price: 32999,
    rating: 4.9,
    reviews: 267,
    image: "https://images.unsplash.com/photo-1669888706272-0b300db3ae19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTaGltbGElMjBJbmRpYSUyMG1vdW50YWlucyUyMHNub3d8ZW58MXx8fHwxNzc0MjQ1MTgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    type: "Mountain",
  },
  {
    id: 5,
    title: "Ladakh Adventure",
    destination: "Ladakh, India",
    duration: "7 Days / 6 Nights",
    price: 54999,
    rating: 4.7,
    reviews: 198,
    image: "https://images.unsplash.com/photo-1668602393098-6f5d6e73da3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMYWRha2glMjBJbmRpYSUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzQyNDUxODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    type: "Adventure",
  },
  {
    id: 6,
    title: "Manali Mountain Escape",
    destination: "Manali, India",
    duration: "5 Days / 4 Nights",
    price: 38999,
    rating: 4.9,
    reviews: 145,
    image: "https://images.unsplash.com/photo-1655470062146-b17f3b244182?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5hbGklMjBJbmRpYSUyMHZhbGxleXxlbnwxfHx8fDE3NzQyNDUxODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    type: "Mountain",
  },
  {
    id: 7,
    title: "Ooty Hill Station",
    destination: "Ooty, India",
    duration: "4 Days / 3 Nights",
    price: 29999,
    rating: 4.8,
    reviews: 223,
    image: "https://images.unsplash.com/photo-1709460177357-3e37e2f2abf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxPb3R5JTIwSW5kaWElMjBuaWxnaXJpJTIwaGlsbHN8ZW58MXx8fHwxNzc0MjQ1MTg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    type: "Mountain",
  },
  {
    id: 8,
    title: "Sikkim Discovery",
    destination: "Sikkim, India",
    duration: "6 Days / 5 Nights",
    price: 44999,
    rating: 5.0,
    reviews: 178,
    image: "https://images.unsplash.com/photo-1695230047918-f15440e6db06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTaWtraW0lMjBJbmRpYSUyMG1vdW50YWlucyUyMHRlYXxlbnwxfHx8fDE3NzQyNDUxODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    type: "Mountain",
  },
  {
    id: 9,
    title: "Coorg Coffee Trail",
    destination: "Coorg, India",
    duration: "4 Days / 3 Nights",
    price: 31999,
    rating: 4.9,
    reviews: 201,
    image: "https://images.unsplash.com/photo-1702045505246-75070db6dc4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb29yZyUyMEluZGlhJTIwY29mZmVlJTIwcGxhbnRhdGlvbnN8ZW58MXx8fHwxNzc0MjQ1MTg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    type: "Adventure",
  },
  {
    id: 10,
    title: "Gujarat Heritage Tour",
    destination: "Gujarat, India",
    duration: "6 Days / 5 Nights",
    price: 39999,
    rating: 4.8,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1670923331633-be262e035a9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHdWphcmF0JTIwSW5kaWElMjB3aGl0ZSUyMHJhbm58ZW58MXx8fHwxNzc0MjQ1MTg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    type: "City",
  },
];

export function Packages() {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000]);
  const [selectedType, setSelectedType] = useState<string>("all");

  const filteredPackages = allPackages.filter((pkg) => {
    const matchesPrice = pkg.price >= priceRange[0] && pkg.price <= priceRange[1];
    const matchesType = selectedType === "all" || pkg.type === selectedType;
    return matchesPrice && matchesType;
  });

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#FF4D00] to-[#FFB300] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="mb-6">Travel Packages</h1>
          <p className="b1 max-w-2xl mx-auto">
            Curated travel experiences designed for unforgettable adventures
          </p>
        </div>
      </section>

      {/* Filters & Packages */}
      <section className="py-12 bg-brand-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Filters Sidebar */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-2xl p-6 shadow-lg sticky top-24">
                <h6 className="mb-6">Filters</h6>
                
                {/* Type Filter */}
                <div className="mb-6">
                  <label className="block mb-3 text-brand-dark">Travel Type</label>
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent b3"
                  >
                    <option value="all">All Types</option>
                    <option value="Beach">Beach</option>
                    <option value="City">City</option>
                    <option value="Mountain">Mountain</option>
                    <option value="Adventure">Adventure</option>
                  </select>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <label className="block mb-3 text-brand-dark">
                    Price Range: ₹{priceRange[0].toLocaleString('en-IN')} - ₹{priceRange[1].toLocaleString('en-IN')}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100000"
                    step="5000"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                    className="w-full"
                  />
                </div>

                <button
                  onClick={() => {
                    setPriceRange([0, 100000]);
                    setSelectedType("all");
                  }}
                  className="w-full px-4 py-2 border-2 border-brand-primary text-brand-primary rounded-lg hover:bg-brand-primary hover:text-white transition-colors b3"
                >
                  Reset Filters
                </button>
              </div>
            </div>

            {/* Packages Grid */}
            <div className="flex-1">
              <div className="mb-6">
                <p className="b2 text-gray-600">
                  Showing {filteredPackages.length} of {allPackages.length} packages
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredPackages.map((pkg) => (
                  <Link
                    key={pkg.id}
                    to={`/packages/${pkg.id}`}
                    className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
                  >
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <ImageWithFallback
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full">
                        <span className="b4 text-brand-dark">{pkg.type}</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(pkg.rating)
                                ? "fill-[#FFB300] text-[#FFB300]"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                        <span className="b4 text-gray-600 ml-2">
                          {pkg.rating} ({pkg.reviews})
                        </span>
                      </div>
                      <h6 className="mb-3">{pkg.title}</h6>
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin className="w-4 h-4" />
                          <span className="b3">{pkg.destination}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Clock className="w-4 h-4" />
                          <span className="b3">{pkg.duration}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-4 border-t">
                        <div>
                          <span className="b4 text-gray-500">Starting from</span>
                          <div className="h6 text-brand-primary">₹{pkg.price.toLocaleString('en-IN')}</div>
                        </div>
                        <span className="px-4 py-2 bg-gradient-to-r from-[#FF4D00] to-[#FFB300] text-white rounded-lg b3">
                          View Details
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {filteredPackages.length === 0 && (
                <div className="text-center py-20 bg-white rounded-2xl">
                  <p className="b1 text-gray-500">
                    No packages match your filters. Try adjusting your criteria.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}