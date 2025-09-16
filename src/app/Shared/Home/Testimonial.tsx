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
      <em>{review}</em>
      <p className="text-gray-500 mt-4">{owner}</p>
    </div>
  );
};

const Testimonial = () => {
  return (
    <section id="testimonial" className="md:mt-20 mt-10 mb-10">
      <div className="container">
        <Title
          containerClass="text-center"
          headline="Verified Outcomes from Cleaning Companies"
          subHeading="Cleaning businesses nationwide rely on CleaningLeadsUSA to generate high-quality janitorial leads and fill their schedules. Discover how our verified commercial cleaning leads have helped clients secure more contracts, increase revenue, and achieve sustainable business growth."
        />
        <div className="flex flex-wrap gap-4 md:mt-20 mt-10 items-stretch justify-center">
          <TestimonialCard
            rating={5}
            maxStars={5}
            review="Fantastic outcomes! In our first month, CleaningLeadsUSA provided 15 qualified leads. Eight contracts totalling more than $45,000 were closed. The leads are flawlessly pre-screened, and their appointment setting staff is professional."
            owner="Mike Johnson, Johnson Commercial Cleaning, Florida"
          />
          <TestimonialCard
            rating={5}
            maxStars={5}
            review="The best money we've ever spent on our cleaning company. We save hours each week thanks to the appointment scheduling and the high-quality leads. CleaningLeadsUSA has helped us double our revenue in just six months!"
            owner="Sarah Martinez, Martinez Janitorial Services, Chatsworth, CA 91311"
          />
          <TestimonialCard
            rating={5}
            maxStars={5}
            review="I've at last discovered a lead generation service that is truly effective! We need the commercial cleaning leads for office buildings, schools, and hospitals. Everything is handled expertly by their staff."
            owner="David Chen, ProClean Solutions, P.O. Box 112 Rossford, OH 43460"
          />
          <TestimonialCard
            rating={4}
            maxStars={5}
            review="Overall, excellent service. Their appointment scheduling is sound, and the leads are qualified. Although I would prefer quicker turnaround times, the quality more than makes up for it. Strongly suggested for expanding cleaning businesses."
            owner="Lisa Thompson, Thompson Cleaning Co, 1011 West Ave, Rifle, CO 81650"
          />
          <TestimonialCard
            rating={5}
            maxStars={5}
            review="This quarter, CleaningLeadsUSA assisted us in securing three significant hospital contracts. The pricing is reasonable and the leads are authentic. Any questions are promptly answered by customer service."
            owner="Robert Williams, Elite Facility Services, Rancho Cucamonga, CA 91730"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
