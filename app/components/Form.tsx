import { ArrowRight, Mail, Phone } from "lucide-react";

export const Form = () => {
  const inputStyles =
    "w-full px-3 py-2 rounded-md bg-neutral-200 text-white border-2 border-neutral-200 focus:outline-none focus:ring-2 focus:ring-indigo-500";
  const labelStyles = "block text-sm text-neutral-500 font-medium mb-1";
  return (
    <div className="bg-black py-16 text-white relative">
      <h1 className="text-center text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500">
        Contact Us
      </h1>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 z-20 grid grid-cols-2 gap-24">
        <div className="col-span-1">
          <span className="text-gray-300 uppercase ">
            We&apos;re here to help you
          </span>
          <h1 className="text-white text-6xl font-medium">
            <span className="font-semibold text-indigo-500">Discuss </span>
            Your <br /> Chemical <br /> Solution Needs
          </h1>
          <p className="mt-10 text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            libero sint nobis delectus doloribus tempore consequuntur.
          </p>
          <div className="flex items-center gap-4 mt-20">
            <Mail className="w-9 h-9 text-blue-500" />
            <div className="flex flex-col">
              <span className="text-gray-300 text-sm">E-mail</span>
              <span className="text-lg">j6I3o@example.com</span>
            </div>
          </div>
          <div className="flex items-center gap-4 mt-4">
            <Phone className="w-9 h-9 text-blue-500" />
            <div className="flex flex-col">
              <span className="text-gray-300 text-sm">Phone Number</span>
              <span className="text-lg">+1 (123) 456-7890</span>
            </div>
          </div>
        </div>
        <div className="col-span-1 h-full">
          {/* Form component content goes here */}
          <div className="bg-neutral-900 p-8 rounded-3xl shadow-lg shadow-indigo-500/10">
            <form className="space-y-4 h-full">
              <div>
                <label className={labelStyles} htmlFor="name">
                  Name
                </label>
                <input className={inputStyles} type="text" id="name" />
              </div>
              <div>
                <label className={labelStyles} htmlFor="email">
                  Email
                </label>
                <input className={inputStyles} type="email" id="email" />
              </div>
              <div>
                <label className={labelStyles} htmlFor="message">
                  Message
                </label>
                <textarea
                  className={inputStyles}
                  id="message"
                  rows={4}
                ></textarea>
              </div>
              <button className="flex items-center gap-3 hover:gap-5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-2 rounded-full transition-all cursor-pointer mt-4 shadow-lg shadow-indigo-700/20">
                <span className="ps-3">Submit</span>
                <ArrowRight className="rounded-full bg-white p-1 text-indigo-500 w-7 h-7 me-3" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
