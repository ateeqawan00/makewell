import { useState } from "react";
import DBProfieDetails from "../../components/dashboard/DBProfileDetails";
import ChangeAuthDetails from "../../components/dashboard/ChangeAuthDetails";
import ReviewsEdit from "../../components/dashboard/ReviewEdit";
const EditProfilePage = () => {
  const [data, setData] = useState({});
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  return (
    <div>
      <div role="tablist" className="tabs tabs-lifted">
        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab !min-w-[80px]"
          checked
          aria-label="Profile"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <DBProfieDetails
            setData={setData}
            data={data}
            handleChange={handleChange}
          />
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab !min-w-[80px]"
          aria-label="Security"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <ChangeAuthDetails />
        </div>

        <input
          type="radio"
          name="my_tabs_2"
          role="tab"
          className="tab !min-w-[80px]"
          aria-label="Review"
        />
        <div
          role="tabpanel"
          className="tab-content bg-base-100 border-base-300 rounded-box p-6"
        >
          <ReviewsEdit />{" "}
        </div>
      </div>
    </div>
  );
};

export default EditProfilePage;
