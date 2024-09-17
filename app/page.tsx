import Image from "next/image";
import boatImg from "@/public/assets/images/boatbg.png";
import { IntroSection } from "./components/SectionManager/IntroSection";
import { CharacterSection } from "./components/SectionManager/CharacterSection";
import { MapSection } from "./components/SectionManager/MapSection";
import { PhoneSection } from "./components/SectionManager/PhoneSection";
import { MoreAboutSection } from "./components/SectionManager/MoreAboutSection";

export default function Home() {
  return (
    <main className="">
      {/* // using nav section */}
      <nav className="h-20 mb-4  flex items-center justify-center">
        <h2 className="font-extrabold text-black text-2xl bg-yellow-400 w-full py-3 px-6 h-fit shadow-lg text-right ">
          Bit
        </h2>
        <h2 className="font-bold text-white text-2xl bg-blue-500 w-full py-3 px-6 h-fit  shadow-lg">
          Brains
        </h2>
      </nav>

      {/* // using intro section */}
      <IntroSection />

      {/* // using character section */}
      <CharacterSection />

      {/* //using map section */}
      <MapSection />

      {/* //using phone section */}
      <PhoneSection />

      {/* //using phone section */}
      <MoreAboutSection />

      <br />
      <br />
      <section className="flex flex-col  justify-center items-center">
        <div className=" w-4/5">
          <h1 className="text-blue-600 font-extrabold text-2xl mb-2">
            About Us
          </h1>

          <p className="my-5 text-gray-600">
            <b className="text-black font-bold">⭐Team Bits Brains</b> <br />{" "}
            Welcome to the world of innovation and creativity! We are Team Bits
            Brains, a passionate group of six dedicated individuals united by
            our love for technology and the ocean. Our team has come together to
            create “Ocean World,” an educational game designed to promote ocean
            literacy and safety.
            <br />
            <br />
            <b className="text-black font-bold">⭐Our Mission</b> <br /> Our
            mission is to harness the power of interactive gaming to educate and
            inspire players about the importance of ocean conservation,
            sustainable practices, and disaster preparedness. We believe that
            through engaging and immersive experiences, we can make a
            significant impact on how people perceive and interact with our
            oceans.
            <br />
            <br />
            <b className="text-black font-bold">⭐Meet the Team -</b> <br />
            Aditya Raj
            <br />
            Amit Kumar
            <br />
            Baadal Kumar
            <br />
            Atul Sharma
            <br />
            Shubham Kumar Mishra
            <br />
            Aaditi Kumari
            <br />
            <br />
          </p>
        </div>
        <h1 className="text-purple-600 font-extrabold text-3xl mb-2 m-auto">
          ~ Team Bit Brains ~
        </h1>

        <Image src={boatImg} alt="boat image" className="w-full" unoptimized />
      </section>
    </main>
  );
}
