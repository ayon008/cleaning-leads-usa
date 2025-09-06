import Banner from "./Shared/Home/Banner";
import Contact from "./Shared/Home/Contact";
import Expertise from "./Shared/Home/Expertise";
import OurDo from "./Shared/Home/OurDo";
import Professional from "./Shared/Home/Professional";

export default function Home() {
  return (
    <>
      <Banner />
      <Professional />
      <Contact />
      <Expertise />
      <div className="bg-primary -mt-56 pb-56 h-fit"></div>
      {/*  */}
      <OurDo />
    </>
  );
}
