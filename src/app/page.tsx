import Banner from "./Shared/Home/Banner";
import Blogs from "./Shared/Home/Blogs";
import Contact from "./Shared/Home/Contact";
import Expertise from "./Shared/Home/Expertise";
import Professional from "./Shared/Home/Professional";
import Testimonial from "./Shared/Home/Testimonial";
import WhyUs from "./Shared/Home/WhyUs";
import Pricing from "./Shared/Pricing/Pricing";
export interface SearchProps {
  searchParams: {
    q?: string;
    category?: string;
    page?: string;
  };
}

export default async function Home({ searchParams }: SearchProps) {
  const { page } = await searchParams;
  const currentPage = parseInt(page ?? "1", 10);
  
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
      <Blogs page={currentPage} />
    </>
  );
}
