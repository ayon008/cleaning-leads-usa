import Banner from "./Shared/Home/Banner";
import Expertise from "./Shared/Home/Expertise";
import Professional from "./Shared/Home/Professional";

export default function Home() {
  return (
    <>
      <Banner />
      <Professional />
      <Expertise />
      <div className="h-dvh w-screen bg-primary -mt-56 pb-56"></div>
    </>
  );
}
