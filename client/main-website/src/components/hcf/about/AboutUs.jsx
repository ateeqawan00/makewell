import { doctorData, hospitalsData } from "../../../../data/aboutUsData";

const AboutUs = () => {
  return (
    <div className="p-8">
      <div className="mb-4">
        <h1 className="text-[1.5rem] font-semibold">About Us</h1>
        <p className="">
          Hi, I&apos;m John Doe, your friendly UI/UX designer! 🎨 Specializing
          in Figma, I will design your app, web, and landing page ideas to life
          with creative flair and smooth functionality. Let&apos;s collaborate
          on designs that captivate and elevate your online presence. Ready to
          make your digital dreams a reality? Let&apos;s talk!
        </p>
      </div>
      <div className="mb-4">
        <h1 className="text-[1.5rem] font-semibold">Specialized Fields</h1>
        <ul className="list-disc px-8">
          <li>Phycology</li>
          <li>Physicology</li>
        </ul>
      </div>{" "}
      <div className="mb-4">
        <h1 className="text-[1.5rem] font-semibold">Procedures</h1>
        <ul className="list-disc px-8">
          <li>Phycology</li>
        </ul>
      </div>
      <div className="mb-4">
        <h1 className="text-[1.5rem] font-semibold">
          Number of Clients Served
        </h1>
        <p>50</p>
      </div>
      <div className="mb-4">
        <h1 className="text-[1.5rem] font-semibold">Hospitals </h1>
        <div className="flex flex-wrap items-center gap-8 mt-2">
          {hospitalsData.map((item, index) => (
            <div
              className="p-4 border border-gray-200 rounded-2xl flex items-center gap-4 w-[180px]"
              key={index + 0.012 * 2}
            >
              <img
                src={item.imgUrl}
                alt="profile image"
                className="rounded-full w-[50px] h-[50px] object-cover"
              />
              <div className="">
                <h1 className="text-primary">{item.name}</h1>
                <h2 className="text-sm">{item.location}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h1 className="text-[1.5rem] font-semibold">Doctor </h1>
        <div className="flex flex-wrap items-center gap-8 mt-2">
          {doctorData.map((item, index) => (
            <div
              className="p-4 border border-gray-200 rounded-2xl flex items-center gap-4 "
              key={index + 0.012 * 2}
            >
              <img
                src={item.imgUrl}
                alt="profile image"
                className="rounded-full w-[50px] h-[50px] object-cover"
              />
              <div className="">
                <h1 className="text-primary">{item.name}</h1>
                <h2 className="text-sm">{item.speciality}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
