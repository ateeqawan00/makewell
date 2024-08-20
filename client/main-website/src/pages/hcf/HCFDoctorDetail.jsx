import HeroDoctorsHCF from "../../components/hcf/doctors/HeroDoctorsHCF";
import ContactForm from "../../components/hcf/home/ContactForm";
import SingleDoctor from "../../components/hcf/doctors/SingleDoctor";
import SimilarDoctors from "../../components/hcf/doctors/SimilarDoctors";

const HDFHome = () => {
  return (
    <div className="w-full ">
      <HeroDoctorsHCF />
      <SingleDoctor />
      <SimilarDoctors />
      <ContactForm />
    </div>
  );
};

export default HDFHome;
