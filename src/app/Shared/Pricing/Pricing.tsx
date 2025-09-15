import React from "react";
import Title from "../Title/Title";

const pricingTiers = [
  {
    tier: "Bronze",
    appointments: 3,
    features: [
      "Appointment Set With Decision Maker",
      "Actively Looking to Hire A New Company",
      "Address, Phone And Number Verified",
      "Additional Verification Call Received",
      "Appointment Date And Time Set",
      "3 Appointments Set",
    ],
    cta: "Order Now",
  },
  {
    tier: "Silver",
    appointments: 5,
    features: [
      "Appointment Set With Decision Maker",
      "Actively Looking to Hire A New Company",
      "Address, Phone And Number Verified",
      "Additional Verification Call Received",
      "Appointment Date And Time Set",
      "5 Appointments Set",
    ],
    cta: "Order Now",
  },
  {
    tier: "Gold",
    appointments: 7,
    features: [
      "Appointment Set With Decision Maker",
      "Actively Looking to Hire A New Company",
      "Address, Phone And Number Verified",
      "Additional Verification Call Received",
      "Appointment Date And Time Set",
      "7 Appointments Set",
    ],
    cta: "Order Now",
  },
  {
    tier: "Platinum",
    appointments: 10,
    features: [
      "Appointment Set With Decision Maker",
      "Actively Looking to Hire A New Company",
      "Address, Phone And Number Verified",
      "Additional Verification Call Received",
      "Appointment Date And Time Set",
      "10 Appointments Set",
    ],
    cta: "Order Now",
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="mb-10 py-10">
      <div className="container">
        <Title
          headline="Exclusive Lead Generation Pricing"
          containerClass="text-center"
          subHeading="Get Qualified Janitorial Appointments & Commercial Cleaning Leads"
        />
        <div className="flex items-stretch mt-20 gap-2">
          {pricingTiers.map((singlePrice) => {
            const { tier, appointments, features } = singlePrice;
            return (
              <div
                key={appointments}
                className="p-6 border border-gray-300 rounded-md flex-1"
              >
                <div>
                  <h3
                    className={`text-2xl font-semibold tracking-wide`}
                  >
                    {tier}
                  </h3>
                  <p className="text-secondary text-xl mt-2">
                    {appointments} appointments
                  </p>
                  <ul className="mt-16">
                    {features.map((feature, i) => {
                      return (
                        <li
                          key={i}
                          className="mt-2 text-black flex items-center gap-4"
                        >
                          <span className="text-secondary">{`✓`}</span>
                          <span>{feature}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
