'use client'
import intro from "@/public/videos/dashboard.mp4";


export function IntroSection() {
  console.log(intro);
  return (
    <section className="flex flex-col gap-7 justify-center items-center mb-7">
      <video
        className="w-4/5 rounded-lg  overflow-hidden"
        src={intro}
        autoPlay
        muted
        loop
      />
      <div className=" w-4/5">
        <h1 className="text-blue-600 font-extrabold text-2xl">Ocean World</h1>
        <p className=" text-base ">
          Welcome to Ocean World 3D, an adventurous game designed to transform
          our relationship with the sea and give experience about Life Below
          Water, by promoting awareness of marine conservation, sustainable
          fishing, and ocean safety.
        </p>

        <h1 className="text-blue-600 font-extrabold text-2xl my-3">
          Key Features
        </h1>
        <div className="flex gap-5 items-center justify-center">
          <div className="w-24 h-24 bg-slate-200 rounded-lg border-2 border-gray-300"></div>
          <div className="w-24 h-24 bg-slate-200 rounded-lg border-2 border-gray-300"></div>
          <div className="w-24 h-24 bg-slate-200 rounded-lg border-2 border-gray-300"></div>
        </div>
      </div>
    </section>
  );
}
