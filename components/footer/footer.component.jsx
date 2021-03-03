import Link from "next/link";
import { FaGithubSquare, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex justify-around h-20">
      <Link href="https://github.com/charan1973">
        <a target="_blank">
          <FaGithubSquare className="text-4xl" />
        </a>
      </Link>
      <Link href="https://www.linkedin.com/in/charan-vasu-4524aa164/">
        <a target="_blank">
          <FaLinkedin className="text-4xl" />
        </a>
      </Link>
      <Link href="https://www.instagram.com/charanvasuvickram/">
        <a target="_blank">
          <FaInstagram className="text-4xl" />
        </a>
      </Link>
    </div>
  );
};

export default Footer;
