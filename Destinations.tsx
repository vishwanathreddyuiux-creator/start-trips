import { useState } from "react";
import { Search, MapPin } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";

const allDestinations = [
  {
    id: 1,
    name: "Kerala",
    country: "India",
    description: "God's Own Country with serene backwaters, lush landscapes, and rich cultural heritage",
    image: "https://images.unsplash.com/photo-1707893013488-51672ef83425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZXJhbGElMjBJbmRpYSUyMGJhY2t3YXRlcnMlMjBob3VzZWJvYXR8ZW58MXx8fHwxNzc0MjQ1MTg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    packageCount: 12,
  },
  {
    id: 2,
    name: "Kashmir",
    country: "India",
    description: "Paradise on Earth with stunning valleys, Dal Lake, and majestic Himalayan peaks",
    image: "https://images.unsplash.com/photo-1665034640942-07c4170c2872?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLYXNobWlyJTIwSW5kaWElMjBkYWwlMjBsYWtlfGVufDF8fHx8MTc3NDI0NTE4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    packageCount: 18,
  },
  {
    id: 3,
    name: "Goa",
    country: "India",
    description: "Beautiful beaches, vibrant nightlife, Portuguese heritage, and tropical paradise",
    image: "https://images.unsplash.com/photo-1667111838729-1a25f468856b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHb2ElMjBJbmRpYSUyMGJlYWNoJTIwc3Vuc2V0fGVufDF8fHx8MTc3NDE1OTQ4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    packageCount: 10,
  },
  {
    id: 4,
    name: "Ladakh",
    country: "India",
    description: "Land of high passes with stunning monasteries, pristine lakes, and adventure activities",
    image: "https://images.unsplash.com/photo-1668602393098-6f5d6e73da3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMYWRha2glMjBJbmRpYSUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzQyNDUxODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    packageCount: 15,
  },
  {
    id: 5,
    name: "Shimla",
    country: "India",
    description: "Queen of Hills with colonial architecture, snow-capped peaks, and scenic beauty",
    image: "https://images.unsplash.com/photo-1669888706272-0b300db3ae19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTaGltbGElMjBJbmRpYSUyMG1vdW50YWlucyUyMHNub3d8ZW58MXx8fHwxNzc0MjQ1MTgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    packageCount: 14,
  },
  {
    id: 6,
    name: "Manali",
    country: "India",
    description: "Valley of Gods with adventure sports, apple orchards, and breathtaking mountain views",
    image: "https://images.unsplash.com/photo-1655470062146-b17f3b244182?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5hbGklMjBJbmRpYSUyMHZhbGxleXxlbnwxfHx8fDE3NzQyNDUxODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    packageCount: 11,
  },
  {
    id: 7,
    name: "Sikkim",
    country: "India",
    description: "Mountain paradise with pristine nature, Buddhist monasteries, and Kanchenjunga views",
    image: "https://images.unsplash.com/photo-1695230047918-f15440e6db06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTaWtraW0lMjBJbmRpYSUyMG1vdW50YWlucyUyMHRlYXxlbnwxfHx8fDE3NzQyNDUxODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    packageCount: 16,
  },
  {
    id: 8,
    name: "Ooty",
    country: "India",
    description: "Nilgiri Hills gem with tea gardens, botanical gardens, and pleasant climate",
    image: "https://images.unsplash.com/photo-1709460177357-3e37e2f2abf3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxPb3R5JTIwSW5kaWElMjBuaWxnaXJpJTIwaGlsbHN8ZW58MXx8fHwxNzc0MjQ1MTg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    packageCount: 9,
  },
  {
    id: 9,
    name: "Coorg",
    country: "India",
    description: "Scotland of India with coffee plantations, misty hills, and waterfalls",
    image: "https://images.unsplash.com/photo-1702045505246-75070db6dc4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb29yZyUyMEluZGlhJTIwY29mZmVlJTIwcGxhbnRhdGlvbnN8ZW58MXx8fHwxNzc0MjQ1MTg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    packageCount: 13,
  },
  {
    id: 10,
    name: "Gujarat",
    country: "India",
    description: "Land of legends with White Rann, Gir lions, and vibrant cultural heritage",
    image: "https://images.unsplash.com/photo-1670923331633-be262e035a9a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHdWphcmF0JTIwSW5kaWElMjB3aGl0ZSUyMHJhbm58ZW58MXx8fHwxNzc0MjQ1MTg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    packageCount: 14,
  },
];

export function Destinations() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDestinations = allDestinations.filter((dest) =>
    dest.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dest.country.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#FF4D00] to-[#FFB300] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h1 className="mb-6">Explore Destinations</h1>
          <p className="b1 max-w-2xl mx-auto">
            Discover your next adventure from our curated collection of world-class destinations
          </p>
        </div>
      </section>

      {/* Search Bar */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search destinations..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-primary focus:border-transparent b2"
            />
          </div>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-12 bg-brand-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination) => (
              <Link
                key={destination.id}
                to={`/packages?destination=${destination.name}`}
                className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <ImageWithFallback
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start gap-2 mb-3">
                    <MapPin className="w-5 h-5 text-brand-primary mt-1 flex-shrink-0" />
                    <div>
                      <h5 className="mb-1">{destination.name}</h5>
                      <p className="b4 text-gray-500">{destination.country}</p>
                    </div>
                  </div>
                  <p className="b3 text-gray-600 mb-4">{destination.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="b3 text-brand-primary">
                      {destination.packageCount} packages available
                    </span>
                    <span className="text-brand-primary group-hover:translate-x-2 transition-transform">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {filteredDestinations.length === 0 && (
            <div className="text-center py-20">
              <p className="b1 text-gray-500">No destinations found matching your search.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}