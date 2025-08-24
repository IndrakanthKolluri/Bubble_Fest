import collage1 from "../assets/collage1.jpg";
import collage2 from "../assets/collage2.webp";
import collage3 from "../assets/collage3.jpg";
import collage4 from "../assets/collage4.jpg";
import collage5 from "../assets/collage5.jpg";
import collage6 from "../assets/collage6.jpg";
import collage7 from "../assets/collage7.jpg";
import collage8 from "../assets/collage8.jpg";

export default function Stages() {
  return (
    <section id="stages" className="relative py-20">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={collage4}
          alt="Background"
          className="w-full h-full object-cover blur-lg opacity-30"
        />
        <div className="absolute inset-0 bg-black/40"></div> {/* darker overlay for better contrast */}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-pink-500 mb-12">
          3 Magical Stages ✨
        </h2>

        {/* Collage Section */}
        <div className="mb-16">
  {/* Overlapping fun layout for all screens */}
  <div className="relative w-full h-[400px] sm:h-[600px] overflow-hidden">
    <img
      src={collage1}
      alt="Collage 1"
      className="absolute top-0 left-[2%] w-28 h-20 sm:w-72 sm:h-52 object-cover rounded-xl shadow-xl transform rotate-[-8deg]"
    />
    <img
      src={collage2}
      alt="Collage 2"
      className="absolute top-10 left-[15%] w-32 h-24 sm:w-80 sm:h-56 object-cover rounded-xl shadow-xl transform rotate-[6deg]"
    />
    <img
      src={collage3}
      alt="Collage 3"
      className="absolute top-24 left-[30%] w-28 h-20 sm:w-72 sm:h-52 object-cover rounded-xl shadow-xl transform rotate-[-4deg]"
    />
    <img
      src={collage4}
      alt="Collage 4"
      className="absolute top-28 left-[50%] w-24 h-20 sm:w-64 sm:h-48 object-cover rounded-xl shadow-xl transform rotate-[10deg]"
    />
    <img
      src={collage5}
      alt="Collage 5"
      className="absolute top-44 left-[20%] w-28 h-20 sm:w-72 sm:h-52 object-cover rounded-xl shadow-xl transform rotate-[-5deg]"
    />
    <img
      src={collage6}
      alt="Collage 6"
      className="absolute top-60 left-[8%] w-24 h-20 sm:w-64 sm:h-48 object-cover rounded-xl shadow-xl transform rotate-[8deg]"
    />
    <img
      src={collage7}
      alt="Collage 7"
      className="absolute top-56 left-[55%] w-28 h-20 sm:w-72 sm:h-52 object-cover rounded-xl shadow-xl transform rotate-[-6deg]"
    />
    <img
      src={collage8}
      alt="Collage 8"
      className="absolute top-16 left-[70%] w-28 h-20 sm:w-72 sm:h-52 object-cover rounded-xl shadow-xl transform rotate-[5deg]"
    />
  </div>
</div>


        {/* Stage Cards */}
        <div className="space-y-16 mb-20">
          {/* Stage A */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src={collage1}
              alt="Stage A"
              className="w-full md:w-1/2 h-96 object-cover rounded-2xl shadow-lg"
            />
            <div className="md:w-1/2 text-center">
              <h3 className="text-2xl font-bold mb-4 text-pink-600">
                Stage A 🎶
              </h3>
              <ul className="list-disc list-inside text-white text-lg font-bold rubik-bubbles-regular space-y-3">
                <li>Musical Concert</li>
                <li>Bollywood DJ</li>
                {/* <li>Band by Sundown</li> */}
                <li>Techno Troop</li>
                <li>Fire Show</li>
                {/* <li>Carnival Artists</li> */}
                <li>LED Show</li>
                <li>Bubble Show</li>
              </ul>
              <p className="mt-4 text-gray-200">
                Experience a magical evening filled with music, lights, and unforgettable performances.
              </p>
            </div>
          </div>

          {/* Stage B */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-8">
            <img
              src={collage4}
              alt="Stage B"
              className="w-full md:w-1/2 h-96 object-cover rounded-2xl shadow-lg"
            />
            <div className="md:w-1/2 text-center">
              <h3 className="text-2xl font-bold mb-4 text-sky-600">
                Stage B 🎤
              </h3>
              <ul className="list-disc list-inside text-white text-lg font-bold rubik-bubbles-regular space-y-3">
                <li>Karaoke</li>
                <li>Live Band</li>
                <li>DJ Nights</li>
                <li>Rock Guitar Music</li>
              </ul>
              <p className="mt-4 text-gray-200">
                A stage packed with pure energy and rhythm, perfect for music lovers of all ages.
              </p>
            </div>
          </div>

          {/* Stage C */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            <img
              src={collage2}
              alt="Stage C"
              className="w-full md:w-1/2 h-96 object-cover rounded-2xl shadow-lg"
            />
            <div className="md:w-1/2 text-center">
              <h3 className="text-2xl font-bold mb-4 text-yellow-600">
                Stage C 🎯
              </h3>
              <ul className="list-disc list-inside text-white text-lg font-bold rubik-bubbles-regular space-y-3">
                <li>Fun Games</li>
                <li>Kids Activities</li>
                <li>Family Competitions</li>
                <li>Interactive Entertainment</li>
              </ul>
              <p className="mt-4 text-gray-200">
                Endless laughter and joy for both kids and adults with exciting games and challenges.
              </p>
            </div>
          </div>
        </div>

        

        {/* Enthusiasm Text */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl font-semibold text-gray-200 leading-relaxed">
            Hyderabad, are you ready?  
            <br />
            From electrifying concerts to breathtaking shows and fun-filled games,
            <span className="text-pink-500 font-bold"> Bubble Fest 2025 </span>
            will be the ultimate celebration at Emperium.
            Two days of madness, laughter, music, food & endless memories.
            Don’t just hear about it — be there and live it! 🎉✨
          </p>
        </div>
      </div>
    </section>
  );
}
