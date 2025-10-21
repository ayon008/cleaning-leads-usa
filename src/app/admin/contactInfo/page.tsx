import AllContact from "@/app/Shared/admin/AllContact";
import Title from "@/app/Shared/Title/Title";
import React from "react";

const page = async () => {
  const response = await fetch(
    "https://commercial-cleaning-usa.vercel.app/api/sendinfo",
    { cache: "no-cache" }
  );
  const data = await response.json();
  return (
    <section
      id="contactInfo"
      role="region"
      aria-labelledby="admin-contacts-head"
      aria-describedby="admin-contacts-sub"
      itemScope
      itemType="http://schema.org/WebPage"
    >
      <div className="container md:py-20 py-10">
        <Title
          containerClass="text-center"
          headline="All the Contacts Info"
          subHeading="React them as soon as possible"
          headlineId="admin-contacts-head"
          subHeadingId="admin-contacts-sub"
        />
        <div className="py-10">
          <AllContact data={data} />
        </div>
      </div>
    </section>
  );
};

export default page;
