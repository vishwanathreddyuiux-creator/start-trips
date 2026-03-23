import { useState } from "react";
import { useNavigate } from "react-router";
import { ChevronRight, ChevronLeft, Check } from "lucide-react";

const destinations = [
  "Kerala",
  "Kashmir",
  "Goa",
  "Ladakh",
  "Shimla",
  "Manali",
  "Sikkim",
  "Ooty",
  "Coorg",
  "Gujarat",
];

export function Onboarding() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    budget: "",
    travelType: "",
    destinations: [] as string[],
  });

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    } else {
      navigate("/dashboard");
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const toggleDestination = (destination: string) => {
    if (formData.destinations.includes(destination)) {
      setFormData({
        ...formData,
        destinations: formData.destinations.filter((d) => d !== destination),
      });
    } else {
      setFormData({
        ...formData,
        destinations: [...formData.destinations, destination],
      });
    }
  };

  const canProceed = () => {
    if (currentStep === 1) return true;
    if (currentStep === 2) return formData.budget && formData.travelType;
    if (currentStep === 3) return formData.destinations.length > 0;
    return true;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-background to-white flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full">
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
            <span className="b4 text-gray-600 flex-1">Welcome</span>
            <span className="b4 text-gray-600 flex-1">Preferences</span>
            <span className="b4 text-gray-600 flex-1">Destinations</span>
            <span className="b4 text-gray-600 flex-1">Complete</span>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Step 1: Welcome */}
          {currentStep === 1 && (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-gradient-to-r from-[#FF4D00] to-[#FFB300] rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="h4 text-white">ST</span>
              </div>
              <h3 className="mb-4">Welcome to Start Trips!</h3>
              <p className="b1 text-gray-600 max-w-md mx-auto">
                Let's personalize your travel experience in just a few steps
              </p>
            </div>
          )}

          {/* Step 2: Preferences */}
          {currentStep === 2 && (
            <div>
              <h3 className="mb-2 text-center">Your Preferences</h3>
              <p className="b2 text-gray-600 text-center mb-8">
                Tell us about your travel style
              </p>

              <div className="space-y-6">
                <div>
                  <label className="block mb-3 text-brand-dark h7">Budget Range</label>
                  <div className="grid grid-cols-2 gap-3">
                    {["₹25,000 - ₹50,000", "₹50,000 - ₹1,00,000", "₹1,00,000 - ₹2,00,000", "₹2,00,000+"].map((range) => (
                      <button
                        key={range}
                        type="button"
                        onClick={() => setFormData({ ...formData, budget: range })}
                        className={`p-4 rounded-lg border-2 transition-all ${
                          formData.budget === range
                            ? "border-brand-primary bg-orange-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <span className="b3">{range}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block mb-3 text-brand-dark h7">Travel Type</label>
                  <div className="grid grid-cols-2 gap-3">
                    {["Adventure", "Relaxation", "Cultural", "Luxury"].map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setFormData({ ...formData, travelType: type })}
                        className={`p-4 rounded-lg border-2 transition-all ${
                          formData.travelType === type
                            ? "border-brand-primary bg-orange-50"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        <span className="b3">{type}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Destinations */}
          {currentStep === 3 && (
            <div>
              <h3 className="mb-2 text-center">Preferred Destinations</h3>
              <p className="b2 text-gray-600 text-center mb-8">
                Select destinations you'd like to explore
              </p>

              <div className="grid grid-cols-2 gap-3">
                {destinations.map((destination) => (
                  <button
                    key={destination}
                    type="button"
                    onClick={() => toggleDestination(destination)}
                    className={`p-4 rounded-lg border-2 transition-all text-left ${
                      formData.destinations.includes(destination)
                        ? "border-brand-primary bg-orange-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="b3">{destination}</span>
                      {formData.destinations.includes(destination) && (
                        <Check className="w-5 h-5 text-brand-primary" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
              <p className="b4 text-gray-500 mt-4 text-center">
                {formData.destinations.length} destination{formData.destinations.length !== 1 ? "s" : ""} selected
              </p>
            </div>
          )}

          {/* Step 4: Complete */}
          {currentStep === 4 && (
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Check className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="mb-4">All Set!</h3>
              <p className="b1 text-gray-600 max-w-md mx-auto mb-8">
                Your profile is ready. Let's start planning your next adventure!
              </p>
              <div className="bg-gray-50 rounded-lg p-6 max-w-md mx-auto text-left">
                <h6 className="mb-4">Your Preferences:</h6>
                <div className="space-y-2 b3 text-gray-700">
                  <p><strong>Budget:</strong> {formData.budget}</p>
                  <p><strong>Travel Type:</strong> {formData.travelType}</p>
                  <p><strong>Interested in:</strong> {formData.destinations.join(", ")}</p>
                </div>
              </div>
            </div>
          )}

          {/* Navigation */}
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
              {currentStep === 4 ? "Go to Dashboard" : "Next"}
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}