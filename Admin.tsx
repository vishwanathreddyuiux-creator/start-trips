import { useState } from "react";
import { Link } from "react-router";
import {
  Users,
  Package,
  DollarSign,
  TrendingUp,
  Calendar,
  Mail,
  MoreVertical,
  Edit,
  Trash2,
  Plus,
  Search,
  LayoutDashboard,
  MessageSquare,
} from "lucide-react";

const stats = [
  { label: "Total Users", value: "1,243", icon: Users, change: "+12%", color: "from-blue-500 to-blue-600" },
  { label: "Total Bookings", value: "342", icon: Calendar, change: "+8%", color: "from-green-500 to-green-600" },
  { label: "Revenue", value: "$487,293", icon: DollarSign, change: "+23%", color: "from-orange-500 to-orange-600" },
  { label: "Active Packages", value: "48", icon: Package, change: "+5", color: "from-purple-500 to-purple-600" },
];

const recentBookings = [
  { id: 1, user: "Sarah Johnson", package: "Bali Paradise Escape", date: "Mar 20, 2026", amount: "$1,299", status: "Confirmed" },
  { id: 2, user: "Michael Chen", package: "Paris Romance", date: "Mar 19, 2026", amount: "$1,899", status: "Pending" },
  { id: 3, user: "Emma Wilson", package: "Maldives Luxury", date: "Mar 18, 2026", amount: "$2,499", status: "Confirmed" },
  { id: 4, user: "David Brown", package: "Swiss Alps Adventure", date: "Mar 17, 2026", amount: "$1,899", status: "Confirmed" },
  { id: 5, user: "Lisa Anderson", package: "Tokyo Cultural", date: "Mar 16, 2026", amount: "$1,699", status: "Cancelled" },
];

const packages = [
  { id: 1, title: "Bali Paradise Escape", destination: "Bali", price: "$1,299", bookings: 45, status: "Active" },
  { id: 2, title: "Paris Romance Package", destination: "Paris", price: "$1,899", bookings: 32, status: "Active" },
  { id: 3, title: "Maldives Luxury Retreat", destination: "Maldives", price: "$2,499", bookings: 28, status: "Active" },
  { id: 4, title: "Swiss Alps Adventure", destination: "Switzerland", price: "$1,899", bookings: 23, status: "Active" },
  { id: 5, title: "Tokyo Cultural Experience", destination: "Japan", price: "$1,699", bookings: 19, status: "Inactive" },
];

const leads = [
  { id: 1, name: "Alex Thompson", email: "alex@example.com", destination: "Bali", date: "Today", status: "New" },
  { id: 2, name: "Rachel Green", email: "rachel@example.com", destination: "Paris", date: "Yesterday", status: "Contacted" },
  { id: 3, name: "James Wilson", email: "james@example.com", destination: "Maldives", date: "2 days ago", status: "New" },
];

