import Image from "next/image";

const services = [
  {
    title: "Web Development",
    description: "I build custom websites that are robust, scalable and for all devices.",
    icon: "/assets/services/web-development.svg",
  },
  {
    title: "Applications Development",
    description:
      "I develop full-stack applications with a cloud-first approach, blending performance and scalability.",
    icon: "/assets/services/icon-3.svg",
  },
  {
    title: " API Integration and Development",
    description:
      "Enabling connectivity and automation through custom API development and integration.",
    icon: "/assets/services/icon-2.svg",
  },
];

const Services = () => {
  return (
    <section className="relative z-40">
      <div className="container mx-auto">
        <ul
          className="relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[20px] 
        -top-12 place-items-center lg:place-items-stretch">
          {services.map((service, index) => (
            <li
              key={index}
              className="bg-white shadow-custom p-6 max-w-[350px] md:max-w-none rounded-lg">
              <Image
                src={service.icon}
                alt={service.title}
                width={48}
                height={48}
                className="mb-4"
              />
              <div>
                <h3 className="text-[20px] text-primary font-semibold mb-3">
                  {service.title}
                </h3>
                <p className="text-[15px]">{service.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
