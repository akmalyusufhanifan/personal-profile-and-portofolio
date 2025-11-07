import Image from "next/image";

export default function Portofolio() {
  return (
    <main className="min-h-[calc(100vh-60px)] mt-[60px] flex flex-col justify-center items-center md:items-start md:px-40 w-full">
      {/* Title page */}
      <h2 className="text-center text-4xl text-black font-semibold mb-10 md:text-start md:text-5xl md:tracking-wide">
        <span className="text-xl font-normal md:text-3xl md:font-semibold">
          Lets have a look at
        </span>
        <br />
        My Portofolio
      </h2>

      {/* Portofolio content mobile 1 */}
      <div className="carousel rounded-box w-80 shadow-xl md:hidden mb-10">
        <div className="carousel-item w-full">
          <Image
            src="/01-porto.png"
            alt="Portofolio 1"
            width={400}
            height={200}
          />
        </div>
        <div className="carousel-item w-full">
          <Image
            src="/02-porto.png"
            alt="Portofolio 1"
            width={400}
            height={200}
          />
        </div>
        <div className="carousel-item w-full">
          <Image
            src="/03-porto.png"
            alt="Portofolio 1"
            width={400}
            height={200}
          />
        </div>
        <div className="carousel-item w-full">
          <Image
            src="/04-porto.png"
            alt="Portofolio 1"
            width={400}
            height={200}
          />
        </div>
        <div className="carousel-item w-full">
          <Image
            src="/05-porto.png"
            alt="Portofolio 1"
            width={400}
            height={200}
          />
        </div>
      </div>

      {/* Portofolio content mobile 2 */}
      <div className="carousel rounded-box w-80 shadow-xl md:hidden">
        <div className="carousel-item w-full">
          <Image
            src="/01-porto.png"
            alt="Portofolio 1"
            width={400}
            height={200}
          />
        </div>
        <div className="carousel-item w-full">
          <Image
            src="/02-porto.png"
            alt="Portofolio 1"
            width={400}
            height={200}
          />
        </div>
        <div className="carousel-item w-full">
          <Image
            src="/03-porto.png"
            alt="Portofolio 1"
            width={400}
            height={200}
          />
        </div>
        <div className="carousel-item w-full">
          <Image
            src="/04-porto.png"
            alt="Portofolio 1"
            width={400}
            height={200}
          />
        </div>
        <div className="carousel-item w-full">
          <Image
            src="/05-porto.png"
            alt="Portofolio 1"
            width={400}
            height={200}
          />
        </div>
      </div>

      {/* Portofolio content desktop */}
      <div className="carousel carousel-center rounded-box gap-5 shadow-2xl hidden md:flex">
        <div className="carousel-item shadow-xl">
          <Image
            src="/01-porto.png"
            alt="Portofolio 1"
            width={400}
            height={200}
          />
        </div>
        <div className="carousel-item shadow-xl">
          <Image
            src="/02-porto.png"
            alt="Portofolio 1"
            width={400}
            height={200}
          />
        </div>
        <div className="carousel-item shadow-xl">
          <Image
            src="/03-porto.png"
            alt="Portofolio 1"
            width={400}
            height={200}
          />
        </div>
        <div className="carousel-item shadow-xl">
          <Image
            src="/04-porto.png"
            alt="Portofolio 1"
            width={400}
            height={200}
          />
        </div>
        <div className="carousel-item shadow-xl">
          <Image
            src="/05-porto.png"
            alt="Portofolio 1"
            width={400}
            height={200}
          />
        </div>
      </div>
    </main>
  );
}
