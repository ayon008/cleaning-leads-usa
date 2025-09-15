import React from "react";
import Title from "../Title/Title";
import Image from "next/image";
import image from "../../../../public/Cleaning-service-Customizable-Flat-Illustrations-_-Rafiki-Style.jpeg.bv_resized_ipad.jpeg.bv.webp";
import PrimaryBtn from "../Button/PrimaryBtn";
import { DollarSignIcon, Rocket, ThumbsUp } from "lucide-react";
import image2 from "../../../../public/Disinfection.webp";

const WhyUs = () => {
  return (
    <>
      <section id="why-us" className="mt-10 mb-10">
        <div className="container">
          <Title
            headline="Get Monthly Leads for Office Cleaning to Grow Your Business"
            subHeading=""
            containerClass="text-center"
          />
          <div className="mt-10 flex items-stretch justify-between gap-10">
            <div className="flex-1">
              <p className="text-gray-700">
                Through focused outreach to companies actively looking for
                janitorial services, CleaningLeadsUSA provides premium
                commercial office cleaning leads.
              </p>
              <p className="mt-8 text-gray-700">
                Prospects are turned into long-term cleaning contracts by our
                skilled lead generation and appointment scheduling staff. As
                soon as you get our pre-arranged meetings with decision-makers
                andFacility managers, you can visit their location with
                confidence, determine their cleaning requirements, and make
                competitive offers. We ensure that you are speaking with the
                people who have the purchasing power to pay for commercial
                cleaning services by guaranteeing appointments with authorized
                personnel.
              </p>
              <PrimaryBtn text="Our Packages" containerClass="mt-8" />
            </div>
            <div className="relative flex-1 w-full h-full">
              {/* This section */}
              <Image
                src={image}
                width={800}
                height={600}
                className="w-full h-full object-cover"
                alt="Professional office cleaning service for a spotless and hygienic workplace"
                title="Expert commercial office cleaning services"
                sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 50vw,
         33vw"
              />
            </div>
          </div>
        </div>
      </section>
      {/*  */}
      <section id="contractors" className="py-10">
        <div className="container">
          <Title
            headline="Creating Leads for Contractors"
            subHeading="Finding verified construction leads is made simple with our help, increasing your chances of staying busy."
            containerClass="text-center"
          />
          <div className="mt-10 flex items-center justify-center gap-10">
            <div className="space-y-4 text-center">
              <h3 className="text-xl font-semibold">
                Reliable Lead Generation for Janitorial Contractors
              </h3>
              <p className="text-center">
                For cleaning contractors looking for steady business growth,
                CleaningLeadsUSA is the best option. We remove the stress of
                cold calling, offer verified commercial cleaning leads, and
                Obtain more lucrative janitorial contracts for yourself and
                other contractors.
              </p>
            </div>
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold">
                Make Contact with Commercial Cleaning Clients Who Are Ready to
                Purchase
              </h3>
              <p>
                Our commercial cleaning lead services put you in direct contact
                with pre-screened companies in your area that are looking for
                janitorial services. We offer tried-and-true appointment-setting
                techniques and tools that optimize your contract conversion
                rates.
              </p>
            </div>
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold">
                Expand Your Business in Commercial Cleaning
              </h3>
              <p>
                With a steady pipeline of commercial cleaning opportunities and
                fast appointment scheduling, our janitorial lead generation
                service is proven to accelerate business growth for cleaning
                contractors nationwide.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="choose-us" className="pt-10 pb-10 bg-primary">
        <div className="container">
          <Title
            containerClass="text-center"
            headline="Why Choose CleaningLeadsUSA for Office Cleaning Leads?"
            subHeading="The most reliable source for consistent, high-quality commercial office cleaning leads and verified janitorial contract opportunities."
          />
          <div className="mt-10 flex item-center justify-between gap-10">
            <div className="space-y-4">
              <div className="w-fit mx-auto">
                <DollarSignIcon size={"5rem"} className="text-secondary" />
              </div>
              <div className="text-center space-y-4">
                <h3 className="text-xl font-semibold">
                  Performance-Based Lead Pricing
                </h3>
                <p>
                  Pay only for verified office cleaning appointments that you
                  actually visit and quote. No charges for unqualified leads,
                  missed appointments, or prospects who don&apos;t meet -
                  guaranteed fair pricing for real opportunities only.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="w-fit mx-auto">
                <Rocket size={"5rem"} className="text-secondary" />
              </div>
              <div className="text-center space-y-4">
                <h3 className="text-xl font-semibold">
                  Industry-Leading 40%-50% Conversion Rates
                </h3>
                <p>
                  CleaningLeadsUSA&apos;s commercial cleaning leads achieve
                  exceptional 40%-50% close rates. Our experienced appointment
                  setting team ensures you meet with qualified decision-makers
                  who have budget and authority to hire cleaning contractors.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="w-fit mx-auto">
                <ThumbsUp size={"5rem"} className="text-secondary" />
              </div>
              <div className="text-center space-y-4">
                <h3 className="text-xl font-semibold">
                  Exceptional Lead Quality Guaranteed
                </h3>
                <p>
                  CleaningLeadsUSA delivers reliable, pre-verified janitorial
                  appointments with 90% show-up rates. Our expert appointment
                  setters ensure you visit qualified commercial cleaning
                  prospects who are serious about hiring cleaning services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="" className="my-10">
        <div className="container">
          <Title
            headline="Deep Commercial Cleaning Industry Knowledge"
            subHeading="After years of connecting cleaning contractors with small to mid-sized businesses and offices seeking reliable janitorial services, CleaningLeadsUSA has established itself as the leading commercial cleaning lead generation company."
            containerClass="text-center"
          />
          <div className="mt-10 flex items-center justify-center gap-x-20">
            <div className="space-y-4 text-center">
              <h3 className="text-xl font-semibold">
                Healthcare Facility Cleaning Leads - Medical Office Contracts
              </h3>
              <p className="text-center">
                Hospitals, medical clinics, surgical centers, and healthcare
                facilities need professional cleaning services that comply with
                stringent medical industry standards and infection control
                protocols. Connect with healthcare administrators and facility
                managers seeking reliable medical cleaning specialists for
                ongoing service agreements.
              </p>
            </div>
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold">
                Industrial Cleaning Leads - Manufacturing & Factory Contracts
              </h3>
              <p>
                Manufacturing facilities, warehouses, and industrial plants
                require specialized cleaning services for equipment, machinery,
                and production areas. Connect with facility managers and plant
                supervisors actively seeking experienced industrial cleaning
                contractors for long-term maintenance contracts.
              </p>
            </div>
            <div className="text-center space-y-4">
              <h3 className="text-xl font-semibold">
                School Cleaning Leads - Educational Facility Contracts
              </h3>
              <p>
                Schools, universities, daycare centers, and educational
                institutions require reliable cleaning services to maintain
                safe, healthy learning environments. Connect with facility
                managers, principals, and administrators actively seeking
                professional janitorial contractors for ongoing cleaning
                contracts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="cleaning-leads" className="mt-10 mb-10">
        <div className="container">
          <Title
            containerClass="text-center"
            headline="CleaningLeadsUSA Fuels Growth of Your Commercial Cleaning Business"
            subHeading="THE TRUSTED COMMERCIAL CLEANING LEADS PROVIDER"
          />
          <div className="mt-10 flex items-stretch justify-between gap-10">
            <div className="flex-1">
              <p className="text-gray-700">
                Managing daily tasks like RFPs, cold calling, and website
                inquiries can be overwhelming and drain valuable resources for
                small to medium-sized commercial cleaning companies.
                CleaningLeadsUSA helps streamline your operations by identifying
                and prioritizing high-quality leads that convert into signed
                contracts and long-term clients.
              </p>
              <p className="mt-8 text-gray-700">
                We handle appointment scheduling and initial prospect
                qualification, allowing you to focus your time on the most
                promising opportunities. Our team specializes in generating
                commercial cleaning leads for offices, medical facilities,
                schools, and industrial sites based on your preferred service
                areas. Connect with CleaningLeadsUSA today to secure more
                cleaning contracts in your local market efficiently and
                cost-effectively.
              </p>
            </div>
            <div className="relative flex-1 w-full h-full">
              <Image
                src={image2}
                className="w-full h-full object-cover"
                alt="office-cleaning"
              />
            </div>
          </div>
          <div className="w-fit mx-auto">
            <PrimaryBtn text="Our Packages" containerClass="mt-8" />
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
