import Hero from "../../components/hcf/home/Hero";
import MbbsVisual from "../../components/hcf/home/MbbsVisual";
import Steps from "../../components/hcf/home/Steps";
import Testimonials from "../../components/hcf/home/Testimonials";
import TopDoctors from "../../components/hcf/home/TopDoctors";
import TopHospitals from "../../components/hcf/home/TopHospitals";
import Treatments from "../../components/hcf/home/Treatments";
import VideoTestimonials from "../../components/hcf/home/VideoTestimonials";
import WhyMakeWell from "../../components/hcf/home/WhyMakeWell";
import LatestBlogs from "../../components/hcf/home/LatestBlogs";
import ContactForm from "../../components/hcf/home/ContactForm";

const HDFHome = () => {
  return (
    <div className="w-full ">
      <Hero />
      <Steps />
      <Treatments />
      <TopHospitals />
      <TopDoctors />
      <WhyMakeWell />
      <MbbsVisual />
      <Testimonials />
      <VideoTestimonials />
      <LatestBlogs />
      <ContactForm />
    </div>
  );
};

export default HDFHome;
