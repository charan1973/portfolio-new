import Link from "next/link";
import { FaGithubSquare, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="flex justify-around h-20">
        <Link href="https://github.com/charan1973">
          <a target="_blank" title="charan1973">
            <FaGithubSquare className="text-4xl" />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/charan-vasu-4524aa164/">
          <a target="_blank" title="charan-vasu-4524aa164">
            <FaLinkedin className="text-4xl" />
          </a>
        </Link>
        <Link href="https://twitter.com/charan1973taken">
          <a target="_blank" title="@charan1973taken">
            <FaTwitter className="text-4xl" />
          </a>
        </Link>
      </div>
    </>
  );
};

export default Footer;
