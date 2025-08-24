import tickets from "../assets/tickets.png"; // 👈 use any image from assets

export default function PassSection() {
  const passes = [
    { title: "Day-1", price: "1000/-", color: "from-pink-500 to-rose-400" },
    { title: "Day-2", price: "1000/-", color: "from-sky-500 to-blue-400" },
    { title: "Day 1&2", price: "1500/-", color: "from-purple-500 to-indigo-400" },
  ];

  return (
    <section className="relative w-full py-28 flex items-center justify-center bg-black overflow-hidden">
      {/* Blurred Background */}
      <div className="absolute inset-0">
        <img
          src={tickets}
          alt="Background"
          className="w-full h-full object-cover blur-2xl opacity-30"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-11/12 max-w-7xl mx-auto">
        {/* Left Illustration */}
        <div className="w-full md:w-1/2 flex justify-center mb-10 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center md:text-left">
            Choose Your Pass 🎟️
          </h2>
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center space-y-8">
          {/* Ticket Styled Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-lg">
            {passes.map((pass, idx) => (
              <div
                key={idx}
                className={`relative bg-gradient-to-r ${pass.color} text-white rounded-2xl shadow-xl flex flex-col items-center justify-center p-6 h-28 transform transition hover:scale-105`}
              >
                {/* Decorative Notches */}
                <span className="absolute top-1/2 left-0 -translate-y-1/2 w-6 h-6 bg-black rounded-full"></span>
                <span className="absolute top-1/2 right-0 -translate-y-1/2 w-6 h-6 bg-black rounded-full"></span>

                {/* Content */}
                <h3 className="text-xl kaushan-script-regular font-bold">{pass.title}</h3>
                <p className="mt-2 text-lg kaushan-script-regular font-semibold">{pass.price}</p>
              </div>
            ))}
          </div>

          {/* Button */}
          <button className="px-6 py-3 bg-gradient-to-r from-pink-400 to-sky-400 hover:opacity-90 text-white font-semibold rounded-xl shadow-lg transition">
            Book Now 🎟️
          </button>
        </div>
      </div>
    </section>
  );
}
