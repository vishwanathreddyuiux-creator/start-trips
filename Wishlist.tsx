import { useState } from "react";
import { Link } from "react-router";
import { Heart, Trash2, Star, Clock, MapPin, Eye } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const savedPackages = [
  {
    id: 1,
    title: "Maldives Luxury Retreat",
    destination: "Maldives",
    duration: "6 Days / 5 Nights",
    price: 2499,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1614505241347-7f4765c1035e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxkaXZlcyUyMGx1eHVyeSUyMHJlc29ydHxlbnwxfHx8fDE3NzQwMzQ5ODR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    savedOn: "Mar 15, 2026",
  },
  {
    id: 2,
    title: "Swiss Alps Adventure",
    destination: "Swiss Alps",
    duration: "7 Days / 6 Nights",
    price: 1899,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1633942515338-6bfe46d316d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2lzcyUyMGFscHMlMjBtb3VudGFpbnN8ZW58MXx8fHwxNzc0MDc0MjAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    savedOn: "Mar 18, 2026",
  },
  {
    id: 3,
    title: "Tokyo Cultural Experience",
    destination: "Tokyo, Japan",
    duration: "5 Days / 4 Nights",
    price: 1699,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1648871647634-0c99b483cb63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2t5byUyMGphcGFuJTIwY2l0eXNjYXBlfGVufDF8fHx8MTc3NDAyMDI3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    savedOn: "Mar 20, 2026",
  },
];

const recentlyViewed = [
  {
    id: 4,
    title: "Santorini Sunset Getaway",
    destination: "Santorini, Greece",
    duration: "5 Days / 4 Nights",
    price: 1999,
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1656504862966-2f0d002bae4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW50b3JpbmklMjBncmVlY2UlMjBzdW5zZXR8ZW58MXx8fHwxNzc0MDM5OTQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    viewedOn: "Today",
  },
  {
    id: 5,
    title: "Dubai Luxury Experience",
    destination: "Dubai, UAE",
    duration: "4 Days / 3 Nights",
    price: 2299,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1657106251952-2d584ebdf886?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMHNreWxpbmUlMjBuaWdodHxlbnwxfHx8fDE3NzQwMjcxNDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    viewedOn: "Yesterday",
  },
  {
    id: 6,
    title: "Bali Paradise Escape",
    destination: "Bali, Indonesia",
    duration: "7 Days / 6 Nights",
    price: 1299,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1604741872759-42c077855b3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwaW5kb25lc2lhJTIwdGVtcGxlfGVufDF8fHx8MTc3NDAyMDI3NHww&ixlib=rb-4.1.0&q=80&w=1080",
    viewedOn: "2 days ago",
  },
];

export function Wishlist() {
  const [saved, setSaved] = useState(savedPackages);
  const [selectedForCompare, setSelectedForCompare] = useState<number[]>([]);

  const handleRemove = (id: number) => {
    setSaved(saved.filter((pkg) => pkg.id !== id));
  };

  const toggleCompare = (id: number) => {
    if (selectedForCompare.includes(id)) {
      setSelectedForCompare(selectedForCompare.filter((i) => i !== id));
    } else if (selectedForCompare.length < 3) {
      setSelectedForCompare([...selectedForCompare, id]);
    } else {
      alert("You can compare up to 3 packages at a time");
    }
  };

  return (
    <div className="min-h-screen bg-brand-background">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="mb-2">My Wishlist</h2>
          <p className="b1 text-gray-600">Save and compare your favorite packages</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Saved Packages */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h4 className="flex items-center gap-2">
              <Heart className="w-6 h-6 text-brand-primary" />
              Saved Packages ({saved.length})
            </h4>
            {selectedForCompare.length > 0 && (
              <button className="px-6 py-3 bg-gradient-to-r from-[#FF4D00] to-[#FFB300] text-white rounded-lg b3 hover:shadow-lg transition-shadow">
                Compare Selected ({selectedForCompare.length})
              </button>
            )}
          </div>

          {saved.length === 0 ? (
            <div className="bg-white rounded-2xl shadow-lg p-12 text-center">
              <Heart className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h5 className="mb-2">Your wishlist is empty</h5>
              <p className="b2 text-gray-600 mb-6">Start saving packages you love</p>
              <Link
                to="/packages"
                className="inline-block px-6 py-3 bg-gradient-to-r from-[#FF4D00] to-[#FFB300] text-white rounded-lg b3 hover:shadow-lg transition-shadow"
              >
                Explore Packages
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {saved.map((pkg) => (
                <div
                  key={pkg.id}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all ${
                    selectedForCompare.includes(pkg.id) ? "ring-2 ring-brand-primary" : ""
                  }`}
                >
                  <div className="aspect-[4/3] relative">
                    <ImageWithFallback
                      src={pkg.image}
                      alt={pkg.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 right-3 flex gap-2">
                      <button
                        onClick={() => handleRemove(pkg.id)}
                        className="p-2 bg-white/90 backdrop-blur rounded-full hover:bg-white transition-colors"
                      >
                        <Trash2 className="w-4 h-4 text-red-600" />
                      </button>
                    </div>
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
                    <p className="b3 text-gray-600 flex items-center gap-1 mb-2">
                      <MapPin className="w-4 h-4" />
                      {pkg.destination}
                    </p>
                    <p className="b3 text-gray-600 flex items-center gap-1 mb-3">
                      <Clock className="w-4 h-4" />
                      {pkg.duration}
                    </p>
                    <p className="b5 text-gray-500 mb-4">Saved on {pkg.savedOn}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="b4 text-gray-500">Starting from</p>
                        <p className="h6 text-brand-primary">${pkg.price}</p>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => toggleCompare(pkg.id)}
                          className={`px-4 py-2 rounded-lg b4 transition-colors ${
                            selectedForCompare.includes(pkg.id)
                              ? "bg-brand-primary text-white"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                          }`}
                        >
                          {selectedForCompare.includes(pkg.id) ? "Selected" : "Compare"}
                        </button>
                        <Link
                          to={`/packages/${pkg.id}`}
                          className="px-4 py-2 bg-gradient-to-r from-[#FF4D00] to-[#FFB300] text-white rounded-lg b4"
                        >
                          View
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Recently Viewed */}
        <div>
          <h4 className="mb-6 flex items-center gap-2">
            <Eye className="w-6 h-6 text-brand-primary" />
            Recently Viewed
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentlyViewed.map((pkg) => (
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
                  <p className="b3 text-gray-600 flex items-center gap-1 mb-2">
                    <MapPin className="w-4 h-4" />
                    {pkg.destination}
                  </p>
                  <p className="b3 text-gray-600 flex items-center gap-1 mb-3">
                    <Clock className="w-4 h-4" />
                    {pkg.duration}
                  </p>
                  <p className="b5 text-gray-500 mb-3">Viewed {pkg.viewedOn}</p>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="b4 text-gray-500">Starting from</p>
                      <p className="h6 text-brand-primary">${pkg.price}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
