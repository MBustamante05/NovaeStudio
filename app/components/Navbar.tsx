export const Navbar = () => {
  return (
    <nav className="fixed flex items-center justify-between px-10 py-3 bg-black/70 text-white text-center backdrop-blur-md rounded-full mb-10 w-[40%] mx-auto inset-shadow-sm inset-shadow-neutral-700/70 shadow-lg shadow-neutral-700/10 top-10 left-0 right-0 z-50">
      <h1 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-b from-indigo-400 via-purple-400 to-red-400">My Website</h1>
      <ul className="flex items-center">
        <li className="inline-block mx-4 hover:underline cursor-pointer">Home</li>
        <li className="inline-block mx-4 hover:underline cursor-pointer">About</li>
        <li className="inline-block mx-4 hover:underline cursor-pointer">Services</li>
        <li className="inline-block mx-4 hover:underline cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
}