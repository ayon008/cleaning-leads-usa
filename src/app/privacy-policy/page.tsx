import Hero from "../Shared/Banner/Hero";
import Title from "../Shared/Title/Title";

export const metadata = {
  title: "Privacy Policy | Cleaning Leads USA",
  description: "Learn how Cleaning Leads USA collects, uses, and protects your personal information. We are committed to data security and transparency in our lead generation services.",
  keywords: "privacy policy, data protection, cleaning leads privacy, GDPR compliance, personal information security, lead generation privacy",
  alternates: {
    canonical: "https://www.cleaningleadsusa.com/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy | Cleaning Leads USA",
    description: "Understand how we collect, use, and protect your personal information. Your privacy and data security are our top priorities.",
    type: "website",
    url: "https://www.cleaningleadsusa.com/privacy-policy",
    siteName: "Cleaning Leads USA",
  },
  twitter: {
    card: "summary",
    title: "Privacy Policy | Cleaning Leads USA",
    description: "Learn how we protect your personal information and maintain data security while providing quality cleaning leads.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const Page = () => {
  return (
    <section id="privacy-policy" itemScope itemType="https://schema.org/WebPage">
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
          headlineId="privacy-policy-heading"
        />
        <div>
          <div className="mt-10">
            <h2 className="font-semibold text-2xl" id="information-collection">
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
            <h2 className="font-semibold text-2xl" id="information-usage">
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
            <h2 className="font-semibold text-2xl" id="data-security">
              3. Safeguarding Your Data
            </h2>
            <p className="mt-4">
              We implement strict security measures to protect your personal
              details, especially during online transactions.
            </p>
            <ul className="list-disc flex flex-col gap-4">
              <li className="ml-10 mt-4">
                Sensitive data (such as credit card information) is transmitted
                via <strong>SSL encryption</strong>.
              </li>
              <li className="ml-10">
                Information is securely stored with payment providers <br /> and
                only accessible by authorized personnel who must keep it
                confidential.
              </li>
            </ul>
          </div>
          <div className="mt-10">
            <h2 className="font-semibold text-2xl" id="cookies">4. Cookies & Tracking</h2>
            <p className="mt-4">Yes, we use cookies</p>
            <p className="mt-4">Cookies help us:</p>
            <ul className="list-disc flex flex-col gap-4">
              <li className="ml-10 mt-4">
                Remember your preferences and shopping cart items.
              </li>
              <li className="ml-10">
                Analyze site traffic and user interactions to improve user
                experience.
              </li>
            </ul>
            <p className="mt-4">
              You may disable cookies in your browser settings, <br /> but some
              site features may not function properly. <br /> Orders can still
              be placed by contacting our support team directly.
            </p>
          </div>
          <div className="mt-10">
            <h2 className="font-semibold text-2xl" id="third-party-sharing">
              5. Sharing Information with Third Parties
            </h2>
            <p className="mt-4">
              We <strong>never sell or trade your personal data.</strong>
            </p>
            <p className="mt-4">We may share limited information only with:</p>
            <ul className="list-disc flex flex-col gap-4">
              <li className="ml-10 mt-4">
                Trusted service providers who help us operate our website and
                deliver leads.
              </li>
              <li className="ml-10">
                Legal authorities, when required to comply with the law or
                protect safety, rights, or property.
              </li>
            </ul>
            <p className="mt-4">
              You may disable cookies in your browser settings, <br /> but some
              site features may not function properly. <br /> Orders can still
              be placed by contacting our support team directly.
            </p>
          </div>
          <div className="mt-10">
            <h2 className="font-semibold text-2xl" id="third-party-links">6. Third-Party Links</h2>
            <p className="mt-4">
              Our website may include links to third-party services or partner
              sites. These external <br /> platforms have their own independent
              privacy policies. <strong>Cleaning Leads USA</strong> is not{" "}
              <br /> responsible for their practices but welcomes feedback
              regarding any linked resources.
            </p>
          </div>
          <div className="mt-10">
            <h2 className="font-semibold text-2xl" id="online-scope">7. Online Privacy Scope</h2>
            <p className="mt-4">
              This privacy policy applies strictly to information collected via
              <strong> cleaningleadsusa.com</strong>. <br /> It does not extend
              to offline interactions.
            </p>
            <p className="mt-4">
              If you sign up through a social media account (e.g., Facebook,
              LinkedIn, Twitter), we may also <br /> access aggregate and
              technical data permitted by that platform.
            </p>
          </div>
          <div className="mt-10">
            <h2 className="font-semibold text-2xl" id="consent">8. Consent</h2>
            <p className="mt-4">
              By using our site, you agree to the terms of this Privacy Policy.
              For any concerns, <br /> please contact our office at: <br />{" "}
              <strong>📞 (646) 583-1385</strong>
              <br />
              <strong>📧 support@cleaningleadsusa.com</strong>
            </p>
          </div>
          <div className="mt-10">
            <h2 className="font-semibold text-2xl" id="policy-updates">9. Policy Updates</h2>
            <p className="mt-4">
              We may update this Privacy Policy from time to time. All revisions
              will be posted <br /> on <strong>cleaningleadsusa.com</strong>, and
              continued use of our services means you accept the updated terms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;