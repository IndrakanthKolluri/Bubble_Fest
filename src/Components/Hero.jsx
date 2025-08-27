import bubble from "../assets/bubble.png";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/bubblelogo.png";

export default function Hero() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/booking");
  };

  return (
    <section className="relative h-[100vh] flex items-center overflow-hidden px-6 md:px-10">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          className="w-full h-full object-cover pointer-events-none"
          src="https://res.cloudinary.com/dwxumbyfg/video/upload/v1756202366/The_Most_UnBUBBLievable_Show_In_The_World___Gazillion_Bubble_Show_jqsyiu.mp4"
          autoPlay
          muted
          loop
          playsInline
          style={{ filter: "brightness(0.7) contrast(1.2)" }} // ↓ Added this line
        />
      </div>

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
      <div className="relative z-30 max-w-full text-white text-center mx-auto">
        <div className="p-6 md:p-8 text-center flex flex-col items-center justify-center">
          <img src={Logo} alt="Logo" className="w-64 h-64 mt-4" />
          <p className="mt-4 chango-regular text-2xl md:text-3xl font-semibold drop-shadow-md">
            Sep 20 & 21 • 10AM - 10:30PM <br /> Experium, Hyderabad
          </p>
          <p
            onClick={handleClick}
            className="mt-6 inline-block bg-gradient-to-r from-pink-400 to-sky-400 px-6 py-3 rounded-full text-lg md:text-xl font-bold shadow-lg hover:scale-105 transition cursor-pointer"
          >
            Book Now 🎟️
          </p>
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
