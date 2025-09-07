import React from "react";
import Title from "../Title/Title";
import { Star } from "lucide-react";

const TestimonialCard = ({
  maxStars,
  rating,
  review,
  owner,
}: {
  maxStars: number;
  rating: number;
  review: string;
  owner: string;
}) => {
  return (
    <div className="bg-primary p-6 rounded space-y-5 w-84">
      <div className="flex">
        {Array.from({ length: maxStars }, (_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <p>{review}</p>
      <p className="text-gray-500">{owner}</p>
    </div>
  );
};

const Testimonial = () => {
  return (
    <section id="testimonial" className="my-20">
      <div className="container">
        <Title
          containerClass="text-center"
          headline="Proven Results from Commercial Cleaning Companies"
          subHeading="Cleaning businesses nationwide rely on CleaningLeadsUSA to generate high-quality janitorial leads and fill their schedules. Discover how our verified commercial cleaning leads have helped clients secure more contracts, increase revenue, and achieve sustainable business growth."
        />
        <div className="flex flex-wrap gap-10 mt-10 items-stretch justify-center">
          <TestimonialCard
            rating={5}
            maxStars={5}
            review="Amazing results! CleaningLeadsUSA delivered 15 qualified leads in our
        first month. We closed 8 contracts worth over $45,000. Their appointment
        setting team is professional and the leads are pre-screened perfectly."
            owner="Mike Johnson, Johnson Commercial Cleaning, Florida"
          />
          <TestimonialCard
            rating={5}
            maxStars={5}
            review="Best investment we've made for our cleaning business. The leads are high-quality and the appointment scheduling saves us hours every week. We've doubled our revenue in 6 months thanks to CleaningLeadsUSA!"
            owner="Sarah Martinez, Martinez Janitorial Services, Chatsworth, CA 91311"
          />
          <TestimonialCard
            rating={5}
            maxStars={5}
            review="Finally found a lead generation service that actually works! The commercial cleaning leads are exactly what we need - hospitals, schools, and office buildings. Their team handles everything professionally."
            owner="David Chen, ProClean Solutions, P.O. Box 112 Rossford, OH 43460"
          />
          <TestimonialCard
            rating={4}
            maxStars={5}
            review="Great service overall. The leads are qualified and their appointment setting is solid. Would like to see faster turnaround times, but the quality makes up for it. Definitely recommend for growing cleaning companies."
            owner="Lisa Thompson, Thompson Cleaning Co, 1011 West Ave, Rifle, CO 81650"
          />
          <TestimonialCard
            rating={5}
            maxStars={5}
            review="CleaningLeadsUSA helped us land 3 major hospital contracts this quarter. The leads are legitimate and the pricing is fair. Customer service responds quickly to any questions."
            owner="Robert Williams, Elite Facility Services, Rancho Cucamonga, CA 91730"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
