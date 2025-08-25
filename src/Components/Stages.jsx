import { motion } from "framer-motion";
import { useState } from "react";
import collage1 from "../assets/collage1.jpg";
import collage2 from "../assets/collage2.webp";
import collage3 from "../assets/collage3.jpg";
import collage4 from "../assets/collage4.jpg";
import collage5 from "../assets/collage5.jpg";
import collage6 from "../assets/collage6.jpg";
import collage7 from "../assets/collage7.jpg";
import collage8 from "../assets/collage8.jpg";

export default function Stages() {
  const [hoveredStage, setHoveredStage] = useState(null);

  // Floating animation for collage images
  const floatAnimation = (delay) => ({
    y: [0, -15, 0],
    rotate: [0, Math.random() * 6 - 3, 0],
    transition: {
      duration: 4 + Math.random() * 2,
      repeat: Infinity,
      ease: "easeInOut",
      delay: delay * 0.3,
    },
  });

  // Bubble background animation
  const bubbleAnimation = {
    y: [0, -20, 0],
    scale: [1, 1.05, 1],
    opacity: [0.7, 1, 0.7],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  // Stage card animation
  const stageCardAnimation = {
    hidden: { opacity: 0, x: -100, rotateY: -15 },
    visible: { 
      opacity: 1, 
      x: 0, 
      rotateY: 0,
      transition: { 
        type: "spring", 
        damping: 15, 
        stiffness: 100,
        duration: 0.8
      } 
    }
  };

  // Reverse stage card animation
  const reverseStageCardAnimation = {
    hidden: { opacity: 0, x: 100, rotateY: 15 },
    visible: { 
      opacity: 1, 
      x: 0, 
      rotateY: 0,
      transition: { 
        type: "spring", 
        damping: 15, 
        stiffness: 100,
        duration: 0.8
      } 
    }
  };

  // Text animation
  const textAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="stages" className="relative py-20 overflow-hidden">
      {/* Animated Background with Bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={collage4}
          alt="Background"
          className="w-full h-full object-cover blur-lg opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/70 to-indigo-900/70"></div>
        
        {/* Animated floating bubbles */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-br from-pink-400/20 to-purple-400/20"
            style={{
              width: Math.random() * 120 + 30,
              height: Math.random() * 120 + 30,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={bubbleAnimation}
            transition={{
              duration: 5 + Math.random() * 5,
              delay: Math.random() * 2,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        {/* Heading */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
        >
          <motion.h2
            className="text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
            variants={textAnimation}
          >
            3 Magical Stages
          </motion.h2>
          <motion.div 
            className="text-4xl"
            variants={textAnimation}
          >
            ✨🎵🎤
          </motion.div>
        </motion.div>

        {/* Enhanced Collage Section with Larger Images */}
       <div className="mb-20">
  <motion.div
    className="relative w-full h-[50vh] min-h-[400px] max-h-[800px] overflow-hidden"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      hidden: {},
      visible: { transition: { staggerChildren: 0.15 } },
    }}
  >
    {[collage1, collage2, collage3, collage4, collage5, collage6, collage7, collage8].map(
      (img, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${[5, 20, 35, 55, 15, 5, 60, 75][i]}%`,
            top: `${[5, 15, 30, 25, 50, 65, 55, 20][i]}%`,
            width: 'clamp(120px, 15vw, 200px)',
            height: 'clamp(100px, 12vw, 160px)',
          }}
          variants={{
            hidden: { opacity: 0, scale: 0.8, y: 30 },
            visible: {
              opacity: 1,
              scale: 1,
              y: 0,
              transition: { 
                duration: 0.8, 
                type: "spring",
                bounce: 0.4
              },
            },
          }}
        >
          <motion.img
            src={img}
            alt={`Collage ${i + 1}`}
            className="w-full h-full object-cover rounded-xl shadow-2xl"
            animate={floatAnimation(i)}
            whileHover={{
              scale: 1.1,
              rotate: i % 2 === 0 ? -5 : 5,
              zIndex: 50,
              transition: { duration: 0.3 }
            }}
          />
        </motion.div>
      )
    )}
  </motion.div>
</div>

        {/* Stage Cards */}
        <div className="space-y-24 mb-20">
          {/* Stage A */}
          <motion.div
            className="flex flex-col md:flex-row items-center gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={stageCardAnimation}
            onHoverStart={() => setHoveredStage('a')}
            onHoverEnd={() => setHoveredStage(null)}
          >
            <motion.div 
              className="w-full md:w-1/2"
              animate={{
                y: hoveredStage === 'a' ? -10 : 0,
                transition: { duration: 0.4 }
              }}
            >
              <img
                src={collage1}
                alt="Stage A"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
            <motion.div 
              className="md:w-1/2 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.h3 
                className="text-3xl font-bold mb-6 text-pink-600"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Stage A 🎶
              </motion.h3>
              <motion.ul 
                className="text-white text-lg space-y-3 mb-6"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.1 } },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {['Musical Concert', 'Bollywood DJ', 'Techno Troop', 'Fire Show', 'LED Show', 'Bubble Show'].map((item, i) => (
                  <motion.li 
                    key={i}
                    variants={textAnimation}
                    className="flex items-center justify-center"
                  >
                    <span className="mr-2">✨</span> {item}
                  </motion.li>
                ))}
              </motion.ul>
              <motion.p 
                className="text-gray-200 italic"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Experience a magical evening filled with music, lights, and unforgettable performances.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Stage B */}
          <motion.div
            className="flex flex-col md:flex-row-reverse items-center gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={reverseStageCardAnimation}
            onHoverStart={() => setHoveredStage('b')}
            onHoverEnd={() => setHoveredStage(null)}
          >
            <motion.div 
              className="w-full md:w-1/2"
              animate={{
                y: hoveredStage === 'b' ? -10 : 0,
                transition: { duration: 0.4 }
              }}
            >
              <img
                src={collage4}
                alt="Stage B"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
            <motion.div 
              className="md:w-1/2 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.h3 
                className="text-3xl font-bold mb-6 text-sky-600"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Stage B 🎤
              </motion.h3>
              <motion.ul 
                className="text-white text-lg space-y-3 mb-6"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.1 } },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {['Karaoke', 'Live Band', 'DJ Nights', 'Rock Guitar Music'].map((item, i) => (
                  <motion.li 
                    key={i}
                    variants={textAnimation}
                    className="flex items-center justify-center"
                  >
                    <span className="mr-2">🎵</span> {item}
                  </motion.li>
                ))}
              </motion.ul>
              <motion.p 
                className="text-gray-200 italic"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                viewport={{ once: true }}
              >
                A stage packed with pure energy and rhythm, perfect for music lovers of all ages.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Stage C */}
          <motion.div
            className="flex flex-col md:flex-row items-center gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={stageCardAnimation}
            onHoverStart={() => setHoveredStage('c')}
            onHoverEnd={() => setHoveredStage(null)}
          >
            <motion.div 
              className="w-full md:w-1/2"
              animate={{
                y: hoveredStage === 'c' ? -10 : 0,
                transition: { duration: 0.4 }
              }}
            >
              <img
                src={collage2}
                alt="Stage C"
                className="w-full h-96 object-cover rounded-2xl shadow-xl"
              />
            </motion.div>
            <motion.div 
              className="md:w-1/2 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.h3 
                className="text-3xl font-bold mb-6 text-yellow-600"
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Stage C 🎯
              </motion.h3>
              <motion.ul 
                className="text-white text-lg space-y-3 mb-6"
                variants={{
                  hidden: {},
                  visible: { transition: { staggerChildren: 0.1 } },
                }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {['Fun Games', 'Kids Activities', 'Family Competitions', 'Interactive Entertainment'].map((item, i) => (
                  <motion.li 
                    key={i}
                    variants={textAnimation}
                    className="flex items-center justify-center"
                  >
                    <span className="mr-2">🎮</span> {item}
                  </motion.li>
                ))}
              </motion.ul>
              <motion.p 
                className="text-gray-200 italic"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                viewport={{ once: true }}
              >
                Endless laughter and joy for both kids and adults with exciting games and challenges.
              </motion.p>
            </motion.div>
          </motion.div>
        </div>

        {/* Enthusiasm Text */}
        <motion.div
          className="text-center max-w-3xl mx-auto p-8 rounded-3xl bg-gradient-to-r from-purple-900/30 to-pink-900/30 backdrop-blur-sm"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.6 }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          <motion.p 
            className="text-xl md:text-2xl font-semibold text-white leading-relaxed"
            variants={textAnimation}
          >
            Hyderabad, are you ready? <br />
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
              viewport={{ once: true }}
              className="text-pink-400 font-bold"
            >
              From electrifying concerts to breathtaking shows and fun-filled games,
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 font-bold text-2xl md:text-3xl"
            >
              Bubble Fest 2025
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              viewport={{ once: true }}
            >
              will be the ultimate celebration at Emperium. Two days of madness,
              laughter, music, food & endless memories. Don't just hear about it —
              be there and live it! 
            </motion.span>
          </motion.p>
          <motion.div 
            className="mt-6 text-4xl"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1, type: "spring" }}
            viewport={{ once: true }}
          >
            🎉✨🎪
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}