import React from "react";
import Hero from "../Shared/Banner/Hero";
import Title from "../Shared/Title/Title";
import Accordion from "../Shared/Accordion/Accordion";
import PrimaryBtn from "../Shared/Button/PrimaryBtn";

export const metadata = {
  title: "FAQ - Frequently Asked Questions | Cleaning Leads USA",
  description:
    "Find answers to common questions about Cleaning Leads USA's lead generation services, pricing, quality assurance, and how we connect cleaning businesses with qualified commercial clients.",
  keywords:
    "cleaning leads FAQ, commercial cleaning leads questions, lead generation pricing, qualified cleaning leads, appointment setting FAQ, cleaning business leads",
  openGraph: {
    title: "FAQ - Frequently Asked Questions | Cleaning Leads USA",
    description:
      "Get answers about our lead generation services, pricing, quality assurance process, and how we help cleaning businesses grow with verified commercial leads.",
    type: "website",
    url: "https://cleaningleadsusa.com/faq",
    siteName: "Cleaning Leads USA",
  },
  twitter: {
    card: "summary_large_image",
    title: "FAQ - Frequently Asked Questions | Cleaning Leads USA",
    description:
      "Find answers to common questions about our cleaning lead generation services, pricing, and quality assurance process.",
  },
  alternates: {
    canonical: "https://cleaningleadsusa.com/faq",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const faqs = [
  {
    question: "What are qualified leads according to Cleaning Leads USA?",
    answer:
      "Qualified leads are verified prospects actively seeking commercial cleaning services. We ensure authenticity and accuracy through strict validation and a 100% quality assurance process.",
  },
  {
    question: "What areas does Cleaning Leads USA cover?",
    answer:
      "We connect cleaning businesses with facility managers across the United States. Simply share your preferred locations and ZIP codes, and we’ll match you with the right opportunities.",
  },
  {
    question: "What approaches does Cleaning Leads USA use to generate leads?",
    answer:
      "We combine targeted outreach, digital marketing, and verified telemarketing to connect cleaning companies with decision-makers. Our focus is on delivering high-quality, exclusive leads.",
  },
  {
    question:
      "What other services does Cleaning Leads USA provide apart from appointment setting?",
    answer:
      "In addition to lead generation, we offer branding, SEO, digital outreach, proposal preparation, and follow-up services to help cleaning companies grow more efficiently.",
  },
  {
    question: "What strategies are used in telemarketing?",
    answer:
      "Our trained team uses professional and friendly outreach methods, ensuring every call builds trust. We also equip cleaning partners with Q&A guidance for client conversations.",
  },
  {
    question:
      "How is quality assurance maintained? What if appointments aren’t set successfully?",
    answer:
      "Our quality managers verify each lead for accuracy. If targets are not met, we provide replacement leads, credits, or refunds to ensure you get the value you paid for.",
  },
  {
    question: "What's the payment structure and minimum leads purchase?",
    answer:
      "We offer flexible packages starting from as few as 5 confirmed appointments. Larger monthly bundles range from 10 to 50 leads, depending on your business needs.",
  },
  {
    question: "What payment methods are accepted?",
    answer:
      "We accept all major payment methods including Visa, MasterCard, Amex, and PayPal.",
  },
  {
    question: "How is pricing for cleaning services estimated?",
    answer:
      "Pricing depends on facility size, number of rooms, and scope of cleaning. We guide our partners on best practices for quoting services accurately.",
  },
  {
    question: "How do I bid on a commercial cleaning contract?",
    answer:
      "We arrange qualified appointments with decision-makers. You only pay per confirmed appointment, and if any reschedules occur, we ensure proper support and replacement.",
  },
  {
    question:
      "How quickly can I expect results from your lead generation services?",
    answer:
      "Most clients begin seeing results within a few weeks. The exact timeline depends on your service area, goals, and package selection.",
  },
  {
    question:
      "What makes Cleaning Leads USA different from other lead generation companies?",
    answer:
      "We specialize exclusively in the cleaning and janitorial industry, understanding its unique challenges. Our expert team ensures every lead is relevant, qualified, and ready for your services.",
  },
  {
    question: "How do you verify the quality of leads?",
    answer:
      "We use a multi-step vetting process, including verification calls and data validation, to ensure leads are genuine and highly likely to convert.",
  },
  {
    question: "Can your services be customized to my specific needs?",
    answer:
      "Yes. We tailor our lead generation strategies to your business size, service type, and target market. Whether local or nationwide, we create a plan aligned with your goals.",
  },
  {
    question: "How does Cleaning Leads USA handle unqualified leads?",
    answer:
      "We filter out unqualified prospects through a rigorous screening process. If an unqualified lead ever slips through, we promptly replace it at no additional cost.",
  },
  {
    question:
      "Do you provide training or resources to help convert leads into customers?",
    answer:
      "Yes. We provide resources such as proposal templates, sales scripts, and follow-up strategies to help you turn leads into long-term customers.",
  },
];

const page = () => {
  return (
    <section id="faq">
      <Hero
        headline="Got Questions?"
        title="Frequently Asked Questions"
        des={
          <>
            Find quick answers about <strong>Cleaning Leads USA</strong> — from
            how our cleaning leads <br /> work to our refund policy and data
            protection. Contact our team if your question isn’t listed.
          </>
        }
      />
      <div className="container md:pt-20 pt-10">
        <Title
          containerClass="text-center"
          headline="FAQ"
          subHeading=""
          headlineId="faq-heading"
          subHeadingId="Frequently Asked Questions Section"
          aria-label="Frequently Asked Questions Section"
        />
        <Accordion items={faqs} />
      </div>
      <div className="container md:mb-0 mb-10">
        <div className="flex items-center md:flex-row flex-col md:py-6 py-6 rounded-md md:justify-between bg-amber-300 md:px-10 px-6 md:my-10 gap-6">
          <div>
            <h2 className="md:text-3xl text-xl md:text-left text-center font-semibold">
              Get your first appointment just at $99
            </h2>
            <p className="text-base mt-4 md:text-left text-center">
              Would you like to speak with our operations manager directly?
            </p>
          </div>
          <a
            href="tel:+13326004766"
            title="Call Cleaning Leads USA at (332) 600-4766"
            aria-label="Call Cleaning Leads USA at (332) 600-4766 for commercial cleaning leads"
            rel="nofollow"
          >
            <PrimaryBtn text="Call Now" containerClass="" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default page;
