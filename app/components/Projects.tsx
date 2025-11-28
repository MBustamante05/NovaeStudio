import { ServiceBtn } from "./UI/ServiceBtn";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A stunning visual created using AI-powered design tools.",
      imageUrl: "/camara1.jpeg",
    },
    {
      id: 2,
      title: "Project Two",
      description:
        "An innovative design showcasing the capabilities of our platform.",
      imageUrl: "/camara1.jpeg",
    },
    {
      id: 3,
      title: "Project Three",
      description:
        "A creative project that highlights user imagination and AI synergy.",
      imageUrl: "/camara1.jpeg",
    },
  ];
  return (
    <div className="bg-black py-10 min-h-screen h-full">
      <h1 className="text-center text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500 mb-15">Projects</h1>
      <section className="text-white max-w-7xl mx-auto text-center space-y-6 ">
        <div className="grid grid-cols-2 text-left mb-16 px-10 items-start">
          <div className="col-span-1">
            <h2 className="text-3xl font-semibold mb-8 text-indigo-500">
              Behind the Scenes
            </h2>
            <p className="font-bold text-4xl mb-5">
              Explore some of the stunning visuals created using our AI-powered
              design tools.
            </p>
          </div>
          <div className="col-span-1">
            <p className="text-xl font-semibold mb-8">
              Dive into our project gallery to see how users are transforming
              their ideas into high-quality visuals with ease. From concept to
              creation, witness the power of AI in design.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-gray-400 pt-4 border-t border-gray-700 text-sm">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </span>
              <ServiceBtn text="View Gallery" className="ms-5 mt-2" center={false} />
            </div>
          </div>
        </div>
        {/* Placeholder for project items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-neutral-800 rounded-2xl h-[700px] overflow-hidden"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="h-full object-cover opacity-50 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
