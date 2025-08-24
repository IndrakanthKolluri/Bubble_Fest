import tickets from "../assets/tickets.png";
import tickets1 from "../assets/tickets1.png";

export default function PassSection() {
  return (
    <section className="relative w-full py-28 flex items-center justify-center">
      {/* Blurred Background */}
      <div className="absolute inset-0 h-[120%]">
        <img
          src={tickets}
          alt="Background"
          className="w-full h-full object-cover blur-lg opacity-40"
        />
      </div>

      {/* Overlay to darken slightly */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-11/12 max-w-7xl mx-auto">
        {/* Left Image (normal, clear) */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img
            src={tickets}
            alt="Booking Tickets"
            className="w-[28rem] drop-shadow-2xl"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-1/2 flex flex-col items-center text-center space-y-6">
          <h2 className="text-4xl font-bold text-white">Choose Your Pass</h2>

          {/* Ticket Styled Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-md">
            {[
              { title: "Day-1", price: "1000/-" },
              { title: "Day-2", price: "1000/-" },
              { title: "Day 1&2", price: "1500/-" },
            ].map((pass, idx) => (
              <div
                key={idx}
                className="relative w-full h-40 flex items-center justify-center"
              >
                {/* Ticket Background */}
                <img
                  src={tickets1}
                  alt="Ticket"
                  className="absolute inset-0 w-full h-full object-cover rounded-xl shadow-lg"
                />

                {/* Text Overlay */}
                <div className="relative z-10 text-white text-center">
                  <h3 className="text-xl font-bold drop-shadow-md">{pass.title}</h3>
                  <p className="mt-2 text-lg font-semibold drop-shadow-md">{pass.price}</p>
                </div>

                {/* Dark overlay for better readability */}
                <div className="absolute inset-0 bg-black/40 rounded-xl"></div>
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
