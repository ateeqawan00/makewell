import React from "react";
import { heroNewData } from "../../../data/homepageData";
import { IoRocketOutline } from "react-icons/io5";

const SubHero = () => {
  return (
    <div className="p-4">
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {heroNewData.map((Item, Index) => (
          <div
            className="p-2 flex flex-col items-center justify-center gap-4 rounded-md shadow-md w-[150px] 400px:w-[175px] h-[115px]"
            key={Index + 0.002 * 278}
          >
            <img
              src={Item.imgSrc}
              alt="icon image"
              className="w-[45px] 400px:w-auto"
            />
            <h1 className="text-xs 400px:text-sm text-center 400px:mt-auto font-semibold">
              {Item.title}
            </h1>
          </div>
        ))}
      </div>
      <img
        src="https://i.ibb.co/qNd4mct/Group-1000006691-3.png"
        alt="new hero image"
        className="object-contain mx-auto 400px:w-2/3"
      />
      <h1 className="mt-4 text-xl text-center 400px:text-2xl 800px:text-4xl font-semibold capitalize">
        earn upto 4x with your own website
      </h1>
      <div className="px-6 py-2 bg-[#AFA9C3] rounded-lg w-fit mx-auto font-semibold mt-2">
        Makewell.life/your_name
      </div>
      <button
        onClick={() => document.getElementById("joinWaitlistModal").showModal()}
        className="rounded-2xl  text-white px-6 py-3  gap-4 bg-[#503AA7] flex items-center w-fit mx-auto mb-4 mt-2"
      >
        <IoRocketOutline size={20} color="#fff" /> <h3>Join Waitlist</h3>
      </button>
    </div>
  );
};

export default SubHero;
