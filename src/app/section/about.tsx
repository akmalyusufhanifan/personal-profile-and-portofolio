import MainWrapper from "../components/main-wrapper";
import Image from "next/image";

export default function About() {
  return (
    <MainWrapper>
      {/* Foto profil */}
      <div className="w-[180px] h-60 mb-7 md:w-[330px] md:h-[440px]">
        <Image
          src="/presentation-photo.jpg"
          alt="Akmal doing some presentation"
          width={180}
          height={240}
          className="rounded-3xl object-cover shadow-xl ring-4 ring-gray-100 w-full h-full"
        />
      </div>

      {/* Teks about me */}
      <div className="flex flex-col text-center md:text-start">
        <h2 className="text-black text-2xl font-semibold mb-3 md:text-3xl md:mb-4">
          Get to Know Me
        </h2>
        <div className="text-gray-500 text-md max-w-[350px] space-y-3 md:text-lg md:max-w-[600px] md:space-y-4">
          <p>
            I`m a Web Developer with over three years of experience in the tech
            industry. I specialize in building responsive and dynamic websites
            that combine functionality with clean design.
          </p>
          <p>
            I`m passionate about writing efficient, high-quality code and
            creating great user experiences. My focus is always on performance,
            usability, and detail.
          </p>
          <p>
            Beyond coding, I love learning new technologies and improving my
            craft. I strive to grow as a developer who not only builds websites
            but also understands real business needs.
          </p>
        </div>
      </div>
    </MainWrapper>
  );
}
