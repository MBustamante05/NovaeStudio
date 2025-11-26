'use client';
import { motion } from "framer-motion";
import { ServiceCard } from "./UI/ServiceCard";
import { ServiceBtn } from "./UI/ServiceBtn";

export const Services = () => {
  const services = [
    { title: "Web Development", description: "Building responsive and modern websites.", className: "hover:bg-indigo-500 " },
    { title: "Mobile Apps", description: "Creating user-friendly mobile applications.", className: "hover:bg-purple-500 " },
    { title: "UI/UX Design", description: "Designing intuitive user interfaces.", className: "hover:bg-pink-500 " },
    { title: "Digital Marketing", description: "Promoting your brand effectively online.", className: "hover:bg-red-500 " },
  ];

  return (
    <div className="bg-black py-16 h-screen text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 z-20">
        <h2 className="text-5xl font-extrabold mb-24 text-center text-transparent bg-clip-text bg-gradient-to-b from-indigo-400 via-purple-400 to-pink-400">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div 
          initial={{ opacity: 0, x: -200, rotate: 20 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.4 }}
          className="col-span-1 pe-20  z-20">
            <h2 className="text-3xl font-semibold mb-4">What We Offer in Design</h2>
            <p className="text-gray-300">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque libero sint nobis delectus doloribus tempore consequuntur, corporis, laudantium, id nihil magnam ducimus alias molestias aliquam molestiae odit quaerat voluptatem saepe.</p>
            <ServiceBtn text="Get Started" className="mt-5" center={false} />
          </motion.div>
          <motion.div 
          initial={{ opacity: 0, x: 200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.4 }}
          className="col-span-1 grid grid-cols-2 gap-6  z-20">
            {services.map((service, index) => (
              <ServiceCard key={index} title={service.title} description={service.description}  className={service.className}/>
            ))}
          </motion.div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-80 rounded-full blur-3xl opacity-50 pointer-events-none bg-gradient-to-r from-indigo-500 via-purple-500 to-red-500 z-10"
      />
    </div>
  );
}