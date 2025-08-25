import bubble from "../assets/bubble.png";

export default function Hero() {
  return (
    <section className="relative h-[100vh] flex items-center overflow-hidden px-6 md:px-10">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          className="w-full h-full object-cover pointer-events-none"
          src="https://res.cloudinary.com/dwxumbyfg/video/upload/v1756105634/Bubblefest_2025_is_Now_Open_d8hx2c.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
      </div>

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 pointer-events-none z-20 bg-black/40" />

      {/* Floating Bubbles */}
      {[...Array(15)].map((_, i) => (
        <img
          key={i}
          src={bubble}
          alt=""
          className="bubble-img absolute bottom-0 pointer-events-none z-10"
          style={{
            left: `${Math.random() * 100}%`,
            width: `${50 + Math.random() * 80}px`,
            animationDuration: `${5 + Math.random() * 6}s`,
            animationDelay: `${Math.random() * 4}s`,
          }}
        />
      ))}

      {/* Text Content */}
      <div className="relative z-30 max-w-xl text-white ml-auto">
        <div className="p-6 md:p-8 text-center flex flex-col items-center justify-center">
          <h1 className="text-5xl md:text-7xl chango-regular drop-shadow-lg">
            Bubble Fest
          </h1>

          <p className="mt-4 text-xl md:text-2xl font-semibold drop-shadow-md">
            Sep 20 & 21 • 10AM - 10:30PM <br /> Emperium, Hyderabad
          </p>

          <p className="mt-4 text-base md:text-lg text-gray-100 leading-relaxed drop-shadow-md">
            Join us for two magical days filled with music, dance, fun activities,
            and thousands of bubbles lighting up the sky. An experience like never
            before awaits you!
          </p>

          <a
            href="https://in.bookmyshow.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-gradient-to-r from-pink-400 to-sky-400 px-6 py-3 rounded-full text-lg md:text-xl font-bold shadow-lg hover:scale-105 transition"
          >
            Book Now 🎟️
          </a>
        </div>
      </div>

      {/* Bubble Animation */}
      <style>{`
        @keyframes bubble {
          0% { transform: translateY(0) scale(1); opacity: 0.7; }
          50% { opacity: 1; }
          100% { transform: translateY(-100vh) scale(1.2); opacity: 0; }
        }
        .bubble-img {
          animation: bubble linear infinite;
        }
      `}</style>
    </section>
  );
}
