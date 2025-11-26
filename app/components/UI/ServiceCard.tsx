import { motion } from "motion/react";

type ServiceCardProps = {
  title: string;
  description: string;
  className?: string;
};
export const ServiceCard = ({
  title,
  description,
  className,
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`p-6 bg-neutral-900 rounded-lg shadow-lg hover:scale-105 transition-transform hover:-rotate-5 duration-300 ${className} text-white`}
    >
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-200">{description}</p>
      <button className="mt-4 font-semibold hover:underline">Read more</button>
    </motion.div>
  );
};
