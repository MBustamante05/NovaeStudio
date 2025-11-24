export const Navbar = () => {
  return (
    <nav className="fixed flex items-center justify-between px-10 py-3 text-white text-center backdrop-blur-md rounded-full mb-10 w-[40%] mx-auto inset-shadow-sm inset-shadow-indigo-900/70 shadow-lg shadow-indigo-900/10 top-10 left-0 right-0">
      <h1 className="text-lg font-bold">My Website</h1>
      <ul className="flex items-center">
        <li className="inline-block mx-4 hover:underline cursor-pointer">Home</li>
        <li className="inline-block mx-4 hover:underline cursor-pointer">About</li>
        <li className="inline-block mx-4 hover:underline cursor-pointer">Services</li>
        <li className="inline-block mx-4 hover:underline cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
}