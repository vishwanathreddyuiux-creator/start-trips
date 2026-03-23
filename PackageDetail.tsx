import { useParams, Link } from "react-router";
import { Star, Clock, MapPin, Users, Check, X, Calendar, Heart } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { GradientButton } from "../components/GradientButton";
import { useState } from "react";

const packageData: Record<string, any> = {
  "1": {
    title: "Kerala Backwaters Escape",
    destination: "Kerala, India",
    duration: "5 Days / 4 Nights",
    price: 35999,
    rating: 4.9,
    reviews: 234,
    maxPeople: 15,
    image: "https://images.unsplash.com/photo-1707893013488-51672ef83425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZXJhbGElMjBJbmRpYSUyMGJhY2t3YXRlcnMlMjBob3VzZWJvYXR8ZW58MXx8fHwxNzc0MjQ1MTg1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Experience God's Own Country with this comprehensive 5-day package that combines serene backwaters, beautiful beaches, lush tea plantations, and rich cultural heritage. Cruise through tranquil backwaters and enjoy authentic Kerala cuisine.",
    highlights: [
      "Houseboat cruise through Alleppey backwaters",
      "Visit Munnar tea plantations and hill stations",
      "Explore Fort Kochi and Chinese fishing nets",
      "Traditional Kerala Ayurvedic massage",
      "Kathakali dance performance",
      "Visit spice gardens and local markets"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Kochi", description: "Arrive in Kochi, hotel check-in. Evening visit to Fort Kochi, Chinese fishing nets, and Kathakali show." },
      { day: 2, title: "Munnar Hills", description: "Drive to Munnar, visit tea plantations, waterfalls, and scenic viewpoints." },
      { day: 3, title: "Backwater Cruise", description: "Transfer to Alleppey, check-in to houseboat. Cruise through scenic backwaters." },
      { day: 4, title: "Beaches & Relaxation", description: "Visit Kovalam or Varkala beach, Ayurvedic spa treatment, sunset viewing." },
      { day: 5, title: "Departure", description: "Morning at leisure, transfer to airport." }
    ],
    inclusions: [
      "4 nights accommodation in 4-star hotels & houseboat",
      "Daily breakfast and traditional Kerala meals",
      "Airport transfers",
      "All tours and entrance fees",
      "Professional English-speaking guide",
      "Transportation in air-conditioned vehicle"
    ],
    exclusions: [
      "Domestic flights",
      "Travel insurance",
      "Personal expenses",
      "Lunches (except on houseboat)",
      "Tips and gratuities",
      "Optional activities"
    ]
  },
  "2": {
    title: "Kashmir Valley Paradise",
    destination: "Kashmir, India",
    duration: "6 Days / 5 Nights",
    price: 42999,
    rating: 4.8,
    reviews: 189,
    maxPeople: 20,
    image: "https://images.unsplash.com/photo-1665034640942-07c4170c2872?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLYXNobWlyJTIwSW5kaWElMjBkYWwlMjBsYWtlfGVufDF8fHx8MTc3NDI0NTE4NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Discover Paradise on Earth with this enchanting 6-day escape to Kashmir. Experience stunning valleys, pristine Dal Lake, majestic Himalayan peaks, and warm Kashmiri hospitality.",
    highlights: [
      "Shikara ride on Dal Lake",
      "Visit Mughal Gardens - Nishat and Shalimar Bagh",
      "Gulmarg gondola cable car ride",
      "Pahalgam valley and Betaab Valley excursion",
      "Traditional Kashmiri Wazwan cuisine",
      "Snow activities (seasonal)"
    ],
    itinerary: [
      { day: 1, title: "Namaste Srinagar!", description: "Arrival in Srinagar, hotel/houseboat check-in, evening Shikara ride on Dal Lake" },
      { day: 2, title: "Srinagar Gardens", description: "Visit Mughal Gardens, Shankaracharya Temple, and local markets" },
      { day: 3, title: "Gulmarg Excursion", description: "Day trip to Gulmarg, gondola ride, meadows, and snow activities" },
      { day: 4, title: "Pahalgam Beauty", description: "Drive to Pahalgam, visit Betaab Valley, Aru Valley, and Lidder River" },
      { day: 5, title: "Back to Srinagar", description: "Return to Srinagar, shopping for Pashmina shawls and dry fruits" },
      { day: 6, title: "Alvida Kashmir", description: "Morning at leisure, departure transfer" }
    ],
    inclusions: [
      "5 nights in deluxe hotel/houseboat",
      "Daily breakfast and select meals",
      "Shikara ride on Dal Lake",
      "Gondola ride in Gulmarg",
      "Airport transfers",
      "English-speaking guide"
    ],
    exclusions: [
      "Domestic flights",
      "Lunches and some dinners",
      "Travel insurance",
      "Pony rides and adventure activities",
      "Personal expenses"
    ]
  },
  "3": {
    title: "Goa Beach Retreat",
    destination: "Goa, India",
    duration: "4 Days / 3 Nights",
    price: 28999,
    rating: 5.0,
    reviews: 312,
    maxPeople: 10,
    image: "https://images.unsplash.com/photo-1667111838729-1a25f468856b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHb2ElMjBJbmRpYSUyMGJlYWNoJTIwc3Vuc2V0fGVufDF8fHx8MTc3NDE1OTQ4OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description: "Relax and unwind in tropical Goa with pristine beaches, Portuguese heritage, vibrant nightlife, and delicious seafood. Perfect blend of relaxation and adventure.",
    highlights: [
      "Beach hopping - Baga, Calangute, Anjuna",
      "Water sports and adventure activities",
      "Old Goa churches and Fort Aguada",
      "Sunset cruise on Mandovi River",
      "Fresh seafood and Goan cuisine",
      "Beach shacks and nightlife experience"
    ],
    itinerary: [
      { day: 1, title: "Beach Paradise", description: "Arrival in Goa, beach resort check-in, relax at Baga Beach, evening beach shack" },
      { day: 2, title: "North Goa Beaches", description: "Beach hopping tour, water sports, visit to Fort Aguada, sunset at Anjuna" },
      { day: 3, title: "Heritage & Cruise", description: "Old Goa churches, spice plantation tour, evening Mandovi River cruise" },
      { day: 4, title: "Leisure & Departure", description: "Morning beach time, shopping at flea market, departure transfer" }
    ],
    inclusions: [
      "3 nights in beach resort",
      "Daily breakfast",
      "Sunset river cruise",
      "Spice plantation visit",
      "Airport transfers",
      "Water sports package"
    ],
    exclusions: [
      "Domestic flights",
      "Meals other than breakfast",
      "Premium spa treatments",
      "Scuba diving and parasailing",
      "Personal expenses"
    ]
  }
};

