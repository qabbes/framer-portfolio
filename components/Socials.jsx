import Link from "next/link";
import { FaFacebookF, FaLinkedin, FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { IoLogoGithub } from "react-icons/io";

const socials = [
  {
    icon: <RiInstagramFill />,
    path: "https://www.instagram.com/quentinabbes/",
  },
  {
    icon: <IoLogoGithub />,
    path: "https://https://github.com/qabbes",
  },
  {
    icon: <FaTwitter />,
    path: "https://twitter.com/HashDeuzo",
  },
  {
    icon: <FaLinkedin />,
    path: "https://www.linkedin.com/in/quentin-abbes-09bab194/",
  },
];
const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            <span>{item.icon}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
