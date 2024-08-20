import { CircleFlag } from "react-circle-flags";
import { happyPatientsCardsData } from "../../../../data/hcfData";
import { Rating, ThinStar } from "@smastrom/react-rating";
import { FaYoutube } from "react-icons/fa";

const HCFHappyPatientsCards = () => {
  return (
    <div className="p-8 flex items-center justify-center flex-wrap gap-4">
      {happyPatientsCardsData.map((item, index) => (
        <div
          className="p-8 shadow-lg rounded-lg flex-grow md:max-w-[500px] lg:max-w-[600px]"
          key={index + 0.0014 * 2}
        >
          <div className="flex items-center justify-between w-full">
            <h1 className="font-semibold text-[1rem]">{item.name}</h1>
            <div className="flex items-center gap-2">
              <CircleFlag
                countryCode={item.countryCode.toLowerCase()}
                className="w-[20px] h-[20px]"
              />{" "}
              <p className="font-semibold">{item.country}</p>
            </div>
          </div>
          <p className="text-sm md:text-md">{item.review}</p>
          <div className="flex items-center justify-between w-full mt-2">
            <div className="flex items-center gap-1">
              <Rating
                style={{ maxWidth: 100 }}
                value={item.rating}
                readOnly
                itemStyles={ratingStyles}
              />
              <p className="font-semibold text-xs mt-[2px]">{item.rating}</p>
            </div>
            <p className="font-semibold text-xs">{item.date}</p>
            <FaYoutube color="#E10600" size={25} />
          </div>
        </div>
      ))}
    </div>
  );
};
const ratingStyles = {
  itemShapes: ThinStar,
  activeFillColor: "#ffb700",
  inactiveFillColor: "#fbf1a9",
};
export default HCFHappyPatientsCards;
