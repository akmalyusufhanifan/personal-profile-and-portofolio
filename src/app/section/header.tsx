"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { FaBars, FaTimes, FaArrowAltCircleUp } from "react-icons/fa";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b-2 border-gray-300 h-[60px]">
      <div className="flex justify-between items-center h-full px-6 text-black">
        {/* Logo website */}
        <nav>
          <Link
            href="#home"
            className="flex items-center hover:scale-95 transition md:ml-20"
          >
            <Image
              src="/website-icon.png"
              alt="Website icon"
              width={50}
              height={50}
            />
            <h3 className="pt-2">website</h3>
          </Link>
        </nav>

        {/* Tombol hamburger untuk mobile */}
        <button
          className="md:hidden text-xl text-black focus:outline-none cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FaTimes className="hover:scale-90 transition" />
          ) : (
            <FaBars className="hover:scale-90 transition" />
          )}
        </button>

        {/* Menu dropdown untuk HP */}
        {isOpen && (
          <nav className="absolute top-[60px] left-0 w-full bg-white border-t border-gray-200 flex flex-col items-center space-y-4 py-4 shadow-md md:hidden">
            <Link
              href="#about"
              className="hover:text-gray-400"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="#skills"
              className="hover:text-gray-400"
              onClick={() => setIsOpen(false)}
            >
              Skills
            </Link>
            <Link
              href="#portofolio"
              className="hover:text-gray-400"
              onClick={() => setIsOpen(false)}
            >
              Portofolio
            </Link>
            <Link
              href="#contact"
              className="hover:text-gray-400"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <a
              href="portofolio-akmal-yusuf-hanifan.pdf"
              download="Portofolio Akmal.pdf"
              className="text-blue-500 hover:text-blue-300 font-semibold"
            >
              Download
            </a>
          </nav>
        )}

        {/* Menu navigasi untuk desktop */}
        <nav className="hidden md:flex space-x-6 mr-20">
          <Link href="#about" className="hover:text-gray-300">
            About
          </Link>
          <Link href="#skills" className="hover:text-gray-300">
            Skills
          </Link>
          <Link href="#portofolio" className="hover:text-gray-300">
            Portofolio
          </Link>
          <Link href="#contact" className="hover:text-gray-300">
            Contact
          </Link>
          <a
            href="portofolio-akmal-yusuf-hanifan.pdf"
            download="Portofolio Akmal.pdf"
            className="text-blue-500 hover:text-blue-200 font-semibold"
          >
            Download
          </a>
        </nav>

        {/* Navigasi arrow home */}
        <Link href="#home" className="fixed bottom-10 right-10">
          <FaArrowAltCircleUp className="text-4xl text-blue-500 hover:text-blue-200" />
        </Link>
      </div>
    </header>
  );
}
