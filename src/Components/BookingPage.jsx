import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react"; // icon for back arrow
import eventImg from "../assets/collage5.jpg";
import bgImg from "../assets/hero_bg4.jpg";

const passOptions = [
  { value: "day1", label: "Day 1", adult: 1000, child: 700 },
  { value: "day2", label: "Day 2", adult: 1000, child: 700 },
  { value: "both", label: "Day 1 & 2", adult: 1500, child: 1000 },
];

export default function BookingPage() {
  const [selectedPass, setSelectedPass] = useState(passOptions[0]);
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [step, setStep] = useState(1); // 1 = selection, 2 = form
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  // Load saved ticket data on mount
  useEffect(() => {
    const savedData = localStorage.getItem("bookingData");
    if (savedData) {
      const parsed = JSON.parse(savedData);
      const foundPass = passOptions.find((p) => p.value === parsed.selectedPass);
      if (foundPass) {
        setSelectedPass(foundPass);
        setAdults(parsed.adults);
        setChildren(parsed.children);
      }
    }
  }, []);

  // Save to localStorage whenever selection changes
  useEffect(() => {
    localStorage.setItem(
      "bookingData",
      JSON.stringify({
        selectedPass: selectedPass.value,
        adults,
        children,
      })
    );
  }, [selectedPass, adults, children]);

  const calculateTotal = () =>
    adults * selectedPass.adult + children * selectedPass.child;

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePay = () => {
    // Redirect to Razorpay (demo)
    window.location.href = "https://razorpay.com";
  };

  return (
    <div
      className="min-h-screen flex flex-col md:flex-row items-center justify-center p-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Left Side - Image */}
      <div className="md:w-1/2 w-full flex justify-center mb-8 md:mb-0">
        <img
          src={eventImg}
          alt="Event"
          className="rounded-2xl shadow-lg w-full max-w-md object-cover"
        />
      </div>

      {/* Right Side - Booking Form */}
      <div className="md:w-1/2 w-full bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-xl p-10 md:ml-10 border border-gray-700">
        {step === 1 ? (
          <>
            <h2 className="text-2xl font-medium text-white mb-8 text-center tracking-wide">
              Book Your Pass
            </h2>

            {/* Pass Selection */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {passOptions.map((option) => (
                <button
                  key={option.value}
                  className={`rounded-xl p-5 transition border text-center ${
                    selectedPass.value === option.value
                      ? "border-indigo-400 bg-indigo-900/40 text-indigo-200 shadow-md"
                      : "border-gray-700 bg-gray-800/60 text-gray-300 hover:border-indigo-400 hover:text-white"
                  }`}
                  onClick={() => setSelectedPass(option)}
                >
                  <p className="text-lg font-semibold tracking-wide">
                    {option.label}
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    Adult ₹{option.adult}
                  </p>
                  <p className="text-sm text-gray-400">
                    Child ₹{option.child}
                  </p>
                </button>
              ))}
            </div>

            {/* Divider */}
            <hr className="my-6 border-gray-700" />

            {/* Quantity Selectors */}
            <div className="flex flex-col sm:flex-row gap-6 justify-between">
              <div className="flex flex-col items-center w-full">
                <span className="text-gray-300 mb-2">Adults</span>
                <div className="flex items-center gap-2">
                  <button
                    className="bg-gray-700 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-indigo-600"
                    onClick={() => setAdults(Math.max(0, adults - 1))}
                  >
                    -
                  </button>
                  <span className="text-lg text-white px-3">{adults}</span>
                  <button
                    className="bg-gray-700 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-indigo-600"
                    onClick={() => setAdults(adults + 1)}
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="flex flex-col items-center w-full">
                <span className="text-gray-300 mb-2">Children</span>
                <div className="flex items-center gap-2">
                  <button
                    className="bg-gray-700 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-indigo-600"
                    onClick={() => setChildren(Math.max(0, children - 1))}
                  >
                    -
                  </button>
                  <span className="text-lg text-white px-3">{children}</span>
                  <button
                    className="bg-gray-700 text-white rounded-full w-8 h-8 flex items-center justify-center hover:bg-indigo-600"
                    onClick={() => setChildren(children + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Divider */}
            <hr className="my-6 border-gray-700" />

            {/* Total & Book Button */}
            <div className="flex flex-col gap-4 items-center">
              <span className="text-lg text-gray-300">
                Total:{" "}
                <span className="font-semibold text-white">
                  ₹{calculateTotal()}
                </span>
              </span>
              <button
                className="bg-indigo-600 text-white text-base px-8 py-3 rounded-xl shadow-md hover:bg-indigo-500 transition"
                onClick={() => setStep(2)}
              >
                Book Now
              </button>
            </div>
          </>
        ) : (
          <>
            {/* Back Arrow + Heading */}
            <div className="flex items-center mb-8">
              <button
                onClick={() => setStep(1)}
                className="text-gray-300 hover:text-white mr-3"
              >
                <ArrowLeft size={24} />
              </button>
              <h2 className="text-2xl font-medium text-white tracking-wide">
                Enter Your Details
              </h2>
            </div>

            <form className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleFormChange}
                className="p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-indigo-400 outline-none"
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleFormChange}
                className="p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-indigo-400 outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleFormChange}
                className="p-3 rounded-lg bg-gray-800 text-white border border-gray-600 focus:border-indigo-400 outline-none"
              />
              <button
                type="button"
                onClick={handlePay}
                className="mt-4 bg-green-600 text-white text-base px-8 py-3 rounded-xl shadow-md hover:bg-green-500 transition"
              >
                Pay Now
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
