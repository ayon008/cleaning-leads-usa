import Banner from "./Shared/Home/Banner";
import Blogs from "./Shared/Home/Blogs";
import Contact from "./Shared/Home/Contact";
import Expertise from "./Shared/Home/Expertise";
import Professional from "./Shared/Home/Professional";
import Testimonial from "./Shared/Home/Testimonial";
import WhyUs from "./Shared/Home/WhyUs";
import Pricing from "./Shared/Pricing/Pricing";

export default function Home() {
  return (
    <>
      <Banner />
      <Professional />
      <Expertise />
      <Contact />
      <div className="bg-primary -mt-56 pb-56 h-fit"></div>
      <Testimonial />
      <Pricing />
      <WhyUs />
      <Blogs />
    </>
  );
}
