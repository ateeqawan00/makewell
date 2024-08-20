import { FaAngleLeft, FaLocationDot } from "react-icons/fa6";

const JobDetailsPage = () => {
  // const position = [51.505, -0.09];

  return (
    <div className="p-4">
      <div className="flex items-center gap-2">
        <div className="p-2 bg-primary flex items-center justify-center rounded-md">
          <FaAngleLeft color="#fff" />
        </div>
        <h1 className="text-primary font-semibold">Job Details</h1>
      </div>
      <div className="flex max-w-[500px] flex-wrap 500px:flex-nowrap justify-between mt-8">
        <div className="text-gray-500">
          <h1>Total Days: 10</h1>
          <h1>Date: 12/2/2024</h1>
          <h1>Language: English</h1>
        </div>
        <div>
          <h1 className="text-black">Amount</h1>
          <h1>$100</h1>
        </div>
      </div>
      <div className="mt-8 text-gray-500">
        <h1 className="text-black">Work Location</h1>
        <div className="flex items-center gap-2">
          <FaLocationDot size={20} />
          <h1>New Delhi</h1>
        </div>{" "}
      </div>
      <div className="max-w-[600px] relative overflow-hidden">
        {/* <MapContainer
          zoom={10}
          scrollWheelZoom={true}
          center={position}
          style={{ width: "300px", height: "300px" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}></Marker>
        </MapContainer> */}
      </div>
    </div>
  );
};

export default JobDetailsPage;
