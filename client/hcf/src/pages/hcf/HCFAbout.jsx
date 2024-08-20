import Hero from "../../components/hcf/home/Hero";
import Testimonials from "../../components/hcf/home/Testimonials";
import VideoTestimonials from "../../components/hcf/home/VideoTestimonials";
import ContactForm from "../../components/hcf/home/ContactForm";
import AboutUs from "../../components/hcf/about/AboutUs";

const HCFAbout = () => {
  return (
    <div className="w-full ">
      <Hero />
      <AboutUs />
      <Testimonials />
      <VideoTestimonials />

      <ContactForm />
    </div>
  );
};

export default HCFAbout;
