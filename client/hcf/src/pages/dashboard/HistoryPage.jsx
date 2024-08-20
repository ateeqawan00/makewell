import { FaLocationDot } from "react-icons/fa6";
import { reviewData } from "../../../data/dashboardData";
import { Rating, RoundedStar } from "@smastrom/react-rating";
const myStarStyles = {
  itemShapes: RoundedStar,
  activeFillColor: "#ffb700",
  inactiveFillColor: "#fbf1a9",
};
const HistoryPage = () => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-primary font-semibold text-xl mx-auto 700px:m-0">
          History
        </h1>
      </div>
      <div className="w-full p-4 flex flex-col gap-3">
        {reviewData.map((item, index) => (
          <div
            className="flex items-center p-2 rounded-lg shadow-lg max-w-[900px] flex-wrap 500px:flex-nowrap"
            key={index + 0.023 * 2}
          >
            <img
              src={item.imgUrl}
              alt="case image"
              className="w-[150px] h-[150px] rounded-full object-cover"
            />
            <div className="w-full flex items-center justify-between flex-wrap p-2">
              <div className="flex flex-col gap-1">
                <h1 className="text-primary font-semibold">{item.title}</h1>
                <div className="flex items-center gap-1">
                  <FaLocationDot size={25} />
                  <h2>{item.location}</h2>
                </div>{" "}
              </div>
              <div className="flex flex-col gap-1">
                {item.rating ? (
                  <>
                    <Rating
                      style={{ maxWidth: 100 }}
                      value={item.rating}
                      readOnly
                      itemStyles={myStarStyles}
                    />
                    <h1>View</h1>
                  </>
                ) : (
                  "No Review"
                )}{" "}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryPage;
