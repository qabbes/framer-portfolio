"use client";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { Link as ScrollLink } from "react-scroll";

const Hero = () => {
  return (
    <section className="h-[800px] relative bg-accent/10 xl:bg-white">
      {/* Header */}
      <div>header</div>
      <div className="container mx-auto h-full">
        <div
          className="relative z-20 h-full w-full xl:max-w-[768px] flex flex-col items-center
           xl:items-start justify-center text-center xl:text-left pt-10">
          <h1 className="h1 mb-2 max-w-[320px] xl:max-w-none">
            <span className="text-accent">I Build And</span> Design Powerful
            <TypeAnimation
              preRenderFirstString={true}
              sequence={["Websites", 2000, "Apps", 2000]}
              speed={50}
              repeat={Infinity}
              wrapper="span"
              cursor={false}
              className="ml-2 xl:ml-4"
            />
          </h1>
          <p className="lead max-w-[476px] mb-7">
            Delivering powerful, custom websites that blends aesthetics with performance
          </p>
          <ScrollLink to="contact" smooth>
            <button className="btn btn-accent mb-8">Get In Touch</button>
          </ScrollLink>
          {/* Stats  */}
          <div>stats</div>
        </div>
        {/* Image */}
        <div className="hidden xl:flex w-[55vw] h-[800px] absolute top-0 right-0 bg-accent">
          <div className="absolute w-[550px] h-[642px] bottom-[-12px] left-[-9px] z-40">
            {/*"absolute w-[558px] h-[642px] bottom-0 left-[6.5vw] z-40"*/}
            <Image
              src="/assets/hero/thinking.png"
              fill
              quality="100"
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
