import image1 from "../assets/bubblefest1.jpg";
import image2 from "../assets/bubblefest2.jpg";
import image3 from "../assets/bubblefest3.jpg";
import image4 from "../assets/bubblefest4.jpg";
import image5 from "../assets/bubblefest5.jpg";
import image6 from "../assets/bubblefest6.jpg";
import image7 from "../assets/bubblefest7.jpg";
import image8 from "../assets/bubblefest8.webp";

export default function AutoScrollCarousel() {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
  ];

  return (
    <div className="relative w-full overflow-hidden py-6">
      {/* Background (blurred) */}
      <div
        className="absolute inset-0 bg-center bg-cover blur-lg brightness-50"
        style={{ backgroundImage: `url(${image1})` }} // 👈 you can change which image is used
      ></div>

      {/* Foreground Content */}
      <div className="relative z-10 flex w-max animate-scroll gap-6">
        {[...images, ...images].map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Slide ${i + 1}`}
            className="w-48 h-32 sm:w-64 sm:h-40 md:w-80 md:h-52 lg:w-96 lg:h-60 object-cover rounded-xl shadow-lg"
          />
        ))}
      </div>
    </div>
  );
}