export function Admin() {
  const [activeTab, setActiveTab] = useState<"dashboard" | "users" | "packages" | "bookings" | "leads">("dashboard");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-brand-background">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-brand-dark text-white min-h-screen p-6 flex-shrink-0">
          <Link to="/" className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-gradient-to-r from-[#FF4D00] to-[#FFB300] rounded-full flex items-center justify-center">
              <span className="h9 text-white">ST</span>
            </div>
            <span className="h7">Admin Panel</span>
          </Link>

          <nav className="space-y-2">
            <button
              onClick={() => setActiveTab("dashboard")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === "dashboard" ? "bg-brand-primary" : "hover:bg-white/10"
              }`}
            >
              <LayoutDashboard className="w-5 h-5" />
              <span className="b3">Dashboard</span>
            </button>
            <button
              onClick={() => setActiveTab("users")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === "users" ? "bg-brand-primary" : "hover:bg-white/10"
              }`}
            >
              <Users className="w-5 h-5" />
              <span className="b3">Users</span>
            </button>
            <button
              onClick={() => setActiveTab("packages")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === "packages" ? "bg-brand-primary" : "hover:bg-white/10"
              }`}
            >
              <Package className="w-5 h-5" />
              <span className="b3">Packages</span>
            </button>
            <button
              onClick={() => setActiveTab("bookings")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === "bookings" ? "bg-brand-primary" : "hover:bg-white/10"
              }`}
            >
              <Calendar className="w-5 h-5" />
              <span className="b3">Bookings</span>
            </button>
            <button
              onClick={() => setActiveTab("leads")}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                activeTab === "leads" ? "bg-brand-primary" : "hover:bg-white/10"
              }`}
            >
              <MessageSquare className="w-5 h-5" />
              <span className="b3">Leads</span>
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {/* Dashboard Tab */}
          {activeTab === "dashboard" && (
            <div>
              <div className="mb-8">
                <h2 className="mb-2">Dashboard Overview</h2>
                <p className="b1 text-gray-600">Welcome back, Admin</p>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center`}>
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="inline-flex items-center gap-1 text-green-600 b4">
                        <TrendingUp className="w-4 h-4" />
                        {stat.change}
                      </span>
                    </div>
                    <h4>{stat.value}</h4>
                    <p className="b3 text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Recent Bookings */}
              <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h5>Recent Bookings</h5>
                  <button
                    onClick={() => setActiveTab("bookings")}
                    className="b3 text-brand-primary hover:text-brand-accent"
                  >
                    View All
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 b3 text-gray-600">User</th>
                        <th className="text-left py-3 px-4 b3 text-gray-600">Package</th>
                        <th className="text-left py-3 px-4 b3 text-gray-600">Date</th>
                        <th className="text-left py-3 px-4 b3 text-gray-600">Amount</th>
                        <th className="text-left py-3 px-4 b3 text-gray-600">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentBookings.slice(0, 5).map((booking) => (
                        <tr key={booking.id} className="border-b hover:bg-gray-50">
                          <td className="py-4 px-4 b3">{booking.user}</td>
                          <td className="py-4 px-4 b3">{booking.package}</td>
                          <td className="py-4 px-4 b3 text-gray-600">{booking.date}</td>
                          <td className="py-4 px-4 b3">{booking.amount}</td>
                          <td className="py-4 px-4">
                            <span
                              className={`inline-block px-3 py-1 rounded-full b5 ${
                                booking.status === "Confirmed"
                                  ? "bg-green-100 text-green-700"
                                  : booking.status === "Pending"
                                  ? "bg-yellow-100 text-yellow-700"
                                  : "bg-red-100 text-red-700"
                              }`}
                            >
                              {booking.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Users Tab */}
          {activeTab === "users" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3>User Management</h3>
                <button className="px-4 py-2 bg-gradient-to-r from-[#FF4D00] to-[#FFB300] text-white rounded-lg b3 flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  Add User
                </button>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="mb-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search users..."
                      className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>

                <p className="b2 text-gray-600 text-center py-12">User management table would appear here</p>
              </div>
            </div>
          )}

          {/* Packages Tab */}
          {activeTab === "packages" && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <h3>Package Management</h3>
                <button className="px-4 py-2 bg-gradient-to-r from-[#FF4D00] to-[#FFB300] text-white rounded-lg b3 flex items-center gap-2">
                  <Plus className="w-4 h-4" />
                  Add Package
                </button>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 b3 text-gray-600">Package</th>
                        <th className="text-left py-3 px-4 b3 text-gray-600">Destination</th>
                        <th className="text-left py-3 px-4 b3 text-gray-600">Price</th>
                        <th className="text-left py-3 px-4 b3 text-gray-600">Bookings</th>
                        <th className="text-left py-3 px-4 b3 text-gray-600">Status</th>
                        <th className="text-left py-3 px-4 b3 text-gray-600">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {packages.map((pkg) => (
                        <tr key={pkg.id} className="border-b hover:bg-gray-50">
                          <td className="py-4 px-4 b3">{pkg.title}</td>
                          <td className="py-4 px-4 b3">{pkg.destination}</td>
                          <td className="py-4 px-4 b3">{pkg.price}</td>
                          <td className="py-4 px-4 b3">{pkg.bookings}</td>
                          <td className="py-4 px-4">
                            <span
                              className={`inline-block px-3 py-1 rounded-full b5 ${
                                pkg.status === "Active"
                                  ? "bg-green-100 text-green-700"
                                  : "bg-gray-100 text-gray-700"
                              }`}
                            >
                              {pkg.status}
                            </span>
                          </td>
                          <td className="py-4 px-4">
                            <div className="flex items-center gap-2">
                              <button className="p-2 hover:bg-gray-100 rounded-lg">
                                <Edit className="w-4 h-4 text-blue-600" />
                              </button>
                              <button className="p-2 hover:bg-gray-100 rounded-lg">
                                <Trash2 className="w-4 h-4 text-red-600" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Bookings Tab */}
          {activeTab === "bookings" && (
            <div>
              <div className="mb-6">
                <h3>All Bookings</h3>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 b3 text-gray-600">User</th>
                        <th className="text-left py-3 px-4 b3 text-gray-600">Package</th>
                        <th className="text-left py-3 px-4 b3 text-gray-600">Date</th>
                        <th className="text-left py-3 px-4 b3 text-gray-600">Amount</th>
                        <th className="text-left py-3 px-4 b3 text-gray-600">Status</th>
                        <th className="text-left py-3 px-4 b3 text-gray-600">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {recentBookings.map((booking) => (
                        <tr key={booking.id} className="border-b hover:bg-gray-50">
                          <td className="py-4 px-4 b3">{booking.user}</td>
                          <td className="py-4 px-4 b3">{booking.package}</td>
                          <td className="py-4 px-4 b3 text-gray-600">{booking.date}</td>
                          <td className="py-4 px-4 b3">{booking.amount}</td>
                          <td className="py-4 px-4">
                            <span
                              className={`inline-block px-3 py-1 rounded-full b5 ${
                                booking.status === "Confirmed"
                                  ? "bg-green-100 text-green-700"
                                  : booking.status === "Pending"
                                  ? "bg-yellow-100 text-yellow-700"
                                  : "bg-red-100 text-red-700"
                              }`}
                            >
                              {booking.status}
                            </span>
                          </td>
                          <td className="py-4 px-4">
                            <button className="p-2 hover:bg-gray-100 rounded-lg">
                              <MoreVertical className="w-4 h-4 text-gray-600" />
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* Leads Tab */}
          {activeTab === "leads" && (
            <div>
              <div className="mb-6">
                <h3>Lead Management</h3>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4 b3 text-gray-600">Name</th>
                        <th className="text-left py-3 px-4 b3 text-gray-600">Email</th>
                        <th className="text-left py-3 px-4 b3 text-gray-600">Destination</th>
                        <th className="text-left py-3 px-4 b3 text-gray-600">Date</th>
                        <th className="text-left py-3 px-4 b3 text-gray-600">Status</th>
                        <th className="text-left py-3 px-4 b3 text-gray-600">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {leads.map((lead) => (
                        <tr key={lead.id} className="border-b hover:bg-gray-50">
                          <td className="py-4 px-4 b3">{lead.name}</td>
                          <td className="py-4 px-4 b3">{lead.email}</td>
                          <td className="py-4 px-4 b3">{lead.destination}</td>
                          <td className="py-4 px-4 b3 text-gray-600">{lead.date}</td>
                          <td className="py-4 px-4">
                            <span
                              className={`inline-block px-3 py-1 rounded-full b5 ${
                                lead.status === "New"
                                  ? "bg-blue-100 text-blue-700"
                                  : "bg-green-100 text-green-700"
                              }`}
                            >
                              {lead.status}
                            </span>
                          </td>
                          <td className="py-4 px-4">
                            <button className="px-3 py-1 bg-brand-primary text-white rounded-lg b5">
                              Contact
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
