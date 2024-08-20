import { useState } from "react";
import DBProfieDetails from "../../components/dashboard/DBProfileDetails";
const EditProfilePage = () => {
  const [data, setData] = useState({});
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData({ ...data, [name]: value });
  };

  return (
    <div>
      <DBProfieDetails
        setData={setData}
        data={data}
        handleChange={handleChange}
      />
    </div>
  );
};

export default EditProfilePage;
