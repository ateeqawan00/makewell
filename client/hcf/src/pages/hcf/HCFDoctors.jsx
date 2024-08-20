import HeroDoctorsHCF from "../../components/hcf/doctors/HeroDoctorsHCF";
import ContactForm from "../../components/hcf/home/ContactForm";
import AllDoctors from "../../components/hcf/doctors/AllDoctors";

const HDFHome = () => {
  return (
    <div className="w-full ">
      <HeroDoctorsHCF />
      <AllDoctors />
      <ContactForm />
    </div>
  );
};

export default HDFHome;
