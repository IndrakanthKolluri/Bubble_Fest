import { motion } from "framer-motion";
import collage7 from "../assets/collage7.jpg";
import image1 from "../assets/image01.JPG";
import image2 from "../assets/image02.JPG";
import image3 from "../assets/image03.JPG";
import image4 from "../assets/image04.JPG";
import image5 from "../assets/image05.JPG";
import image6 from "../assets/image06.JPG";
import image7 from "../assets/image07.JPG";
import image8 from "../assets/image08.JPG";

export default function AutoScrollCarousel() {
  const tomaterraImages = [image1, image3, image5, image7];
  const missWorldImages = [image2, image4, image6, image8];

  return (
    <div className="relative w-full h-full overflow-hidden pb-20">
      {/* Blurred Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${collage7})`,
          filter: "blur(8px) brightness(0.6)",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full space-y-20">
        {/* Static Main Heading */}
        <div className="w-full flex flex-col items-center space-y-6 pt-12">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rubik-glitch-regular text-center text-4xl sm:text-5xl md:text-7xl font-extrabold text-indigo-400"
          >
            Our Past Events
          </motion.h1>

          {/* Separator Line */}
          <div className="w-32 h-1 bg-white rounded-full"></div>
        </div>

        {/* Tomaterra Section */}
        <section className="w-full space-y-12">
          {/* Scrolling Heading with Glass Background */}
          <div className="w-full overflow-hidden">
            <div className="w-full bg-white/20 backdrop-blur-md border border-white/30 shadow-lg py-4">
              <div className="flex w-max animate-scroll gap-12 items-center">
                {Array(8).fill("Tomaterra").map((text, i) => (
                  <div key={i} className="flex items-center gap-6 px-4">
                    <h2 className="alfa-slab-one-regular text-2xl sm:text-3xl md:text-4xl text-white whitespace-nowrap">
                      {text}
                    </h2>
                    <span className="text-white text-2xl">★</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scrolling Images */}
          <div className="w-full overflow-hidden">
            <div className="flex w-max animate-scroll gap-8">
              {[...tomaterraImages, ...tomaterraImages].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Tomaterra ${i + 1}`}
                  loading="lazy"
                  className="w-72 h-48 sm:w-96 sm:h-64 md:w-[32rem] md:h-[20rem] object-cover rounded-2xl shadow-2xl  transition-transform duration-500"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Miss World Section */}
        <section className="w-full space-y-12">
          {/* Scrolling Heading with Glass Background */}
          <div className="w-full overflow-hidden">
            <div className="w-full bg-white/20 backdrop-blur-md border border-white/30 shadow-lg py-4">
              <div className="flex w-max animate-scroll-reverse gap-12 items-center">
                {Array(8).fill("Miss World Visit Show").map((text, i) => (
                  <div key={i} className="flex items-center gap-6 px-4">
                    <h2 className="alfa-slab-one-regular text-2xl sm:text-3xl md:text-4xl text-white whitespace-nowrap">
                      {text}
                    </h2>
                    <span className="text-white text-2xl">★</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scrolling Images */}
          <div className="w-full overflow-hidden">
            <div className="flex w-max animate-scroll-reverse gap-8">
              {[...missWorldImages, ...missWorldImages].map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Miss World ${i + 1}`}
                  loading="lazy"
                  className="w-72 h-48 sm:w-96 sm:h-64 md:w-[32rem] md:h-[20rem] object-cover rounded-2xl shadow-2xl  transition-transform duration-500"
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
