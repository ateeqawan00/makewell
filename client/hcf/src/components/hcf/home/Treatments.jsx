import { treatmentTypesData } from "../../../../data/homepageData.jsx";

const Treatments = () => {
  return (
    <div className="w-full p-4 mb-4">
      <h1 className="text-[3rem] text-center font-semibold">
        Are you looking for treatment?
      </h1>
      <div className="w-full flex items-center justify-center flex-wrap">
        {treatmentTypesData.map((item, index) => (
          <div
            className="collapse collapse-plus bg-white max-w-[600px]"
            key={index + 0.32 * 2}
          >
            <input type="radio" name="my-accordion-3" />
            <div className="collapse-title text-xl font-medium">
              {item.majorTitle}{" "}
            </div>
            <div className="collapse-content">
              {item.subtypes.map((subItem, subIndex) => (
                <p
                  className="block text-primary border-l-2 border-primary p-4 hover:underline hover:cursor-pointer"
                  key={subIndex + 0.098 * 2}
                >
                  {subItem}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Treatments;
