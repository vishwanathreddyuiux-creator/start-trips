import { Link } from "react-router";
import { Calendar, Heart, Bell, Search, Package, Star, MapPin, Clock } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

const upcomingTrips = [
  {
    id: 1,
    destination: "Bali, Indonesia",
    dates: "Apr 15 - 22, 2026",
    status: "Confirmed",
    image: "https://images.unsplash.com/photo-1604741872759-42c077855b3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWxpJTIwaW5kb25lc2lhJTIwdGVtcGxlfGVufDF8fHx8MTc3NDAyMDI3NHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    destination: "Paris, France",
    dates: "Jun 10 - 15, 2026",
    status: "Pending",
    image: "https://images.unsplash.com/photo-1431274172761-fca41d930114?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXJpcyUyMGVpZmZlbCUyMHRvd2VyfGVufDF8fHx8MTc3NDA0NDE3MHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const savedPackages = [
  {
    id: 1,
    title: "Maldives Luxury Retreat",
    price: "$2,499",
    duration: "6 Days / 5 Nights",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1614505241347-7f4765c1035e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxkaXZlcyUyMGx1eHVyeSUyMHJlc29ydHxlbnwxfHx8fDE3NzQwMzQ5ODR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    title: "Swiss Alps Adventure",
    price: "$1,899",
    duration: "7 Days / 6 Nights",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1633942515338-6bfe46d316d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzd2lzcyUyMGFscHMlMjBtb3VudGFpbnN8ZW58MXx8fHwxNzc0MDc0MjAyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    title: "Tokyo Cultural Experience",
    price: "$1,699",
    duration: "5 Days / 4 Nights",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1648871647634-0c99b483cb63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2t5byUyMGphcGFuJTIwY2l0eXNjYXBlfGVufDF8fHx8MTc3NDAyMDI3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const recommendations = [
  {
    id: 4,
    title: "Santorini Sunset Getaway",
    price: "$1,999",
    duration: "5 Days / 4 Nights",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1656504862966-2f0d002bae4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzYW50b3JpbmklMjBncmVlY2UlMjBzdW5zZXR8ZW58MXx8fHwxNzc0MDM5OTQyfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 5,
    title: "Dubai Luxury Experience",
    price: "$2,299",
    duration: "4 Days / 3 Nights",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1657106251952-2d584ebdf886?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkdWJhaSUyMHNreWxpbmUlMjBuaWdodHxlbnwxfHx8fDE3NzQwMjcxNDl8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const notifications = [
  { id: 1, message: "Your Bali trip booking is confirmed!", time: "2 hours ago", type: "success" },
  { id: 2, message: "Special offer: 20% off Paris packages", time: "1 day ago", type: "info" },
  { id: 3, message: "Don't forget to complete your Paris booking", time: "2 days ago", type: "warning" },
];

export function Dashboard() {
  return (
    <div className="min-h-screen bg-brand-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="mb-8">
          <h2 className="mb-2">Welcome Back!</h2>
          <p className="b1 text-gray-600">Here's your travel overview</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <Link
            to="/search"
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-[#FF4D00] to-[#FFB300] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Search className="w-6 h-6 text-white" />
            </div>
            <h6 className="mb-2">Plan Trip</h6>
            <p className="b3 text-gray-600">Find your next adventure</p>
          </Link>

          <Link
            to="/packages"
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-[#FF4D00] to-[#FFB300] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Package className="w-6 h-6 text-white" />
            </div>
            <h6 className="mb-2">Explore Packages</h6>
            <p className="b3 text-gray-600">Browse curated trips</p>
          </Link>

          <Link
            to="/wishlist"
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-[#FF4D00] to-[#FFB300] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h6 className="mb-2">Wishlist</h6>
            <p className="b3 text-gray-600">View saved trips</p>
          </Link>

          <Link
            to="/support"
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow group"
          >
            <div className="w-12 h-12 bg-gradient-to-r from-[#FF4D00] to-[#FFB300] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Bell className="w-6 h-6 text-white" />
            </div>
            <h6 className="mb-2">Support</h6>
            <p className="b3 text-gray-600">Get help anytime</p>
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Upcoming Trips */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h4 className="flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-brand-primary" />
                  Upcoming Trips
                </h4>
                <Link to="/search" className="b3 text-brand-primary hover:text-brand-accent">
                  View All
                </Link>
              </div>

              <div className="space-y-4">
                {upcomingTrips.map((trip) => (
                  <div
                    key={trip.id}
                    className="flex gap-4 p-4 rounded-xl border border-gray-200 hover:border-brand-primary transition-colors"
                  >
                    <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                      <ImageWithFallback
                        src={trip.image}
                        alt={trip.destination}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h6 className="mb-1">{trip.destination}</h6>
                      <p className="b3 text-gray-600 flex items-center gap-1 mb-2">
                        <Calendar className="w-4 h-4" />
                        {trip.dates}
                      </p>
                      <span
                        className={`inline-block px-3 py-1 rounded-full b4 ${
                          trip.status === "Confirmed"
                            ? "bg-green-100 text-green-700"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {trip.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Saved Packages */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h4 className="flex items-center gap-2">
                  <Heart className="w-6 h-6 text-brand-primary" />
                  Saved Packages
                </h4>
                <Link to="/wishlist" className="b3 text-brand-primary hover:text-brand-accent">
                  View All
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {savedPackages.map((pkg) => (
                  <Link
                    key={pkg.id}
                    to={`/packages/${pkg.id}`}
                    className="group border border-gray-200 rounded-xl overflow-hidden hover:border-brand-primary transition-colors"
                  >
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <ImageWithFallback
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.floor(pkg.rating)
                                ? "fill-[#FFB300] text-[#FFB300]"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <h6 className="mb-2">{pkg.title}</h6>
                      <p className="b4 text-gray-600 flex items-center gap-1 mb-2">
                        <Clock className="w-3 h-3" />
                        {pkg.duration}
                      </p>
                      <p className="h9 text-brand-primary">{pkg.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center justify-between mb-6">
                <h4 className="flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-brand-primary" />
                  Recommended for You
                </h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {recommendations.map((pkg) => (
                  <Link
                    key={pkg.id}
                    to={`/packages/${pkg.id}`}
                    className="group border border-gray-200 rounded-xl overflow-hidden hover:border-brand-primary transition-colors"
                  >
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <ImageWithFallback
                        src={pkg.image}
                        alt={pkg.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-3 h-3 ${
                              i < Math.floor(pkg.rating)
                                ? "fill-[#FFB300] text-[#FFB300]"
                                : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <h6 className="mb-2">{pkg.title}</h6>
                      <p className="b4 text-gray-600 flex items-center gap-1 mb-2">
                        <Clock className="w-3 h-3" />
                        {pkg.duration}
                      </p>
                      <p className="h9 text-brand-primary">{pkg.price}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Notifications */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h5 className="mb-4 flex items-center gap-2">
                <Bell className="w-5 h-5 text-brand-primary" />
                Notifications
              </h5>
              <div className="space-y-4">
                {notifications.map((notif) => (
                  <div
                    key={notif.id}
                    className={`p-4 rounded-lg ${
                      notif.type === "success"
                        ? "bg-green-50 border border-green-200"
                        : notif.type === "warning"
                        ? "bg-yellow-50 border border-yellow-200"
                        : "bg-blue-50 border border-blue-200"
                    }`}
                  >
                    <p className="b3 mb-1">{notif.message}</p>
                    <p className="b5 text-gray-500">{notif.time}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Profile Quick Stats */}
            <div className="bg-gradient-to-br from-[#FF4D00] to-[#FFB300] rounded-2xl shadow-lg p-6 text-white">
              <h5 className="mb-6">Your Travel Stats</h5>
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b border-white/20">
                  <span className="b2">Trips Completed</span>
                  <span className="h5">12</span>
                </div>
                <div className="flex items-center justify-between pb-4 border-b border-white/20">
                  <span className="b2">Countries Visited</span>
                  <span className="h5">8</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="b2">Saved Packages</span>
                  <span className="h5">3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}