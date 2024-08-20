import HeroDoctorsHCF from "../../components/hcf/doctors/HeroDoctorsHCF";
import HCFHappyPatientsCards from "../../components/hcf/happy-patients/HCFHappyPatientsCards";
import ContactForm from "../../components/hcf/home/ContactForm";

const HCFHappyPatients = () => {
  return (
    <div className="w-full ">
      <HeroDoctorsHCF />
      <HCFHappyPatientsCards />
      <ContactForm />
    </div>
  );
};

export default HCFHappyPatients;
