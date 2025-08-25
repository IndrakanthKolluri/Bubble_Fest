import { motion } from "framer-motion";
import tickets from "../assets/tickets.png";

export default function PassSection() {
  const passes = [
    { 
      title: "Day-1", 
      price: "1000/-", 
      color: "from-pink-500 to-rose-400",
      bgColor: "bg-gradient-to-r from-pink-600/20 to-rose-500/20",
      perks: ["Main Stage Access", "Food Court Voucher", "Free Merch"]
    },
    { 
      title: "Day-2", 
      price: "1000/-", 
      color: "from-sky-500 to-blue-400",
      bgColor: "bg-gradient-to-r from-sky-600/20 to-blue-500/20",
      perks: ["All Stages Access", "2 Food Vouchers", "Priority Seating"]
    },
    { 
      title: "Day 1&2", 
      price: "1500/-", 
      color: "from-purple-500 to-indigo-400",
      bgColor: "bg-gradient-to-r from-purple-600/20 to-indigo-500/20",
      perks: ["VIP Access", "5 Food Vouchers", "Exclusive Merch", "Meet & Greet"]
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const ticketVariants = {
    hidden: { rotate: -5, scale: 0.9, opacity: 0 },
    visible: {
      rotate: 0,
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
    hover: {
      y: -10,
      rotate: 0,
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const buttonVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.5
      }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0px 0px 20px rgba(255, 105, 180, 0.8)",
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section className="relative w-full py-28 flex items-center justify-center bg-black overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <img
          src={tickets}
          alt="Background"
          className="w-full h-full object-cover blur-2xl opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/40 to-indigo-900/40"></div>
        
        {/* Animated floating elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, Math.random() * 20 - 10, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          >
            🎟️
          </motion.div>
        ))}
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-11/12 max-w-7xl mx-auto">
        {/* Left Content */}
        <motion.div 
          className="w-full md:w-2/5 flex justify-center mb-10 md:mb-0"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="text-center md:text-left">
            <motion.h2 
              className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
              viewport={{ once: true }}
            >
              Get Your Pass
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-200 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              viewport={{ once: true }}
            >
              Choose your festival experience and join the bubble madness!
            </motion.p>
            <motion.div 
              className="text-4xl"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              🎟️✨
            </motion.div>
          </div>
        </motion.div>

        {/* Right Content - Tickets */}
        <motion.div 
          className="w-full md:w-3/5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full"
            variants={containerVariants}
          >
            {passes.map((pass, idx) => (
              <motion.div
                key={idx}
                variants={ticketVariants}
                whileHover="hover"
                className="relative"
              >
                {/* Ticket main body */}
                <div className={`relative rounded-2xl overflow-hidden ${pass.bgColor} backdrop-blur-md border border-white/20 h-full`}>
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent"></div>
                  
                  {/* Ticket content */}
                  <div className="relative z-10 p-6 flex flex-col items-center h-full">
                    {/* Perforated edges */}
                    <div className="absolute top-4 left-0 w-full flex justify-between px-4">
                      {[...Array(6)].map((_, i) => (
                        <div key={i} className="w-2 h-2 bg-black rounded-full"></div>
                      ))}
                    </div>
                    
                    {/* Ticket title */}
                    <h3 className={`text-2xl font-bold bg-gradient-to-r ${pass.color} bg-clip-text text-transparent mb-4`}>
                      {pass.title}
                    </h3>
                    
                    {/* Price */}
                    <div className="text-3xl font-bold text-white mb-6">
                      {pass.price}
                    </div>
                    
                    {/* Perks list */}
                    <ul className="text-white text-sm mb-6 flex-1">
                      {pass.perks.map((perk, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-center mb-2"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * i }}
                          viewport={{ once: true }}
                        >
                          <span className="mr-2">✅</span> {perk}
                        </motion.li>
                      ))}
                    </ul>
                    
                    {/* Decorative divider */}
                    <div className="w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent my-4"></div>
                    
                    {/* CTA button */}
                    <motion.button 
                      className={`w-full py-2 bg-gradient-to-r ${pass.color} text-white font-semibold rounded-lg mt-auto`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Select Pass
                    </motion.button>
                  </div>
                </div>
                
                {/* Ticket stub effect */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-4/5 h-2 bg-gray-800 rounded-b-lg"></div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Main CTA Button */}
          <motion.div 
            className="flex justify-center mt-12"
            variants={itemVariants}
          >
            <motion.button 
              className="px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white font-bold rounded-xl shadow-2xl text-lg relative overflow-hidden"
              variants={buttonVariants}
              whileHover="hover"
            >
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shine"></div>
              
              Book All Passes Now 🎟️
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Custom animation style */}
      <style jsx>{`
        @keyframes shine {
          to {
            transform: translateX(100%);
          }
        }
        .animate-shine {
          animation: shine 2s infinite;
        }
      `}</style>
    </section>
  );
}