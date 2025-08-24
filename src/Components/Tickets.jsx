import tickets from "../assets/tickets.png";

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

          {/* Example Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-md">
            <div className="p-6 rounded-2xl shadow-lg bg-blue-600 text-white">
              <h3 className="text-xl font-semibold">Day-1</h3>
              <p className="mt-2">1000/-</p>
            </div>
            <div className="p-6 rounded-2xl shadow-lg bg-blue-700 text-white">
              <h3 className="text-xl font-semibold">Day-2</h3>
              <p className="mt-2">1000/-</p>
            </div>
             <div className="p-6 rounded-2xl shadow-lg bg-blue-700 text-white">
              <h3 className="text-xl font-semibold">Day 1&2</h3>
              <p className="mt-2">1500/-</p>
            </div>
          </div>

          {/* Button */}
          <button className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl shadow-lg transition">
            Book Now
          </button>
        </div>
      </div>
    </section>
  );
}
