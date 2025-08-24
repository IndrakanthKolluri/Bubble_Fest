export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md text-white py-4 z-50">
      <div className="container mx-auto flex justify-between items-center px-6">
        <h1 className="text-2xl font-extrabold text-white"> Bubble Fest</h1>
        <ul className="flex gap-6">
          <li><a href="#stages" className="hover:text-pink-300">Stages</a></li>
          <li><a href="#highlights" className="hover:text-pink-300">Highlights</a></li>
          <li><a href="#tickets" className="hover:text-pink-300">Tickets</a></li>
          <li><a href="#footer" className="hover:text-pink-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
