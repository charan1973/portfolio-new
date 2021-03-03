import Link from "next/link";
import { useRouter } from "next/router";

const NavbarButton = ({ children, href, className, ...otherProps }) => {
  const router = useRouter();

  return (
    <Link href={href}>
      <a
        className={`hover:bg-gray-900 p-3 hover:text-white dark:hover:bg-white dark:hover:text-black ${
          router.pathname === href && "bg-gray-900 text-white dark:bg-white dark:text-black"
        } ${className}`}
      >
        <span>{children}</span>
      </a>
    </Link>
  );
};

export default NavbarButton;
