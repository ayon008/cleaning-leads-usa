import React from "react";
import Hero from "../Shared/Banner/Hero";
import Title from "../Shared/Title/Title";
import { AlertTriangle, MoveRightIcon } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | Cleaning Leads USA",
  description: "Review the policies and guidelines for purchasing verified cleaning and janitorial leads from Cleaning Leads USA. Understand our refund policy, data protection, and service terms.",
  keywords: "cleaning leads terms, janitorial leads policy, lead generation terms and conditions, cleaning services agreement, GDPR compliance",
  alternates: {
    canonical: "https://cleaningleadsusa.com/terms-and-conditions",
  },
  openGraph: {
    title: "Terms & Conditions | Cleaning Leads USA",
    description: "Review our terms for purchasing verified cleaning and janitorial leads. Learn about our quality guarantee, refund policy, and data protection practices.",
    type: "website",
    url: "https://cleaningleadsusa.com/terms-and-conditions",
    siteName: "Cleaning Leads USA",
  },
  twitter: {
    card: "summary",
    title: "Terms & Conditions | Cleaning Leads USA",
    description: "Review our terms for purchasing verified cleaning and janitorial leads. Learn about our quality guarantee and refund policy.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const page = () => {
  return (
    <section id="term-and-condition" itemScope itemType="https://schema.org/WebPage">
      <Hero
        title="Terms & Conditions"
        headline="Understand How Our Services Work"
        des="Review the policies and guidelines for purchasing verified cleaning and janitorial leads from Cleaning Leads USA. By using our platform, you agree to these terms."
      />
      <div className="container py-20">
        <Title
          containerClass="text-left"
          headline="Cleaning Leads USA – Terms & Conditions"
          subHeading=""
          headlineId="terms-heading"
        />
        <p>
          At Cleaning Leads USA, we are committed to delivering reliable,
          high-quality janitorial and commercial cleaning appointment leads. By
          purchasing our services, you agree to the terms outlined below.
        </p>
        <div className="mt-10">
          <h2 className="font-semibold text-2xl" id="agreement">A. How Our Agreement Works</h2>
          <ul className="list-disc flex flex-col gap-4">
            <li className="ml-10 mt-4">
              When you place an order through{" "}
              <strong>cleaningleadsusa.com</strong>,<br /> you are offering to
              purchase appointment leads.
            </li>
            <li className="ml-10">
              Once we send you a confirmation email, a binding contract begins.
            </li>
            <li className="ml-10">
              Only individuals 18 years or older may place orders with us.
            </li>
          </ul>
        </div>
        <div className="mt-10">
          <h2 className="font-semibold text-2xl" id="lead-quality">
            B. Your Rights on Lead Quality
          </h2>
          <p className="mt-4">
            We want every client to feel confident about the leads they receive.
            That&apos;s why we allow a <strong>48-hour review window</strong> to flag
            issues.
            <br /> You may request a review only if
          </p>
          <ol className="list-decimal flex flex-col gap-4">
            <li className="ml-10 mt-4 font-semibold">
              Incorrect or Fake Contact Details
              <ul className="list-disc flex flex-col gap-4 font-normal">
                <li className="ml-10 mt-4">
                  Example: disconnected number, wrong person, fake details.
                </li>
                <li className="ml-10">
                  If confirmed, we credit your account for the cost of the lead.
                </li>
              </ul>
            </li>
            <li className="ml-10 font-semibold">
              Leads Outside Your Requested Filters
              <ul className="list-disc flex flex-col gap-4 font-normal">
                <li className="ml-10 mt-4">
                  Example: the lead is not the right decision-maker or does not{" "}
                  <br />
                  fit your chosen criteria.
                </li>
                <li className="ml-10">
                  If validated, we&apos;ll replace or credit that lead.
                </li>
              </ul>
            </li>
          </ol>
        </div>
        <p className="mt-6 flex items-center gap-2" role="note" aria-label="Important notice">
          <AlertTriangle className="text-amber-500" aria-hidden="true" />
          <span>
            If the details are accurate or the issue is due to your own filters,
            credits will not apply.
          </span>
        </p>
        <div className="mt-10">
          <h2 className="font-semibold text-2xl" id="refunds">C. Refund & Credit Process</h2>
          <ul className="list-disc flex flex-col gap-4">
            <li className="ml-10 mt-4">
              All refunds are processed <strong>as account credits</strong> (no
              cash refunds).
            </li>
            <li className="ml-10">
              Review requests are handled by our Quality Assurance Team within
              2–7 business days.
            </li>
            <li className="ml-10">
              All final decisions are made solely by Cleaning Leads USA.
            </li>
          </ul>
        </div>
        <div className="mt-10">
          <h2 className="font-semibold text-2xl" id="privacy">
            D. Data Protection & Privacy
          </h2>
          <p className="mt-4">
            We respect your privacy and fully comply with GDPR requirements.{" "}
            <br />
            You may:
          </p>
          <ul className="list-disc flex flex-col gap-4">
            <li className="ml-10 mt-4">
              Request a copy of personal data we hold about you.
            </li>
            <li className="ml-10">Request erasure of your personal data.</li>
          </ul>
          <p className="mt-4">
            To keep your information secure, we require{" "}
            <strong>proof of identity</strong> and{" "}
            <strong>proof of address</strong> before processing requests. Most
            requests are resolved within <strong>30 days</strong>.
          </p>
        </div>
        <div className="mt-10">
          <h2 className="font-semibold text-2xl" id="data-erasure">
            E. How to Request Data Erasure
          </h2>
          <p className="mt-4">
            When submitting an erasure request, please include:
          </p>
          <ul className="list-disc flex flex-col gap-4">
            <li className="ml-10 mt-4">
              Your full name, address, phone, and email.
            </li>
            <li className="ml-10">
              Proof of ID (passport, driver&apos;s license, etc.).
            </li>
            <li className="ml-10">
              Proof of address (utility bill, bank statement, etc.).
            </li>
            <li className="ml-10">
              The details of the information you wish to have erased.
            </li>
          </ul>
          <p className="mt-4 flex items-start gap-2">
            <span aria-hidden="true">
              <MoveRightIcon />
            </span>
            <span>
              Requests may be denied if erasure conflicts with legal
              obligations, public interest,
              <br /> or compliance requirements under GDPR Article 17(3).
            </span>
          </p>
        </div>
        <div className="mt-10">
          <h2 className="font-semibold text-2xl" id="updates">F. Updates to These Terms</h2>
          <p className="mt-4">
            We may revise our Terms & Conditions from time to time. Updates will
            always <br /> be published on <strong>cleaningleadsusa.com.</strong>{" "}
            By continuing to purchase leads,
            <br /> you agree to the most recent version.
          </p>
        </div>
        <div className="mt-10">
          <h2 className="font-semibold text-2xl" id="legal">G. Legal Framework</h2>
          <ul className="list-disc flex flex-col gap-4">
            <li className="ml-10 mt-4">
              These Terms & Conditions are governed by <strong>U.S. law</strong>
              .
            </li>
            <li className="ml-10">
              Jurisdiction lies exclusively in{" "}
              <strong>the State of New York</strong>.
            </li>
          </ul>
        </div>
        <div className="mt-10">
          <h2 className="font-semibold text-2xl" id="final-agreement">H. Final Agreement</h2>
          <p className="mt-4">
            By purchasing appointment leads from{" "}
            <strong>Cleaning Leads USA</strong>,<br /> you acknowledge and
            accept these Terms & Conditions.
          </p>
          <p className="mt-4">
            We thank you for choosing us to power your growth with <br />
            <strong>qualified cleaning and janitorial leads</strong>.
          </p>
        </div>
      </div>
    </section>
  );
};

export default page;