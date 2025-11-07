import Link from "next/link";
import { FaInstagram, FaGithub } from "react-icons/fa";
import { MdMail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="bottom-0 left-0 w-full bg-white border-t-2 border-gray-300 h-[60px]">
      <div className="text-black flex justify-between items-center h-full">
        {/* Mobile */}
        <h2 className="ml-7 text-sm md:hidden">
          ©️2025
          <br />
          All Rights Reserved
        </h2>
        {/* Desktop */}
        <h2 className="ml-7 hidden md:flex">©️2025. All Rights Reserved</h2>
        <h2 className="hidden md:flex md:gap-1">
          Designed by <span className="font-semibold">Akmal Yusuf Hanifan</span>
        </h2>

        {/* Sosial media mobile */}
        <div className="flex justify-between space-x-5 mr-7 md:hidden">
          <Link
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://mail.google.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdMail />
          </Link>
        </div>

        {/* Sosial media desktop */}
        <div className="space-x-5 mr-7 hidden md:flex">
          <Link
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            Instagram
          </Link>
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            Github
          </Link>
          <Link
            href="https://mail.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300"
          >
            Email
          </Link>
        </div>
      </div>
    </footer>
  );
}