export function PackageDetail() {
  const { id } = useParams();
  const [isWishlisted, setIsWishlisted] = useState(false);
  const pkg = packageData[id || "1"] || packageData["1"];

  return (
    <div className="w-full">
      {/* Hero Image */}
      <section className="relative h-[500px]">
        <ImageWithFallback
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-white mb-4">{pkg.title}</h1>
            <div className="flex flex-wrap gap-4 text-white">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                <span className="b2">{pkg.destination}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span className="b2">{pkg.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span className="b2">Max {pkg.maxPeople} people</span>
              </div>
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 fill-[#FFB300] text-[#FFB300]" />
                <span className="b2">{pkg.rating} ({pkg.reviews} reviews)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-brand-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Details */}
            <div className="lg:col-span-2 space-y-8">
              {/* Description */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="mb-4">About This Package</h3>
                <p className="b2 text-gray-700">{pkg.description}</p>
              </div>

              {/* Highlights */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h4 className="mb-6">Highlights</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {pkg.highlights.map((highlight: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-gradient-to-r from-[#FF4D00] to-[#FFB300] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="b3 text-gray-700">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Itinerary */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h4 className="mb-6">Day-by-Day Itinerary</h4>
                <div className="space-y-6">
                  {pkg.itinerary.map((item: any, index: number) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#FF4D00] to-[#FFB300] rounded-full flex items-center justify-center">
                          <span className="h7 text-white">{item.day}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h6 className="mb-2">{item.title}</h6>
                        <p className="b3 text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Inclusions & Exclusions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h5 className="mb-4 text-green-600">Included</h5>
                  <ul className="space-y-3">
                    {pkg.inclusions.map((item: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="b3 text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <h5 className="mb-4 text-red-600">Not Included</h5>
                  <ul className="space-y-3">
                    {pkg.exclusions.map((item: string, index: number) => (
                      <li key={index} className="flex items-start gap-2">
                        <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                        <span className="b3 text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Right Column - Booking Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl p-8 shadow-xl sticky top-24">
                <div className="mb-6">
                  <span className="b3 text-gray-600">Starting from</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-brand-primary">₹{pkg.price.toLocaleString('en-IN')}</span>
                    <span className="b3 text-gray-600">per person</span>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <label className="block mb-2 text-brand-dark">Select Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="date"
                        className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block mb-2 text-brand-dark">Number of Travelers</label>
                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent">
                      <option>1 Person</option>
                      <option>2 People</option>
                      <option>3 People</option>
                      <option>4 People</option>
                      <option>5+ People</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link
                    to={`/packages/${id}/book`}
                    className="block w-full px-6 py-4 bg-gradient-to-r from-[#FF4D00] to-[#FFB300] text-white rounded-xl b2 text-center hover:shadow-lg transition-shadow"
                  >
                    Book Now
                  </Link>
                  <button
                    onClick={() => setIsWishlisted(!isWishlisted)}
                    className={`w-full px-6 py-4 border-2 rounded-xl b2 transition-colors ${
                      isWishlisted
                        ? "border-brand-primary bg-brand-primary text-white"
                        : "border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white"
                    }`}
                  >
                    <Heart className={`w-5 h-5 inline mr-2 ${isWishlisted ? "fill-current" : ""}`} />
                    {isWishlisted ? "Saved" : "Save to Wishlist"}
                  </button>
                  <Link
                    to="/support"
                    className="block w-full px-6 py-4 bg-gray-100 text-brand-dark rounded-xl b2 text-center hover:bg-gray-200 transition-colors"
                  >
                    Customize This Package
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}