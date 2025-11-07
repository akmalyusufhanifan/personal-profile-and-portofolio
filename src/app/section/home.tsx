import Link from "next/link";
import Image from "next/image";
import MainWrapper from "../components/main-wrapper";

export default function Home() {
  return (
    <MainWrapper className="md:flex-row-reverse">
      {/* Foto profil */}
      <div className="w-[210px] h-[280px] mb-10 md:w-[330px] md:h-[440px]">
        <Image
          src="/photo-profile.jpeg"
          alt="Akmal photo profile"
          width={210}
          height={280}
          className="rounded-3xl object-cover shadow-xl ring-4 ring-gray-100 w-full h-full"
        />
      </div>

      {/* Teks dan button */}

      <div className="flex flex-col items-center md:items-start">
        <h1 className="text-center text-3xl font-semibold mb-2 text-black tracking-wide md:text-start md:text-6xl md:mb-4">
          Building the Future,
          <br />
          Code by Code
        </h1>
        <h2 className="text-lg text-gray-500 mb md:text-2xl">
          I'm <span className="text-black font-semibold">Akmal</span>, a Full
          Stack Developer
        </h2>
        <h3 className="text-md text-center max-w-[400px] text-gray-500 mb-4 md:text-start md:text-lg md:mb-8">
          Bridging creativity and technology to build digital experience that
          stand out
        </h3>
        <Link
          href="#contact"
          className="text-md text-white tracking-wide bg-blue-500 hover:bg-blue-200 px-3 py-2 rounded-lg w-fit cursor-pointer md:text-lg md:px-4"
        >
          Hire Me
        </Link>
      </div>
    </MainWrapper>
  );
}
