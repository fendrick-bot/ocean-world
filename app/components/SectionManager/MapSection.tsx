import Image from "next/image";
import gameMapImg from "@/public/assets/images/gameMap.png";
export function MapSection() {
  return (
    <section className="flex flex-col  justify-center items-center">
      <div className="w-4/5">

          <h1 className="text-blue-600 font-extrabold text-2xl mb-2">
            Game Map
          </h1>
          <Image
            src={gameMapImg}
            className="rounded-lg shadow-2xl"
            alt="game map"
          />

          <p className="my-5 text-gray-600">
            In Ocean World, the game map is used for: <br />
            <br />
            <b className="text-black font-bold">⭐Level Navigation:</b> Players
            use the map to navigate to different levels within the game.
            <br />
            <br />
            <b className="text-black font-bold">⭐ Progress Tracking:</b> The
            map displays the levels completed and the stars earned by the
            player.
            <br />
            <br />
            <b className="text-black font-bold">⭐ Task Information:</b> It
            provides details about the tasks players need to perform in each
            level.
          </p>
      </div>
    </section>
  );
}
