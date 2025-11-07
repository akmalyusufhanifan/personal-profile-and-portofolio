import MainWrapper from "../components/main-wrapper";
import Link from "next/link";
import { MdWeb } from "react-icons/md";
import { MdPhoneIphone } from "react-icons/md";
import { MdOutlineComputer } from "react-icons/md";
import { IoMdColorPalette } from "react-icons/io";
import SkillClassName from "../components/skill-class-name";
import SkillBarLevel from "../components/skill-bar-level";
import ServiceClassName from "../components/service-class-name";

export default function SkillsAndServices() {
  return (
    <MainWrapper>
      {/* Skills & technologies */}
      <div className="flex flex-col text-black border border-gray-300 rounded-xl w-[320px] h-[400px] shadow-lg mb-8 md:rounded-2xl md:w-[400px] md:h-[500px]">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mt-3 mb-3 md:text-3xl md:mt-5 md:mb-5">
            Skills & Technologies
          </h2>
        </div>
        <div className="flex flex-col items-start ml-5 mr-5">
          {/* Skill 1 */}
          <div className="mb-2 md:mb-4">
            <SkillClassName>Frontend</SkillClassName>
            <h3 className="text-sm mb-2">React | Typescript | Tailwind</h3>
            <SkillBarLevel>
              <div className="bg-blue-500 w-[90%] rounded-full h-1 md:h-2"></div>
            </SkillBarLevel>
          </div>

          {/* SKill 2 */}
          <div className="mb-2 md:mb-4">
            <SkillClassName>Backend</SkillClassName>
            <h3 className="text-sm mb-2">Node.js | Phyton | MongoDB</h3>
            <SkillBarLevel>
              <div className="bg-blue-500 w-[80%] rounded-full h-1 md:h-2"></div>
            </SkillBarLevel>
          </div>

          {/* Skill 3 */}
          <div className="mb-2 md:mb-4">
            <SkillClassName>Tools & DevOps</SkillClassName>
            <h3 className="text-sm mb-2">Git | Docker | Figma</h3>
            <SkillBarLevel>
              <div className="bg-blue-500 w-[85%] rounded-full h-1 md:h-2"></div>
            </SkillBarLevel>
          </div>

          {/* Skill 4 */}
          <div>
            <SkillClassName>Mobile</SkillClassName>
            <h3 className="text-sm mb-2">IOS | Android | PWA</h3>
            <SkillBarLevel>
              <div className="bg-blue-500 w-[70%] rounded-full h-1 md:h-2"></div>
            </SkillBarLevel>
          </div>
        </div>
      </div>

      {/* Garis tengah */}
      <div className="w-[350px] h-0.5 bg-gray-300 md:w-0.5 md:h-[450px] md:bg-gray-300"></div>

      {/* Services */}
      <div className="flex flex-col w-[320px] h-[400px] md:w-[400px] md:h-[500px]">
        <div className="text-center mb-5 md:mb-7">
          <h2 className="text-black text-2xl font-semibold mt-5 mb-2 md:text-3xl md:mt-5 md:mb-3">
            Services
          </h2>
          <h2 className="text-gray-500 text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut illum
            odit iure accusamus distinctio, quam quibusdam at quod enim nemo
            quia laboriosam esse velit corrupti.
          </h2>
        </div>

        <div className="grid grid-cols-2 grid-rows-2 gap-x-4 gap-y-4 text-black mb-6 md:gap-y-8 md:mb-8">
          {/* Service 1 */}
          <div className="flex flex-col items-center bg-gray-200 px-4 py-2 rounded-2xl shadow-md md:items-start md:shadow-lg">
            <ServiceClassName>
              <MdWeb className="text-blue-500" />
              <h2 className="font-semibold">Web Design</h2>
            </ServiceClassName>
            <h3 className="text-md text-center md:text-start">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </h3>
          </div>

          {/* Service 2 */}
          <div className="flex flex-col items-center bg-gray-200 px-4 py-2 rounded-2xl shadow-md md:items-start md:shadow-lg">
            <ServiceClassName>
              <MdPhoneIphone className="text-blue-500" />
              <h2 className="font-semibold">App Design</h2>
            </ServiceClassName>
            <h3 className="text-md text-center md:text-start">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </h3>
          </div>

          {/* Service 3 */}
          <div className="flex flex-col items-center bg-gray-200 px-4 py-2 rounded-2xl shadow-md md:items-start md:shadow-lg">
            <ServiceClassName>
              <MdOutlineComputer className="text-blue-500" />
              <h2 className="font-semibold">UI/UX</h2>
            </ServiceClassName>
            <h3 className="text-md text-center md:text-start">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </h3>
          </div>

          {/* Service 4 */}
          <div className="flex flex-col items-center bg-gray-200 px-4 py-2 rounded-2xl shadow-md md:items-start md:shadow-lg">
            <ServiceClassName>
              <IoMdColorPalette className="text-blue-500" />
              <h2 className="font-semibold">Design</h2>
            </ServiceClassName>
            <h3 className="text-md text-center md:text-start">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </h3>
          </div>
        </div>

        {/* Button work together */}
        <div className="flex justify-center">
          <Link
            href="#contact"
            className="text-black font-semibold text-md border-b-2 border-dashed hover:text-gray-300 cursor-pointer"
          >
            Let`s Work Together
          </Link>
        </div>
      </div>
    </MainWrapper>
  );
}
