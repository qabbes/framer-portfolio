import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import CustomAlert from "../CustomAlert";
import { FiArrowRight } from "react-icons/fi";
import { Badge } from "../ui/badge";
import { IoLogoGithub } from "react-icons/io";

const WorkItem = ({ href, repo, category, img, title }) => {
  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const handleClick = (e) => {
    if (title.includes("ETF")) {
      e.preventDefault();
      setIsAlertOpen(true);
    }
  };

  return (
    <>
      <Link href={href} onClick={handleClick} className="group" target="blank">
        <div
          className="w-full h-[300px] p-8 rounded-[30px] flex items-center 
    justify-center mb-6 relative overflow-hidden bg-[#f4f4f4] shadow-custom">
          <Badge className="bg-primary text-base z-40 absolute top-6 left-6 capitalize">
            {category}
          </Badge>
          <Image
            src={img}
            fill
            priority
            quality={100}
            className={`object-cover  group-hover:scale-105 transition-all duration-500 ${
              title === "ETF Dashboard" ? "object-fill" : ""
            } `}
            alt={title}
          />
        </div>
        <div className="flex items-center justify-center">
          <div className="flex-1">
            <h3 className="h3">{title}</h3>
            <div className="flex flex-row gap-4 mt-4">
              <button
                className="bg-accent text-white rounded-full w-[48px] h-[48px]
              flex items-center justify-center -rotate-45 hover:rotate-0 transition-all duration-500">
                <FiArrowRight className="text-3xl" />
              </button>
              <button
                id={repo}
                className="bg-slate-800 text-white rounded-full w-[48px] h-[48px]
                flex items-center justify-center"
                onClick={(e) => {
                  e.stopPropagation(); //Stop Bubbling
                  window.open(repo, "_blank");
                }}>
                <IoLogoGithub id={repo} className="text-3xl hover:scale-125 duration-500" />
              </button>
            </div>
          </div>
        </div>
      </Link>
      <CustomAlert isAlertOpen={isAlertOpen} setIsAlertOpen={setIsAlertOpen} title={title} />
    </>
  );
};

export default WorkItem;
