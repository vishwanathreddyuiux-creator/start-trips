import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router";
import { Check, ChevronRight, ChevronLeft, CreditCard, Calendar, Users, User, Mail, Phone } from "lucide-react";

export function Booking() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Traveler Details
    travelers: [
      { firstName: "", lastName: "", email: "", phone: "" },
    ],
    // Step 2: Customization
    roomType: "standard",
    addOns: [] as string[],
    specialRequests: "",
    // Step 3: Payment
    cardNumber: "",
    cardName: "",
    expiryDate: "",
    cvv: "",
  });

  const packageTitle = "Bali Paradise Escape";
  const basePrice = 1299;
  const addOnPrices: Record<string, number> = {
    "Travel Insurance": 99,
    "Airport Transfer": 49,
    "City Tour": 79,
    "Spa Package": 149,
  };

  const calculateTotal = () => {
    let total = basePrice;
    if (formData.roomType === "deluxe") total += 200;
    if (formData.roomType === "suite") total += 500;
    formData.addOns.forEach((addon) => {
      total += addOnPrices[addon] || 0;
    });
    return total;
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete booking
      navigate("/dashboard");
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const toggleAddOn = (addon: string) => {
    if (formData.addOns.includes(addon)) {
      setFormData({
        ...formData,
        addOns: formData.addOns.filter((a) => a !== addon),
      });
    } else {
      setFormData({
        ...formData,
        addOns: [...formData.addOns, addon],
      });
    }
  };

  const canProceed = () => {
    if (currentStep === 1) {
      const firstTraveler = formData.travelers[0];
      return firstTraveler.firstName && firstTraveler.lastName && firstTraveler.email && firstTraveler.phone;
    }
    if (currentStep === 2) return true;
    if (currentStep === 3) {
      return formData.cardNumber && formData.cardName && formData.expiryDate && formData.cvv;
    }
    return true;
  };

  return (
    <div className="min-h-screen bg-brand-background py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex-1 relative">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center mx-auto ${
                    step <= currentStep
                      ? "bg-gradient-to-r from-[#FF4D00] to-[#FFB300] text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {step < currentStep ? <Check className="w-5 h-5" /> : step}
                </div>
                {step < 4 && (
                  <div
                    className={`absolute top-5 left-1/2 w-full h-0.5 ${
                      step < currentStep ? "bg-brand-primary" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-center">
            <span className="b4 text-gray-600 flex-1">Traveler Details</span>
            <span className="b4 text-gray-600 flex-1">Customization</span>
            <span className="b4 text-gray-600 flex-1">Payment</span>
            <span className="b4 text-gray-600 flex-1">Confirmation</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              {/* Step 1: Traveler Details */}
              {currentStep === 1 && (
                <div>
                  <h4 className="mb-6 flex items-center gap-2">
                    <Users className="w-6 h-6 text-brand-primary" />
                    Traveler Details
                  </h4>

                  {formData.travelers.map((traveler, index) => (
                    <div key={index} className="mb-6 pb-6 border-b last:border-b-0">
                      <h6 className="mb-4">Traveler {index + 1}</h6>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block mb-2 text-brand-dark">First Name</label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="text"
                              required
                              value={traveler.firstName}
                              onChange={(e) => {
                                const newTravelers = [...formData.travelers];
                                newTravelers[index].firstName = e.target.value;
                                setFormData({ ...formData, travelers: newTravelers });
                              }}
                              className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                              placeholder="John"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block mb-2 text-brand-dark">Last Name</label>
                          <input
                            type="text"
                            required
                            value={traveler.lastName}
                            onChange={(e) => {
                              const newTravelers = [...formData.travelers];
                              newTravelers[index].lastName = e.target.value;
                              setFormData({ ...formData, travelers: newTravelers });
                            }}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                            placeholder="Doe"
                          />
                        </div>
                        <div>
                          <label className="block mb-2 text-brand-dark">Email</label>
                          <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="email"
                              required
                              value={traveler.email}
                              onChange={(e) => {
                                const newTravelers = [...formData.travelers];
                                newTravelers[index].email = e.target.value;
                                setFormData({ ...formData, travelers: newTravelers });
                              }}
                              className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                              placeholder="john@example.com"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block mb-2 text-brand-dark">Phone</label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                              type="tel"
                              required
                              value={traveler.phone}
                              onChange={(e) => {
                                const newTravelers = [...formData.travelers];
                                newTravelers[index].phone = e.target.value;
                                setFormData({ ...formData, travelers: newTravelers });
                              }}
                              className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                              placeholder="+1 (555) 123-4567"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Step 2: Customization */}
              {currentStep === 2 && (
                <div>
                  <h4 className="mb-6">Customize Your Trip</h4>

                  <div className="mb-6">
                    <label className="block mb-3 text-brand-dark h7">Room Type</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                      {[
                        { value: "standard", label: "Standard", price: 0 },
                        { value: "deluxe", label: "Deluxe", price: 200 },
                        { value: "suite", label: "Suite", price: 500 },
                      ].map((room) => (
                        <button
                          key={room.value}
                          onClick={() => setFormData({ ...formData, roomType: room.value })}
                          className={`p-4 rounded-lg border-2 transition-all ${
                            formData.roomType === room.value
                              ? "border-brand-primary bg-orange-50"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                        >
                          <div className="h8 mb-1">{room.label}</div>
                          <div className="b4 text-gray-600">
                            {room.price > 0 ? `+$${room.price}` : "Included"}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block mb-3 text-brand-dark h7">Add-ons</label>
                    <div className="space-y-3">
                      {Object.entries(addOnPrices).map(([addon, price]) => (
                        <label
                          key={addon}
                          className="flex items-center justify-between p-4 border border-gray-200 rounded-lg cursor-pointer hover:border-brand-primary transition-colors"
                        >
                          <div className="flex items-center gap-3">
                            <input
                              type="checkbox"
                              checked={formData.addOns.includes(addon)}
                              onChange={() => toggleAddOn(addon)}
                              className="text-brand-primary focus:ring-brand-primary"
                            />
                            <span className="b3">{addon}</span>
                          </div>
                          <span className="b3 text-brand-primary">+${price}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 text-brand-dark">Special Requests</label>
                    <textarea
                      value={formData.specialRequests}
                      onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                      placeholder="Any dietary restrictions, accessibility needs, or special occasions..."
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Payment */}
              {currentStep === 3 && (
                <div>
                  <h4 className="mb-6 flex items-center gap-2">
                    <CreditCard className="w-6 h-6 text-brand-primary" />
                    Payment Information
                  </h4>

                  <div className="space-y-5">
                    <div>
                      <label className="block mb-2 text-brand-dark">Card Number</label>
                      <input
                        type="text"
                        required
                        value={formData.cardNumber}
                        onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                        placeholder="1234 5678 9012 3456"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 text-brand-dark">Cardholder Name</label>
                      <input
                        type="text"
                        required
                        value={formData.cardName}
                        onChange={(e) => setFormData({ ...formData, cardName: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block mb-2 text-brand-dark">Expiry Date</label>
                        <input
                          type="text"
                          required
                          value={formData.expiryDate}
                          onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                          placeholder="MM/YY"
                        />
                      </div>
                      <div>
                        <label className="block mb-2 text-brand-dark">CVV</label>
                        <input
                          type="text"
                          required
                          value={formData.cvv}
                          onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                          placeholder="123"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                    <p className="b4 text-gray-600">
                      <strong>Note:</strong> Your payment information is secure and encrypted. You will be charged the total amount shown in the summary.
                    </p>
                  </div>
                </div>
              )}

              {/* Step 4: Confirmation */}
              {currentStep === 4 && (
                <div className="text-center py-8">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="mb-4">Booking Confirmed!</h3>
                  <p className="b1 text-gray-600 max-w-md mx-auto mb-8">
                    Your trip to {packageTitle} has been successfully booked. Check your email for confirmation details.
                  </p>
                  <div className="bg-gray-50 rounded-lg p-6 max-w-md mx-auto mb-8">
                    <h6 className="mb-4">Booking Summary</h6>
                    <div className="space-y-2 b3 text-gray-700 text-left">
                      <div className="flex justify-between">
                        <span>Package:</span>
                        <span>{packageTitle}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Travelers:</span>
                        <span>{formData.travelers.length}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Room Type:</span>
                        <span className="capitalize">{formData.roomType}</span>
                      </div>
                      <div className="flex justify-between pt-2 border-t">
                        <span className="font-semibold">Total:</span>
                        <span className="font-semibold text-brand-primary">${calculateTotal()}</span>
                      </div>
                    </div>
                  </div>
                  <Link
                    to="/dashboard"
                    className="inline-block px-8 py-3 bg-gradient-to-r from-[#FF4D00] to-[#FFB300] text-white rounded-lg b2 hover:shadow-xl transition-shadow"
                  >
                    Go to Dashboard
                  </Link>
                </div>
              )}

              {/* Navigation */}
              {currentStep < 4 && (
                <div className="flex items-center justify-between mt-8 pt-6 border-t">
                  <button
                    onClick={handleBack}
                    disabled={currentStep === 1}
                    className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg b3 ${
                      currentStep === 1
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-brand-primary hover:bg-orange-50"
                    }`}
                  >
                    <ChevronLeft className="w-5 h-5" />
                    Back
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={!canProceed()}
                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg b3 ${
                      canProceed()
                        ? "bg-gradient-to-r from-[#FF4D00] to-[#FFB300] text-white hover:shadow-lg"
                        : "bg-gray-200 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    {currentStep === 3 ? "Complete Booking" : "Next"}
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Order Summary */}
          {currentStep < 4 && (
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-24">
                <h6 className="mb-4">Order Summary</h6>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between b3">
                    <span className="text-gray-600">Package:</span>
                    <span>{packageTitle}</span>
                  </div>
                  <div className="flex justify-between b3">
                    <span className="text-gray-600">Base Price:</span>
                    <span>${basePrice}</span>
                  </div>
                  {formData.roomType !== "standard" && (
                    <div className="flex justify-between b3">
                      <span className="text-gray-600 capitalize">{formData.roomType} Upgrade:</span>
                      <span>+${formData.roomType === "deluxe" ? 200 : 500}</span>
                    </div>
                  )}
                  {formData.addOns.map((addon) => (
                    <div key={addon} className="flex justify-between b3">
                      <span className="text-gray-600">{addon}:</span>
                      <span>+${addOnPrices[addon]}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t">
                  <div className="flex justify-between mb-2">
                    <span className="h7">Total:</span>
                    <span className="h6 text-brand-primary">${calculateTotal()}</span>
                  </div>
                  <p className="b5 text-gray-500">Includes taxes and fees</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}