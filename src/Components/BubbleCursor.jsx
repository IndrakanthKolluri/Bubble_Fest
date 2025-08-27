import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import bubbleImg from "../assets/bubble.png"; // make sure path is correct

export default function BubbleCursor() {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const handleMove = (e) => {
      const id = Date.now() + Math.random();
      const size = Math.floor(Math.random() * 50) + 30; // 30px - 80px

      setBubbles((prev) => [
        ...prev,
        { id, x: e.clientX, y: e.clientY, size },
      ]);

      // Remove bubble after 1.5 sec
      setTimeout(() => {
        setBubbles((prev) => prev.filter((b) => b.id !== id));
      }, 1500);
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {bubbles.map((b) => (
        <motion.img
          key={b.id}
          src={bubbleImg}
          initial={{ opacity: 0.7, scale: 0.6 }}
          animate={{ opacity: 0, scale: 1.4, y: -60 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute"
          style={{
            left: b.x,
            top: b.y,
            width: b.size,
            height: b.size,
            pointerEvents: "none",
          }}
        />
      ))}
    </div>
  );
}
