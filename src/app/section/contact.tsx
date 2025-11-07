import { MdMail, MdLocalPhone } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import MainWrapper from "../components/main-wrapper";

export default function Contact() {
  return (
    <MainWrapper>
      {/* Contact and sosmed */}
      <div className="text-black flex flex-col mb-8">
        {/* Mobile tilte */}
        <h2 className="text-2xl font-semibold mb-4 text-center md:hidden">
          Contact & Social Media
        </h2>
        {/* Desktop title */}
        <h2 className="text-3xl font-semibold mb-8 hidden md:flex">
          Contact &
          <br />
          Social Media
        </h2>
        <div>
          <div className="flex items-center mb-6 md:mb-15">
            <MdMail className="text-5xl mr-3 text-blue-500 md:text-6xl md:mr-5" />
            <div>
              <h3 className="text-sm text-gray-500 md:text-lg">Email</h3>
              <h3 className="text-md md:text-xl">
                akmalyusufhanifan@gmail.com
              </h3>
            </div>
          </div>

          <div className="flex items-center mb-6 md:mb-15">
            <MdLocalPhone className="text-5xl mr-3 text-blue-500 md:text-6xl md:mr-5" />
            <div>
              <h3 className="text-sm text-gray-500 md:text-lg">Phone</h3>
              <h3 className="text-md md:text-xl">+62 8123 4567 123</h3>
            </div>
          </div>

          <div className="flex items-center">
            <FaInstagram className="text-5xl mr-3 text-blue-500 md:text-6xl md:mr-5" />
            <div>
              <h3 className="text-sm text-gray-500 md:text-lg">Instagram</h3>
              <h3 className="text-md md:text-xl">@akmalyusufhanifan</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Garis tengah */}
      <div className="w-[350px] h-0.5 bg-gray-300 md:w-0.5 md:h-[450px] md:bg-gray-300 mb-8"></div>

      {/* Form discuss */}
      <div className="text-black flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-4 md:text-3xl md:mb-8">
          Lets discuss your project
        </h2>
        <form className="flex flex-col gap-y-6 w-[300px] md:w-[400px]">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-black h-10 pl-2"
          ></input>
          <input
            type="email"
            placeholder="Email"
            className="border border-black h-10 pl-2"
          ></input>
          <textarea
            placeholder="Message"
            className="border border-black h-40 pl-2 pt-2"
          ></textarea>
          <button className="bg-blue-500 text-white w-[130px] py-2 hover:bg-blue-200 cursor-pointer">
            Send Message
          </button>
        </form>
      </div>
    </MainWrapper>
  );
}
