import { Star, Users, Clock, DollarSign, Shield, Headphones, MapPin, Calendar, Search, Plane, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";
import { GradientButton } from "../components/GradientButton";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { Link } from "react-router";
import { useState } from "react";

const destinations = [
  {
    id: 1,
    name: "Kerala Backwaters",
    tagline: "God's Own Country",
    image: "https://images.unsplash.com/photo-1707893013488-51672ef83425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZXJhbGElMjBJbmRpYSUyMGJhY2t3YXRlcnMlMjBob3VzZWJvYXR8ZW58MXx8fHwxNzc0MjQ1MTg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 2,
    name: "Kashmir Valley",
    tagline: "Paradise on Earth",
    image: "https://images.unsplash.com/photo-1665034640942-07c4170c2872?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLYXNobWlyJTIwSW5kaWElMjBkYWwlMjBsYWtlfGVufDF8fHx8MTc3NDI0NTE4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 3,
    name: "Goa Beaches",
    tagline: "Sun, Sand & Sea",
    image: "https://images.unsplash.com/photo-1667111838729-1a25f468856b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHb2ElMjBJbmRpYSUyMGJlYWNoJTIwc3Vuc2V0fGVufDF8fHx8MTc3NDE1OTQ4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 4,
    name: "Ladakh",
    tagline: "Land of High Passes",
    image: "https://images.unsplash.com/photo-1668602393098-6f5d6e73da3b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxMYWRha2glMjBJbmRpYSUyMGxhbmRzY2FwZXxlbnwxfHx8fDE3NzQyNDUxODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 5,
    name: "Shimla Hills",
    tagline: "Queen of Hills",
    image: "https://images.unsplash.com/photo-1669888706272-0b300db3ae19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTaGltbGElMjBJbmRpYSUyMG1vdW50YWlucyUyMHNub3d8ZW58MXx8fHwxNzc0MjQ1MTgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 6,
    name: "Coorg",
    tagline: "Scotland of India",
    image: "https://images.unsplash.com/photo-1702045505246-75070db6dc4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxDb29yZyUyMEluZGlhJTIwY29mZmVlJTIwcGxhbnRhdGlvbnN8ZW58MXx8fHwxNzc0MjQ1MTg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 7,
    name: "Manali",
    tagline: "Valley of Gods",
    image: "https://images.unsplash.com/photo-1655470062146-b17f3b244182?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxNYW5hbGklMjBJbmRpYSUyMHZhbGxleXxlbnwxfHx8fDE3NzQyNDUxODR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: 8,
    name: "Sikkim",
    tagline: "Mountain Paradise",
    image: "https://images.unsplash.com/photo-1695230047918-f15440e6db06?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxTaWtraW0lMjBJbmRpYSUyMG1vdW50YWlucyUyMHRlYXxlbnwxfHx8fDE3NzQyNDUxODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

const packages = [
  {
    id: 1,
    title: "Kerala Backwaters Escape",
    duration: "5 Days / 4 Nights",
    price: "₹35,999",
    image: "https://images.unsplash.com/photo-1707893013488-51672ef83425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZXJhbGElMjBJbmRpYSUyMGJhY2t3YXRlcnMlMjBob3VzZWJvYXR8ZW58MXx8fHwxNzc0MjQ1MTg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.9,
  },
  {
    id: 2,
    title: "Kashmir Valley Paradise",
    duration: "6 Days / 5 Nights",
    price: "₹42,999",
    image: "https://images.unsplash.com/photo-1665034640942-07c4170c2872?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLYXNobWlyJTIwSW5kaWElMjBkYWwlMjBsYWtlfGVufDF8fHx8MTc3NDI0NTE4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 4.8,
  },
  {
    id: 3,
    title: "Goa Beach Retreat",
    duration: "4 Days / 3 Nights",
    price: "₹28,999",
    image: "https://images.unsplash.com/photo-1667111838729-1a25f468856b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHb2ElMjBJbmRpYSUyMGJlYWNoJTIwc3Vuc2V0fGVufDF8fHx8MTc3NDE1OTQ4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    rating: 5.0,
  },
];

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    review: "Start Trips made our honeymoon unforgettable! The itinerary was perfect and everything was seamlessly organized.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1514189672269-0e46fbfd9260?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWlsaW5nJTIwd29tYW4lMjB0b3VyaXN0fGVufDF8fHx8MTc3NDA3NzEzOHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    review: "Exceptional service and attention to detail. The team handled everything from flights to activities. Highly recommend!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1758272958726-0bdf2ff791ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMHRyYXZlbGVycyUyMGdyb3VwfGVufDF8fHx8MTc3NDA3NzEzN3ww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    name: "Anjali & Vikram",
    review: "Our family vacation was incredible! Kid-friendly activities and accommodations were spot on. Thank you Start Trips!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1766717699651-c6521930b71d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNvdXBsZSUyMHZhY2F0aW9ufGVufDF8fHx8MTc3NDA3NzEzOHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function Home() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    destination: "",
    travelDates: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll send you a custom itinerary within 24 hours.");
    setFormData({ name: "", phone: "", destination: "", travelDates: "", notes: "" });
  };

  return (
    <div className="w-full">
      {/* Hero Section - Single Banner */}
      <section className="relative h-[650px] md:h-[750px] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1625317201684-b5ab0b282552?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW1hbGF5YW4lMjBtb3VudGFpbnMlMjBsYW5kc2NhcGUlMjBzdW5zZXR8ZW58MXx8fHwxNzc0MjQ1ODAwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Explore the Himalayas"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
          <div className="max-w-2xl text-white">
            <div className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-[#FF4D00] to-[#FFB300] rounded-full">
              <p className="b3 flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Ladakh & Kashmir Adventures
              </p>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Explore the Himalayas
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200">
              Experience breathtaking mountain landscapes and serene valleys
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/search?destination=Ladakh"
                className="group inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#FF4D00] to-[#FFB300] text-white rounded-full b1 hover:shadow-2xl transition-all transform hover:scale-105"
              >
                Explore Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/packages"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-md border-2 border-white text-white rounded-full b1 hover:bg-white/20 transition-all"
              >
                View Packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Spacer for floating search bar */}
      <div className="h-24 md:h-32 bg-brand-background"></div>

      {/* Search Trips Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="mb-4">Search Your Dream Trip</h2>
            <p className="b1 text-gray-600 max-w-2xl mx-auto">
              Find the perfect destination for your next adventure
            </p>
          </div>
          
          <div className="bg-gradient-to-r from-[#FF4D00] to-[#FFB300] rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="relative">
                <label className="block mb-2 b3 text-white">Destination</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select className="w-full pl-12 pr-4 py-4 border-2 border-white bg-white rounded-xl focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50 b2 appearance-none cursor-pointer">
                    <option value="">Select destination</option>
                    <option value="Ladakh">Ladakh</option>
                    <option value="Kashmir">Kashmir</option>
                    <option value="Goa">Goa</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Shimla">Shimla</option>
                    <option value="Manali">Manali</option>
                    <option value="Sikkim">Sikkim</option>
                    <option value="Coorg">Coorg</option>
                    <option value="Ooty">Ooty</option>
                    <option value="Gujarat">Gujarat</option>
                  </select>
                </div>
              </div>
              
              <div className="relative">
                <label className="block mb-2 b3 text-white">Travel Date</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="date"
                    className="w-full pl-12 pr-4 py-4 border-2 border-white bg-white rounded-xl focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50 b2"
                  />
                </div>
              </div>
              
              <div className="relative">
                <label className="block mb-2 b3 text-white">Duration</label>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <select className="w-full pl-12 pr-4 py-4 border-2 border-white bg-white rounded-xl focus:border-white focus:outline-none focus:ring-2 focus:ring-white/50 b2 appearance-none cursor-pointer">
                    <option value="">Select duration</option>
                    <option value="3-4">3-4 Days</option>
                    <option value="5-7">5-7 Days</option>
                    <option value="8-10">8-10 Days</option>
                    <option value="10+">10+ Days</option>
                  </select>
                </div>
              </div>
              
              <div className="relative">
                <label className="block mb-2 b3 text-white opacity-0 md:opacity-100">Search</label>
                <Link
                  to="/search"
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-white text-brand-primary rounded-xl b2 hover:bg-gray-50 transition-all transform hover:scale-105 shadow-lg"
                >
                  <Search className="w-5 h-5" />
                  Search Trips
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Why Choose Start Trips</h2>
            <p className="b1 text-gray-600 max-w-2xl mx-auto">
              We're committed to making your travel dreams come true with exceptional service and unforgettable experiences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#FF4D00] to-[#FFB300] rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h5 className="mb-2">10,000+ Happy Travelers</h5>
              <p className="b3 text-gray-600">Join thousands of satisfied customers who trust us</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#FF4D00] to-[#FFB300] rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="w-8 h-8 text-white" />
              </div>
              <h5 className="mb-2">24/7 Support</h5>
              <p className="b3 text-gray-600">We're here for you around the clock</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#FF4D00] to-[#FFB300] rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h5 className="mb-2">Transparent Pricing</h5>
              <p className="b3 text-gray-600">No hidden fees, just honest pricing</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-[#FF4D00] to-[#FFB300] rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h5 className="mb-2">Personalized Experiences</h5>
              <p className="b3 text-gray-600">Tailored itineraries just for you</p>
            </div>
          </div>
        </div>
      </section>

      {/* Top Destinations */}
      <section className="py-20 bg-brand-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Top Destinations</h2>
            <p className="b1 text-gray-600 max-w-2xl mx-auto">
              Explore the world's most breathtaking locations
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {destinations.map((destination) => (
              <Link
                key={destination.id}
                to={`/destinations?search=${destination.name}`}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="aspect-[3/4] relative">
                  <ImageWithFallback
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h5 className="mb-1">{destination.name}</h5>
                    <p className="b3 text-gray-200">{destination.tagline}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Packages */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Popular Packages</h2>
            <p className="b1 text-gray-600 max-w-2xl mx-auto">
              Handpicked travel packages for unforgettable experiences
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                <div className="aspect-[4/3] relative">
                  <ImageWithFallback
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover"
                  />
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
                    <span className="b4 text-gray-600 ml-2">({pkg.rating})</span>
                  </div>
                  <h5 className="mb-3">{pkg.title}</h5>
                  <div className="flex items-center gap-2 mb-4 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span className="b3">{pkg.duration}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="b4 text-gray-500">Starting from</span>
                      <div className="h6 text-brand-primary">{pkg.price}</div>
                    </div>
                    <Link
                      to={`/packages/${pkg.id}`}
                      className="px-4 py-2 bg-gradient-to-r from-[#FF4D00] to-[#FFB300] text-white rounded-lg b3 hover:shadow-lg transition-shadow"
                    >
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <GradientButton to="/packages">View All Packages</GradientButton>
          </div>
        </div>
      </section>

      {/* Get Free Itinerary */}
      <section className="py-20 bg-gradient-to-br from-[#FF4D00] to-[#FFB300]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 text-white">
            <h2 className="mb-4">Get Your Free Itinerary</h2>
            <p className="b1">
              Tell us about your dream trip and we'll create a personalized itinerary just for you
            </p>
          </div>
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block mb-2 text-brand-dark">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  placeholder="Rahul Verma"
                />
              </div>
              <div>
                <label className="block mb-2 text-brand-dark">Phone Number</label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label className="block mb-2 text-brand-dark">Destination</label>
                <input
                  type="text"
                  required
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  placeholder="e.g. Ladakh, Kashmir, Goa"
                />
              </div>
              <div>
                <label className="block mb-2 text-brand-dark">Travel Dates</label>
                <input
                  type="text"
                  required
                  value={formData.travelDates}
                  onChange={(e) => setFormData({ ...formData, travelDates: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  placeholder="e.g. July 2026"
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="block mb-2 text-brand-dark">Additional Notes</label>
              <textarea
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                placeholder="Tell us about your preferences, budget, travel style..."
              />
            </div>
            <div className="mt-8 text-center">
              <button
                type="submit"
                className="px-8 py-4 bg-gradient-to-r from-[#FF4D00] to-[#FFB300] text-white rounded-xl b2 hover:shadow-xl transition-shadow"
              >
                Get Free Itinerary
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">What Our Travelers Say</h2>
            <p className="b1 text-gray-600 max-w-2xl mx-auto">
              Real stories from real travelers
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-[#FFB300] text-[#FFB300]"
                    />
                  ))}
                </div>
                <p className="b2 text-gray-700 mb-6">{testimonial.review}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden">
                    <ImageWithFallback
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="h8 text-brand-dark">{testimonial.name}</div>
                    <div className="b4 text-gray-500">Verified Traveler</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}