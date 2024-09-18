import fishmanImg from "@/public/assets/images/1.jpg";
import touristImg from "@/public/assets/images/2.jpg";
import sailorImg from "@/public/assets/images/3.jpg";
import { PlayerCard } from "@/app/components/PlayerCard";

export function CharacterSection() {
  return (
    <section className="flex flex-col  justify-center items-center mb-4">
    
        <div className=" w-4/5">
          <h1 className="text-blue-600 font-extrabold text-2xl mb-2">
            Game Characters
          </h1>

          <PlayerCard
            cardImage={fishmanImg}
            cardTitle="Fisher Man"
            cardDescription="The character fisherman is one of the most important character
                of the entire game There are seperate levels for fisherman in
                this game. As the fishman should have the knowledge about the
                Potential Fishing Zones which can improve its efficiency and can
                earn more."
            cardPosition={true}
          />
          <PlayerCard
            cardImage={touristImg}
            cardTitle="Tourist"
            cardDescription="Tourists explore various oceanic locations, They receive
                important safety tips and alerts, such as tsunami warnings and
                flood precautions, ensuring they stay safe during their
                adventures. Tourists learn about the impact of pollution and how
                to minimize their footprint, promoting eco-friendly behaviors."
            cardPosition={false}
          />
          <PlayerCard
            cardImage={sailorImg}
            cardTitle="Sailor"
            cardDescription="Sailors are adept at navigating through various oceanic routes,
                using maps and tools to find the best paths. They receive
                real-time weather alerts, to avoid storms and other hazardous
                conditions. Sailors are educated on the importance of
                maintaining clean and healthy oceans, and protect marine life."
            cardPosition={true}
          />
        </div>
    </section>
  );
}
