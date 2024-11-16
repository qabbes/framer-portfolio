import Image from "next/image";
import { motion } from "framer-motion";
/* Components */
import AnimatedText from "./AnimatedText";

const About = () => {
  return (
    <section className="relative pt-12 pb-24" id="about">
      <div className="container mx-auto h-full">
        <div className="h-full flex items-center justify-center">
          {/* Images + Shapes */}
          <div className="hidden xl:flex flex-1 pl-8">
            <div className="relative max-w-[388px]">
              {/* Shape */}
              <div
                className="w-[160px] h-[160px] bg-accent absolute -left-5 -top-5 
              -z-10"></div>
              {/* Image */}
              <div className="rounded-tl-[8px] rounded-tr-[120px] bg-[#e5f8f6] min-h-[450px] flex items-end justify-center">
                <Image
                  className="rounded-xl"
                  src="/assets/about/thinking-v2.png"
                  width={350}
                  height={478}
                  quality={100}
                  priority
                  alt="About"
                />
              </div>
              {/* Rotating Shape */}
              <div className="absolute top-2/4 -right-[65px] flex items-center justify-center">
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: [0.59, -0.46, 0.48, 1.26], //linear TODO
                  }}>
                  <Image src="/assets/about/shape-1.svg" width={150} height={150} alt="" />
                </motion.div>
                <div className="absolute text-center text-white">
                  <div className="text-5xl font-bold leading-none text-secondary">5+</div>
                  <div className="leading-none text-center">
                    Years of <br />
                    Experience
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Text */}
          <div
            className="text-center xl:text-left w-full xl:w-[50%] mx-auto xl:mx-0 
          flex flex-col gap-6 ">
            <div>
              <AnimatedText text="My Name is Quentin" textStyles="h2 mb-2" />
              <p className="text-lg">Full Stack Developer</p>
            </div>
            <p className="max-w-[680px] mx-auto xl:mx-0 mb-4 ">
              I create functionnal and robust websites using modern frontend technologies and design
              principles. Explore my work to see how I combine creativity with technologies to
              deliver simple yet effective digital experiences.
            </p>
            {/* Info items */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
