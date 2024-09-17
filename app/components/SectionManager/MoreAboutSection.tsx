import Image from "next/image";
import techstackImg from "@/public/assets/images/techstack.jpg";
export function MoreAboutSection() {
  return (
    <section className="flex flex-col  justify-center items-center">
      <div className="w-4/5">
        <h1 className="text-blue-600 font-extrabold text-2xl mb-2">
          Technologies
        </h1>
        <Image
          src={techstackImg}
          className="rounded-lg shadow-2xl"
          alt="game map"
        />

        <p className="my-5 text-gray-600">
          Running a 3D Game on browsers eliminates the need for expensive
          hardware helps minimize licensing fees and development costs.
          <br />
          <br />
          Maintain a leaderboard of top players, ranking them based on various
          factors. The rankings are calculated and stored on the server. 🏆
          <br />
          <br />
          Add an admin dashboard to access detailed player analytics and
          features for editing and updating quizzes and questions. 📊🛠️
        </p>
      </div>
    </section>
  );
}
