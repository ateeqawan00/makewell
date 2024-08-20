import { hospitalsData } from "../../../../data/aboutUsData";

const SimilarHospitals = () => {
  return (
    <div className="p-8">
      <h1 className="text-[2rem] font-semibold text-center">
        Hospitals Similar to New Delhi Hospital
      </h1>
      <div className="flex items-center justify-center gap-2 p-4">
        {hospitalsData.map((item, index) => (
          <div className="p-2" key={index + 0.3 * 8}>
            <img src={item.imgUrl} alt="hospital image" className="w-[150px]" />
            <h1 className="font-semibold text-[1.2rem] mt-2 text-center">
              {item.name}
            </h1>
            <button className="w-full border-primary border rounded-xl px-6 py-2 text-primary bg-white">
              View Hospital
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimilarHospitals;
