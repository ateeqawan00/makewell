import { Link } from "react-router-dom";
import { notificationsData } from "../../../data/dashboardData";
import { IoIosArrowBack } from "react-icons/io";

const NotificationPage = () => {
  return (
    <div className="flex flex-col w-[95%] items-end ">
      <div className="w-[80%] ">
        <div className="flex items-center gap-2">
          <Link
            to={"/dashboard"}
            className="flex justify-center items-center text-lg text-white bg-primary px-3 h-10 rounded-lg "
          >
            <IoIosArrowBack />
          </Link>
          <h1 className="p-4 text-primary text-[1.5rem] font-semibold">
            Notifications
          </h1>
        </div>
        <div className="flex flex-col gap-5 w-full">
          {notificationsData.map((item, index) => (
            <div
              className="w-full p-2 rounded-md shadow-md flex flex-col gap-4"
              key={index + 0.011 * 2}
            >
              <h1 className=" text-primary text-[1.2rem]">{item.Name}</h1>
              <p className="text-gray-600">{item.Notification}</p>
              <div className="flex w-full justify-between">
                <h1 className="text-sm text-primary">{item.Date}</h1>{" "}
                <h1 className="text-sm text-primary">{item.Time}</h1>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;
