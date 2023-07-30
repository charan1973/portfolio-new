import Link from "next/link";
import { FaGithubSquare, FaLinkedin, FaTwitter, FaMastodon } from "react-icons/fa";
import { bio } from "../../data/home.data";

const Footer = () => {
  const { socialLinks } = bio;
  return (
    <>
      <div className="flex justify-around h-20 ">
      {
        socialLinks && socialLinks.github && (
          <Link href={bio.socialLinks.github}>
            <a target="_blank">
              <FaGithubSquare className="text-4xl" />
            </a>
          </Link>
        )
      }
      {
        socialLinks && socialLinks.linkedin && (
          <Link href={bio.socialLinks.linkedin}>
            <a target="_blank">
              <FaLinkedin className="text-4xl" />
            </a>
          </Link>
        )
      }
      {
        socialLinks && socialLinks.twitter && (
          <Link href={bio.socialLinks.twitter}>
            <a target="_blank">
              <FaTwitter className="text-4xl" />
            </a>
          </Link>
        )
      }
      {
        socialLinks && socialLinks.mastodon && (
          <Link href={bio.socialLinks.mastodon}>
            <a target="_blank">
              <FaMastodon className="text-4xl" />
            </a>
          </Link>
        )
      }
      </div>
    </>
  );
};

export default Footer;
