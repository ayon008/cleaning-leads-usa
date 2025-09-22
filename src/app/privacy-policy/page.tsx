import Hero from "../Shared/Banner/Hero";
import Title from "../Shared/Title/Title";

const Page = () => {
  return (
    <section id="privacy-policy">
      <Hero
        headline="Our Commitment to Transparency"
        title="Privacy Policy"
        des={
          <>
            Learn how <strong>Cleaning Leads USA</strong> collects, uses, and
            protects your personal information. <br /> We are dedicated to
            keeping your data safe while providing you <br /> with high-quality
            cleaning and janitorial appointment leads.
          </>
        }
      />
      <div className="container py-20">
        <Title
          containerClass="text-left"
          headline="Privacy Policy – Cleaning Leads USA"
          subHeading=" At Cleaning Leads USA, protecting your privacy is a top priority. This
        policy explains what information we collect, how we use it, and the
        measures we take to safeguard your data when you use our services."
        />
        <div>
          <div className="mt-10">
            <h2 className="font-semibold text-2xl">
              1. Information We Collect
            </h2>
            <p className="mt-4">We only collect personal details when you:</p>
            <ul className="list-disc flex flex-col gap-4">
              <li className="ml-10 mt-4">
                Place an order for cleaning or janitorial leads.
              </li>
              <li className="ml-10">
                Fill out a contact form or request support.
              </li>
            </ul>
            <p className="mt-4">
              The types of information we may request include:
            </p>
            <ul className="list-disc flex flex-col gap-4">
              <li className="ml-10 mt-4">Full name</li>
              <li className="ml-10">Email address</li>
              <li className="ml-10">Mailing address</li>
              <li className="ml-10">Your Business Name</li>
              <li className="ml-10">
                Phone number (by providing it, you consent to receive calls)
              </li>
              <li className="ml-10">
                Payment information (for processing transactions)
              </li>
            </ul>
            <p className="mt-4">
              You may also browse <strong>cleaningleadsusa.com</strong>{" "}
              anonymously without providing personal data.
            </p>
          </div>
          <div className="mt-10">
            <h2 className="font-semibold text-2xl">
              2. How We Use Your Information
            </h2>
            <p className="mt-4">Your information helps us to:</p>
            <ul className="list-disc flex flex-col gap-4">
              <li className="ml-10 mt-4">
                <strong>Personalize your experience</strong> – respond better to
                your specific needs.
              </li>
              <li className="ml-10">
                <strong>Improve our platform</strong> – optimize our services
                based on your feedback.
              </li>
              <li className="ml-10">
                <strong>Enhance customer support</strong> – respond to service
                requests quickly.
              </li>
              <li className="ml-10">
                <strong>Enhance customer support</strong> – respond to service
                requests quickly.
              </li>
              <li className="ml-10">
                <strong>Process transactions securely</strong> – deliver
                purchased appointment leads.
              </li>
              <li className="ml-10">
                <strong>Send important updates</strong> – order confirmations,
                service notifications, and occasional newsletters.
              </li>
            </ul>
            <p className="mt-4">
              Note: You can unsubscribe from promotional emails at any time by
              following the instructions <br /> at the bottom of each email or
              contacting us at <strong>support@cleaningleadsusa.com</strong>
            </p>
          </div>
          <div className="mt-10">
            <h2 className="font-semibold text-2xl">
              3. Safeguarding Your Data
            </h2>
            <p className="mt-4">
              We implement strict security measures to protect your personal
              details, especially during online transactions.
            </p>
            <ul className="list-disc flex flex-col gap-4">
              <li className="ml-10 mt-4">
                <strong>Personalize your experience</strong> – respond better to
                your specific needs.
              </li>
              <li className="ml-10">
                <strong>Improve our platform</strong> – optimize our services
                based on your feedback.
              </li>
              <li className="ml-10">
                <strong>Enhance customer support</strong> – respond to service
                requests quickly.
              </li>
              <li className="ml-10">
                <strong>Enhance customer support</strong> – respond to service
                requests quickly.
              </li>
              <li className="ml-10">
                <strong>Process transactions securely</strong> – deliver
                purchased appointment leads.
              </li>
              <li className="ml-10">
                <strong>Send important updates</strong> – order confirmations,
                service notifications, and occasional newsletters.
              </li>
            </ul>
            <p className="mt-4">
              Note: You can unsubscribe from promotional emails at any time by
              following the instructions <br /> at the bottom of each email or
              contacting us at <strong>support@cleaningleadsusa.com</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
