import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import collage7 from "../assets/collage7.jpg"; // ✅ Import background

export default function Stages() {
  const textAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const stages = [
    {
      id: "a",
      title: "Stage A 🎶",
      color: "from-pink-400 via-pink-500 to-red-500",
      video:
        "https://res.cloudinary.com/dwxumbyfg/video/upload/f_auto,q_auto/v1756202757/Gazillion_Bubble_Show_jptvgb.mp4",
      poster:
        "https://res.cloudinary.com/dwxumbyfg/video/upload/w_600,q_auto,f_auto/v1756202757/Gazillion_Bubble_Show_jptvgb.jpg",
      items: ["Musical Concert", "Bollywood DJ", "Techno Troop", "Fire Show", "LED Show", "Bubble Show"],
      description: "Experience a magical evening filled with music, lights, and unforgettable performances.",
      reverse: false,
    },
    {
      id: "b",
      title: "Stage B 🎤",
      color: "from-sky-400 via-blue-500 to-indigo-500",
      video:
        "https://res.cloudinary.com/dwxumbyfg/video/upload/f_auto,q_auto/v1756209631/Dont_forget_to_watch_the_full_aftermovie_bubble_fest_greece_2019_on_our_fb_page-bubble_fest_and_kvtjl8.mp4",
      poster:
        "https://res.cloudinary.com/dwxumbyfg/video/upload/w_600,q_auto,f_auto/v1756209631/Dont_forget_to_watch_the_full_aftermovie_bubble_fest_greece_2019_on_our_fb_page-bubble_fest_and_kvtjl8.jpg",
      items: ["Karaoke", "Live Band", "DJ Nights", "Rock Guitar Music"],
      description: "A stage packed with pure energy and rhythm, perfect for music lovers of all ages.",
      reverse: true,
    },
    {
      id: "c",
      title: "Stage C 🎯",
      color: "from-yellow-400 via-orange-500 to-red-500",
      video:
        "https://res.cloudinary.com/dwxumbyfg/video/upload/f_auto,q_auto/v1756192366/Gazillion_Bubble_Show_-_Coming_to_Mayo_Performing_Arts_Center_Morristown_NJ_Feb_2024_j3tnos.mp4",
      poster:
        "https://res.cloudinary.com/dwxumbyfg/video/upload/w_600,q_auto,f_auto/v1756192366/Gazillion_Bubble_Show_-_Coming_to_Mayo_Performing_Arts_Center_Morristown_NJ_Feb_2024_j3tnos.mp4",
      items: ["Fun Games", "Kids Activities", "Family Competitions", "Interactive Entertainment"],
      description: "Endless laughter and joy for both kids and adults with exciting games and challenges.",
      reverse: false,
    },
  ];

  const StageCard = ({ stage, preload }) => {
    const videoRef = useRef(null);

    // Lazy load video when visible
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && videoRef.current) {
              videoRef.current.load();
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.25 }
      );

      if (videoRef.current) observer.observe(videoRef.current);
      return () => observer.disconnect();
    }, []);

    return (
      <div
        className={`relative w-full min-h-[90vh] flex flex-col md:flex-row ${
          stage.reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Video Section */}
        <div className="w-full md:w-2/3 relative h-[40vh] md:h-auto">
          <video
            ref={videoRef}
            poster={stage.poster}
            autoPlay
            loop
            muted
            playsInline
            preload={preload ? "auto" : "metadata"}
            className="absolute inset-0 w-full h-full object-cover shadow-lg"
          >
            <source src={stage.video} type="video/mp4" />
          </video>
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/3 flex items-center justify-center relative p-6 md:p-10">
          {/* Glassmorphic Bubble Background */}
          <div className="absolute inset-0 rounded-2xl md:rounded-none backdrop-blur-lg overflow-hidden">
            <div className="absolute w-32 h-32 bg-white/20 rounded-full top-10 left-6 blur-xl animate-pulse"></div>
            <div className="absolute w-24 h-24 bg-white/10 rounded-full bottom-10 right-10 blur-lg animate-bounce"></div>
            <div className="absolute w-16 h-16 bg-white/20 rounded-full top-1/2 left-1/2 blur-xl animate-ping"></div>
          </div>

          {/* Content */}
          <div className="relative z-10 text-center">
            <motion.h3
              className={`text-3xl md:text-4xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r ${stage.color}`}
              variants={textAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {stage.title}
            </motion.h3>

            <motion.ul
              className="text-white text-base sm:text-lg space-y-2 mb-6"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {stage.items.map((item, i) => (
                <motion.li key={i} variants={textAnimation} className="flex items-center justify-center">
                  <span className="mr-2">✨</span> {item}
                </motion.li>
              ))}
            </motion.ul>

            <motion.p
              className="text-gray-200 italic text-sm sm:text-base"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {stage.description}
            </motion.p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section id="stages" className="relative overflow-hidden">
      {/* Background Image with Blur */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${collage7})`,
          filter: "blur(8px) brightness(0.6)",
        }}
      ></div>
      <div className="absolute inset-0 bg-black/40"></div> {/* Dark overlay */}

      <div className="relative z-10">
        {/* Heading */}
        <motion.div
          className="text-center py-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.2 } } }}
        >
          <motion.h2
            className="text-4xl sm:text-5xl font-bold mb-4 pb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
            variants={textAnimation}
          >
            3 Magical Stages
          </motion.h2>
          <motion.div className="text-3xl sm:text-4xl" variants={textAnimation}>
            ✨🎵🎤
          </motion.div>
        </motion.div>

        {/* Stage Cards */}
        <div className="space-y-0">
          {stages.map((stage, i) => (
            <StageCard key={stage.id} stage={stage} preload={i === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
