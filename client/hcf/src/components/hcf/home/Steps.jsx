import { servicesData } from "../../../../data/homepageData.jsx";

const Steps = () => {
  return (
    <div className=" p-4 md:p-8 flex flex-col items-center gap-4">
      <div className="w-full flex items-center justify-center flex-wrap gap-4 md:gap-10">
        {servicesData.map((item, key) => (
          <div
            className="flex flex-col items-center gap-2 p-4 rounded-md shadow-md md:shadow-none w-[200px] text-center"
            key={key + 0.02 * 2}
          >
            <img src={item.imgUrl} alt="image of steps" />
            <h1 className="font-bold capitalize text-[14px]">{item.text}</h1>
          </div>
        ))}
      </div>
      <button className="rounded-3xl px-6 py-3 bg-gradient-to-b from-[#7E68C5] to-[#503AA7] flex items-center w-fit text-white">
        <h3>Contact Us Now</h3>
      </button>
    </div>
  );
};

export default Steps;
