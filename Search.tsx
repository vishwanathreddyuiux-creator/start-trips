import { useState } from "react";
import { Link } from "react-router";
import { Search as SearchIcon, SlidersHorizontal, MapPin, Calendar, DollarSign, Users, Star, Clock, Grid3X3, List } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const allPackages = [
  {
    id: 1,
    title: "Kerala Backwaters Escape",
    destination: "Kerala, India",
    duration: "5 Days / 4 Nights",
    price: 35999,
    rating: 4.9,
    type: "Beach",
    image: "https://images.unsplash.com/photo-1707893013488-51672ef83425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZXJhbGElMjBJbmRpYSUyMGJhY2t3YXRlcnMlMjBob3VzZWJvYXR8ZW58MXx8fHwxNzc0MjQ1MTg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 2,
    title: "Kashmir Valley Paradise",
    destination: "Kashmir, India",
    duration: "6 Days / 5 Nights",
    price: 42999,
    rating: 4.8,
    type: "Mountain",
    image: "https://images.unsplash.com/photo-1665034640942-07c4170c2872?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLYXNobWlyJTIwSW5kaWElMjBkYWwlMjBsYWtlfGVufDF8fHx8MTc3NDI0NTE4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 3,
    title: "Goa Beach Retreat",
    destination: "Goa, India",
    duration: "4 Days / 3 Nights",
    price: 28999,
    rating: 5.0,
    type: "Beach",
    image: "https://images.unsplash.com/photo-1667111838729-1a25f468856b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHb2ElMjBJbmRpYSUyMGJlYWNoJTIwc3Vuc2V0fGVufDF8fHx8MTc3NDE1OTQ4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 4,
    title: "Ladakh Adventure",
    destination: "Ladakh, India",
    duration: "7 Days / 6 Nights",
    price: 54999,
    rating: 4.9,
    type: "Adventure",
    image: "https://images.unsplash.com/photo-1668602393098-6f5d6e73da3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMYWRha2glMjBJbmRpYSUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzQyNDUxODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 5,
    title: "Shimla Hills Experience",
    destination: "Shimla, India",
    duration: "5 Days / 4 Nights",
    price: 32999,
    rating: 4.8,
    type: "Mountain",
    image: "https://images.unsplash.com/photo-1669888706272-0b300db3ae19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTaGltbGElMjBJbmRpYSUyMG1vdW50YWlucyUyMHNub3d8ZW58MXx8fHwxNzc0MjQ1MTgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 6,
    title: "Manali Mountain Escape",
    destination: "Manali, India",
    duration: "5 Days / 4 Nights",
    price: 38999,
    rating: 4.9,
    type: "Mountain",
    image: "https://images.unsplash.com/photo-1655470062146-b17f3b244182?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5hbGklMjBJbmRpYSUyMHZhbGxleXxlbnwxfHx8fDE3NzQyNDUxODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 7,
    title: "Ooty Hill Station",
    destination: "Ooty, India",
    duration: "4 Days / 3 Nights",
    price: 29999,
    rating: 5.0,
    type: "Mountain",
    image: "https://images.unsplash.com/photo-1709460177357-3e37e2f2abf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxPb3R5JTIwSW5kaWElMjBuaWxnaXJpJTIwaGlsbHN8ZW58MXx8fHwxNzc0MjQ1MTg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 8,
    title: "Sikkim Discovery",
    destination: "Sikkim, India",
    duration: "6 Days / 5 Nights",
    price: 44999,
    rating: 5.0,
    type: "Mountain",
    image: "https://images.unsplash.com/photo-1695230047918-f15440e6db06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTaWtraW0lMjBJbmRpYSUyMG1vdW50YWlucyUyMHRlYXxlbnwxfHx8fDE3NzQyNDUxODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 9,
    title: "Coorg Coffee Trail",
    destination: "Coorg, India",
    duration: "4 Days / 3 Nights",
    price: 31999,
    rating: 4.9,
    type: "Adventure",
    image: "https://images.unsplash.com/photo-1702045505246-75070db6dc4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb29yZyUyMEluZGlhJTIwY29mZmVlJTIwcGxhbnRhdGlvbnN8ZW58MXx8fHwxNzc0MjQ1MTg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 10,
    title: "Gujarat Heritage Tour",
    destination: "Gujarat, India",
    duration: "6 Days / 5 Nights",
    price: 39999,
    rating: 4.8,
    type: "Cultural",
    image: "https://images.unsplash.com/photo-1670923331633-be262e035a9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHdWphcmF0JTIwSW5kaWElMjB3aGl0ZSUyMHJhbm58ZW58MXx8fHwxNzc0MjQ1MTg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function Search() {
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000]);
  const [selectedType, setSelectedType] = useState("all");
  const [selectedDuration, setSelectedDuration] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(true);

  const filteredPackages = allPackages.filter((pkg) => {
    const matchesSearch =
      pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pkg.destination.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPrice = pkg.price >= priceRange[0] && pkg.price <= priceRange[1];
    const matchesType = selectedType === "all" || pkg.type === selectedType;
    return matchesSearch && matchesPrice && matchesType;
  });

  return (
    <div className="min-h-screen bg-brand-background">
      {/* Hero Search */}
      <div className="bg-gradient-to-r from-[#FF4D00] to-[#FFB300] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="mb-4 text-center">Find Your Perfect Trip</h2>
          <p className="b1 text-center mb-8 max-w-2xl mx-auto">
            Search from hundreds of curated packages and customize your dream vacation
          </p>

          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search destinations, packages, activities..."
                className="w-full pl-12 pr-4 py-4 rounded-xl text-gray-900 b2 focus:ring-2 focus:ring-white/50 focus:outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <SlidersHorizontal className="w-5 h-5" />
              <span className="b3">Filters</span>
            </button>
            <p className="b3 text-gray-600">
              {filteredPackages.length} package{filteredPackages.length !== 1 ? "s" : ""} found
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-lg ${
                viewMode === "grid" ? "bg-brand-primary text-white" : "bg-white text-gray-600"
              }`}
            >
              <Grid3X3 className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-lg ${
                viewMode === "list" ? "bg-brand-primary text-white" : "bg-white text-gray-600"
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="w-80 flex-shrink-0">
              <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-24">
                <h6 className="mb-6">Filters</h6>

                {/* Price Range */}
                <div className="mb-6 pb-6 border-b">
                  <label className="block mb-3 h8 flex items-center gap-2">
                    <DollarSign className="w-4 h-4" />
                    Price Range
                  </label>
                  <div className="space-y-3">
                    <input
                      type="range"
                      min="0"
                      max="100000"
                      step="5000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                      className="w-full"
                    />
                    <div className="flex items-center justify-between b3 text-gray-600">
                      <span>₹{priceRange[0].toLocaleString('en-IN')}</span>
                      <span>₹{priceRange[1].toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>

                {/* Travel Type */}
                <div className="mb-6 pb-6 border-b">
                  <label className="block mb-3 h8 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Travel Type
                  </label>
                  <div className="space-y-2">
                    {["all", "Beach", "Adventure", "Cultural", "Luxury"].map((type) => (
                      <label key={type} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="type"
                          checked={selectedType === type}
                          onChange={() => setSelectedType(type)}
                          className="text-brand-primary focus:ring-brand-primary"
                        />
                        <span className="b3 capitalize">{type}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Duration */}
                <div>
                  <label className="block mb-3 h8 flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    Duration
                  </label>
                  <div className="space-y-2">
                    {["all", "3-5 days", "6-8 days", "9+ days"].map((duration) => (
                      <label key={duration} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="duration"
                          checked={selectedDuration === duration}
                          onChange={() => setSelectedDuration(duration)}
                          className="text-brand-primary focus:ring-brand-primary"
                        />
                        <span className="b3 capitalize">{duration}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedType("all");
                    setSelectedDuration("all");
                    setPriceRange([0, 100000]);
                  }}
                  className="w-full mt-6 py-2 border border-gray-300 rounded-lg b3 hover:bg-gray-50 transition-colors"
                >
                  Reset Filters
                </button>
              </div>
            </div>
          )}

          {/* Results */}
          <div className="flex-1">
            {filteredPackages.length === 0 ? (
              <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
                <SearchIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h5 className="mb-2">No packages found</h5>
                <p className="b2 text-gray-600">Try adjusting your filters or search query</p>
              </div>
            ) : viewMode === "grid" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredPackages.map((pkg) => (
                  <Link
                    key={pkg.id}
                    to={`/packages/${pkg.id}`}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all hover:scale-105"
                  >
                    <div className="aspect-[4/3] relative">
                      <ImageWithFallback
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-full object-cover"
                      />
                      <span className="absolute top-3 right-3 px-3 py-1 bg-white/90 backdrop-blur rounded-full b5">
                        {pkg.type}
                      </span>
                    </div>
                    <div className="p-5">
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
                        <span className="b4 text-gray-600 ml-1">({pkg.rating})</span>
                      </div>
                      <h6 className="mb-2">{pkg.title}</h6>
                      <p className="b3 text-gray-600 flex items-center gap-1 mb-3">
                        <MapPin className="w-4 h-4" />
                        {pkg.destination}
                      </p>
                      <p className="b3 text-gray-600 flex items-center gap-1 mb-4">
                        <Clock className="w-4 h-4" />
                        {pkg.duration}
                      </p>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="b4 text-gray-500">Starting from</p>
                          <p className="h6 text-brand-primary">₹{pkg.price.toLocaleString('en-IN')}</p>
                        </div>
                        <span className="px-4 py-2 bg-gradient-to-r from-[#FF4D00] to-[#FFB300] text-white rounded-lg b4">
                          View Details
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="space-y-4">
                {filteredPackages.map((pkg) => (
                  <Link
                    key={pkg.id}
                    to={`/packages/${pkg.id}`}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all flex gap-6 p-6"
                  >
                    <div className="w-64 h-48 rounded-xl overflow-hidden flex-shrink-0">
                      <ImageWithFallback
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex items-center gap-1">
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
                            <span className="b4 text-gray-600 ml-1">({pkg.rating})</span>
                          </div>
                          <span className="px-3 py-1 bg-orange-100 text-brand-primary rounded-full b5">
                            {pkg.type}
                          </span>
                        </div>
                        <h5 className="mb-2">{pkg.title}</h5>
                        <p className="b2 text-gray-600 flex items-center gap-2 mb-2">
                          <MapPin className="w-4 h-4" />
                          {pkg.destination}
                        </p>
                        <p className="b3 text-gray-600 flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {pkg.duration}
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="b4 text-gray-500">Starting from</p>
                          <p className="h5 text-brand-primary">₹{pkg.price.toLocaleString('en-IN')}</p>
                        </div>
                        <span className="px-6 py-3 bg-gradient-to-r from-[#FF4D00] to-[#FFB300] text-white rounded-lg b3">
                          View Details
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}