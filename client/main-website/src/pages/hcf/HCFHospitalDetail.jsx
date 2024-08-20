import HeroDoctorsHCF from "../../components/hcf/doctors/HeroDoctorsHCF";
import ContactForm from "../../components/hcf/home/ContactForm";
import SingleHospital from "../../components/hcf/hospitals/SingleHospital";
import HospitalDoctors from "../../components/hcf/hospitals/HospitalDoctors";
import SimilarHospitals from "../../components/hcf/hospitals/SimilarHospitals";

const HCFHospitalDetail = () => {
  return (
    <div className="w-full ">
      <HeroDoctorsHCF />
      <SingleHospital />
      <HospitalDoctors />
      <SimilarHospitals />
      <ContactForm />
    </div>
  );
};

export default HCFHospitalDetail;
