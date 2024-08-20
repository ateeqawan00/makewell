import { notificationsData } from "../../../data/dashboardData";

const NotificationPage = () => {
  return (
    <div>
      <h1 className="p-4 text-primary text-[1.5rem] font-semibold">
        Notifications
      </h1>
      <div className="flex flex-col gap-5 w-full">
        {notificationsData.map((item, index) => (
          <div
            className="w-full p-2 rounded-md shadow-md border-gray-300 border flex flex-col gap-4"
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
  );
};

export default NotificationPage;
