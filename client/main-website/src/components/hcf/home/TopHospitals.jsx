import { topHospitalsData } from "../../../../data/homepageData";

const TopHospitals = () => {
  return (
    <div className="w-full p-4 font-inter">
      <h1 className="text-[3rem] text-center font-semibold">Top Hospitals </h1>
      <div className="flex items-center justify-center flex-wrap p-6 gap-8">
        {topHospitalsData.map((item, index) => (
          <div
            className="flex flex-col items-center justify-center gap-1 py-6 px-12 rounded-xl shadow-lg text-primary hover:bg-gray-100 hover:cursor-pointer"
            key={index + 0.025 * 2}
          >
            {item.icon}
            <h1 className="font-bold text-xl">{item.title}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopHospitals;
