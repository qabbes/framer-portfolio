import Image from "next/image";

const Card = ({
  type,
  logoUrl,
  position,
  duration,
  description,
  company,
  institution,
  qualification,
  name,
  icon,
  link,
}) => {
  return (
    <div className=" w-full h-[300px] sm:h-[350px] overflow-hidden flex items-center sticky top-12">
      <div className="w-full h-[270px] sm:h-[320px] border border-accent/80 bg-[#f4ffff] rounded-[8px]">
        <div className="flex flex-col h-full">
          <div
            className="h-[80px] xl:h-[68px] bg-white flex flex-col xl:flex-row justify-center 
          xl:justify-between items-center px-6 md:px-[84px] 
          rounded-tl-[8px] rounded-tr-[8px]">
            <div className="flex items-center gap-2  ">
              <Image src="/assets/journey/shape.svg" width={16} height={16} alt="" />
              <h3 className="text-lg sm:text-lg/5 font-semibold text-primary text-center sm:pt-[8px]">
                {type === "experience" ? position : type === "education" ? qualification : duration}
              </h3>
            </div>
            <p className="text-base sm:text-sm/tight sm:pt-[5px]">
              {type !== "experience" && type !== "education" ? null : duration}
            </p>
          </div>
          <div className="flex-1 flex items-center justify-center xl:justify-start md:py-8 md:px-16">
            {/*Render skills icons*/}
            <div className=" flex flex-col xl:flex-row items-center xl:items-center gap-4 text-center xl:text-left base:text-center  xl:gap-10 sm:gap-2 px-4 xl:px-0 ">
              {type === "skill" ? (
                <div
                  className={`${
                    link !== undefined && type === "skill"
                      ? " text-6xl text-primary/150"
                      : " text-5xl text-primary/150" //relative w-[210px] h-[130px] xl:h-[140px]
                  } `}>
                  {icon}
                </div>
              ) : (
                //Render company/institution logo
                <div
                  className={`${
                    company === "French Minsitry of Interior - Capgemini" ||
                    company === "French Departement of Social Services - Capgemini"
                      ? " relative w-[180px] h-[80px] xl:h-[120px] "
                      : " relative w-[210px] h-[38px] xl:h-[44px]" //relative w-[210px] h-[130px] xl:h-[140px]
                  } `}>
                  <Image
                    src={logoUrl}
                    fill={
                      company !== "Biomérieux - Capgemini" &&
                      institution !== "OpenClassrooms - Capgemini"
                        ? "relative"
                        : undefined
                    }
                    className={`${
                      company === "Biomérieux - Capgemini"
                        ? " absolute xl:left-[62px] xl:bottom-[-12px] sm:left-[80px] sm:bottom-[-12px]"
                        : institution === "OpenClassrooms - Capgemini"
                        ? "absolute top-[-25px] sm:top-[-38px] h-content-full "
                        : "object-contain"
                    } `}
                    width={
                      company === "Biomérieux - Capgemini"
                        ? 60
                        : institution === "OpenClassrooms - Capgemini"
                        ? 200
                        : undefined
                    }
                    height={
                      company === "Biomérieux - Capgemini"
                        ? 60
                        : institution === "OpenClassrooms - Capgemini"
                        ? 200
                        : undefined
                    }
                    alt=""
                  />
                </div>
              )}
              <div className="xl:border-l xl:border-secondary/10 xl:pl-12 w-full">
                <h3 className="hidden xl:flex h3 mb-2 xl:mb-4 ">
                  {type === "experience"
                    ? company
                    : type === "education"
                    ? institution
                    : type === "skill"
                    ? name
                    : null}
                </h3>
                <p
                  className={`text-base max-w-[660px] ${
                    description?.length > 160 ? "sm:pb-[10px]" : ""
                  } ${type === "education" ? "sm:text-sm" : ""} ${
                    company === "French Minsitry of Interior - Capgemini"
                      ? " xl:mt-0 sm:-mt-[9px]"
                      : company === "Biomérieux - Capgemini"
                      ? "sm:pt-[5px] sm:-mb-[10px]"
                      : ""
                  }`}>
                  {description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
