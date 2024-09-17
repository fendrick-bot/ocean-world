import Image from "next/image";
import phoneImg from "@/public/assets/images/phone.png";
import userJourneyImg from "@/public/assets/images/userJourney.jpg";
export function PhoneSection() {
  return (
    <section className="flex flex-col  justify-center items-center">
      <div className="w-4/5">
        <div>
          <h1 className="text-blue-600 font-extrabold text-2xl mb-2">
            Virtual Phone
          </h1>
          <Image src={phoneImg} className="m-auto" alt="game map" width={250} />

          <p className="my-5 text-gray-600">
            In Ocean World, the virtual phone is used for: <br />
            <br />
            <b className="text-black font-bold">⭐Real-Time Updates:</b> Provide
            real-time updates and notifications about in-game events, such as
            changes in weather conditions, potential fishing zones (PFZs), and
            tsunami alerts. This keeps players informed and enhances the realism
            of the game.
            <br />
            <br />
            <b className="text-black font-bold">⭐ Quests and Missions:</b>{" "}
            Assign quests and missions via the virtual phone. For example,
            tourists can receive tasks related to beach cleanliness, while
            sailors can get missions about navigating through different oceanic
            conditions.
          </p>
        </div>

        {/* user journey part */}
        <div>
          <h1 className="text-blue-600 font-extrabold text-2xl mb-2">
            User Journey
          </h1>
          <Image
            src={userJourneyImg}
            className="rounded-xl shadow-lg"
            alt="game map"
          />
          <p className="my-5 text-gray-600">
           
            <b className="text-black font-bold">⭐Welcome Screen:</b> Players
            are greeted with an engaging welcome screen that introduces the
            game’s theme and objectives.
            <br />
            <br />
            <b className="text-black font-bold">⭐ Character Selection:</b>{" "}
            Players choose their character (fisherman, sailor, tourist) and
            customize their appearance. <br />
            <br />
            <b className="text-black font-bold">⭐ Initial Missions: </b>{" "}
            Players start with simple missions that introduce them to ocean
            literacy concepts, such as identifying Potential Fishing Zones
            (PFZs) or understanding beach conditions. <br />
            <br />
            <b className="text-black font-bold">
              ⭐ Interactive Learning:{" "}
            </b>{" "}
            Through the virtual phone, players receive educational content,
            tips, and real-time updates about ocean conditions and safety
            measures. <br />
            <br />
            <b className="text-black font-bold">⭐ Leveling Up: </b> Players
            earn experience points (XP) and level up by completing missions and
            challenges.
            <br />
            <br />
            <b className="text-black font-bold">
              ⭐ Achievements and Badges:{" "}
            </b>{" "}
            Players receive badges and achievements for significant milestones,
            such as mastering sustainable fishing techniques or successfully
            navigating a tsunami alert.
          </p>
        </div>
      </div>
    </section>
  );
}
