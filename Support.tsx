import { useState } from "react";
import { MessageCircle, Mail, Phone, MapPin, Send, ChevronDown, ChevronUp, HelpCircle } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "How do I book a package?",
    answer:
      "Browse our packages, click 'Book Now' on your chosen package, fill in traveler details, customize if needed, and complete payment. You'll receive confirmation via email.",
  },
  {
    id: 2,
    question: "What is your cancellation policy?",
    answer:
      "Free cancellation up to 14 days before travel. 50% refund between 7-14 days. No refund within 7 days of travel. Some packages may have different policies.",
  },
  {
    id: 3,
    question: "Are visa services included?",
    answer:
      "Visa assistance is available as an add-on service. We guide you through the process and help with documentation. Visa fees are separate.",
  },
  {
    id: 4,
    question: "Can I customize a package?",
    answer:
      "Yes! Most packages can be customized. Click 'Customize Plan' on any package detail page or contact us for a fully personalized itinerary.",
  },
  {
    id: 5,
    question: "What payment methods do you accept?",
    answer:
      "We accept credit/debit cards (Visa, MasterCard, AmEx), PayPal, bank transfers, and installment plans through our financing partners.",
  },
  {
    id: 6,
    question: "Is travel insurance included?",
    answer:
      "Basic travel insurance is included in all packages. You can upgrade to comprehensive coverage during booking for additional protection.",
  },
];

export function Support() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [chatMessage, setChatMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([
    { id: 1, sender: "support", text: "Hi! How can I help you today?", time: "9:00 AM" },
  ]);
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const toggleFaq = (id: number) => {
    setExpandedFaq(expandedFaq === id ? null : id);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!chatMessage.trim()) return;

    const newMessage = {
      id: chatMessages.length + 1,
      sender: "user",
      text: chatMessage,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    };

    setChatMessages([...chatMessages, newMessage]);
    setChatMessage("");

    // Simulate support response
    setTimeout(() => {
      const response = {
        id: chatMessages.length + 2,
        sender: "support",
        text: "Thank you for your message. A support agent will respond shortly.",
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };
      setChatMessages((prev) => [...prev, response]);
    }, 1000);
  };

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll get back to you within 24 hours.");
    setContactForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-brand-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-[#FF4D00] to-[#FFB300] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4">How Can We Help?</h2>
          <p className="b1 max-w-2xl mx-auto">
            We're here 24/7 to assist you with any questions or concerns
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-r from-[#FF4D00] to-[#FFB300] rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h6 className="mb-2">Live Chat</h6>
            <p className="b3 text-gray-600 mb-4">Chat with our support team</p>
            <p className="b3 text-brand-primary">Available 24/7</p>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-r from-[#FF4D00] to-[#FFB300] rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h6 className="mb-2">Email Support</h6>
            <p className="b3 text-gray-600 mb-4">Send us a message</p>
            <a href="mailto:starttrips.in@gmail.com" className="b3 text-brand-primary hover:underline">
              starttrips.in@gmail.com
            </a>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-r from-[#FF4D00] to-[#FFB300] rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h6 className="mb-2">Phone Support</h6>
            <p className="b3 text-gray-600 mb-4">Speak with an agent</p>
            <a href="tel:+918886466626" className="b3 text-brand-primary hover:underline">
              +91 88864 66626
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Live Chat */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-[#FF4D00] to-[#FFB300] text-white p-4">
                <h6 className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Live Chat
                </h6>
              </div>

              <div className="h-96 overflow-y-auto p-4 space-y-4">
                {chatMessages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        msg.sender === "user"
                          ? "bg-gradient-to-r from-[#FF4D00] to-[#FFB300] text-white"
                          : "bg-gray-100 text-gray-800"
                      }`}
                    >
                      <p className="b3">{msg.text}</p>
                      <p
                        className={`b5 mt-1 ${
                          msg.sender === "user" ? "text-white/80" : "text-gray-500"
                        }`}
                      >
                        {msg.time}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSendMessage} className="p-4 border-t">
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    placeholder="Type your message..."
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                  />
                  <button
                    type="submit"
                    className="px-4 py-3 bg-gradient-to-r from-[#FF4D00] to-[#FFB300] text-white rounded-lg hover:shadow-lg transition-shadow"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Form & FAQs */}
          <div className="lg:col-span-2 space-y-8">
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h5 className="mb-6 flex items-center gap-2">
                <Mail className="w-6 h-6 text-brand-primary" />
                Send Us a Message
              </h5>

              <form onSubmit={handleContactSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block mb-2 text-brand-dark">Your Name</label>
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-brand-dark">Email</label>
                    <input
                      type="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                      placeholder="you@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block mb-2 text-brand-dark">Subject</label>
                  <input
                    type="text"
                    required
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    placeholder="How can we help?"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-brand-dark">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-primary focus:border-transparent"
                    placeholder="Tell us more about your question..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-[#FF4D00] to-[#FFB300] text-white rounded-lg b2 hover:shadow-xl transition-shadow"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* FAQs */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h5 className="mb-6 flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-brand-primary" />
                Frequently Asked Questions
              </h5>

              <div className="space-y-4">
                {faqs.map((faq) => (
                  <div key={faq.id} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                    >
                      <h6 className="text-brand-dark">{faq.question}</h6>
                      {expandedFaq === faq.id ? (
                        <ChevronUp className="w-5 h-5 text-brand-primary flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                      )}
                    </button>
                    {expandedFaq === faq.id && (
                      <div className="px-5 pb-5">
                        <p className="b3 text-gray-600">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Office Location */}
        <div className="mt-12 bg-white rounded-2xl shadow-lg p-8">
          <h5 className="mb-6 flex items-center gap-2">
            <MapPin className="w-6 h-6 text-brand-primary" />
            Visit Our Office
          </h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h6 className="mb-4">Start Trips Headquarters</h6>
              <p className="b2 text-gray-700 mb-4">
                Plot No-2, Sainagar Colony<br />
                Near GP Office Kummarikunta<br />
                Hayathnagar, Hyderabad - 501505<br />
                Telangana, India
              </p>
              <div className="space-y-2 b3 text-gray-600">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <a href="tel:+918886466626" className="hover:text-brand-primary">
                    +91 88864 66626
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:starttrips.in@gmail.com" className="hover:text-brand-primary">
                    starttrips.in@gmail.com
                  </a>
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
              <p className="b3 text-gray-500">Map would be displayed here</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}