import Breadcrumb from "@/components/Common/Breadcrumb";

const PrivacyPolicyPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Privacy Policy"
        description="Learn how CypherNXT Labs collects, uses, and protects your personal information when you use our website and services."
      />
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="prose max-w-4xl dark:prose-invert">
            <h2>Privacy Policy</h2>
            <p>
              At CypherNXT Labs, your privacy is very important to us. This
              Privacy Policy explains what personal information we collect,
              how we use it, and your choices regarding your information.
            </p>

            <h3>Information We Collect</h3>
            <ul>
              <li>Contact information (name, email, etc.)</li>
              <li>Usage data (pages visited, time spent)</li>
              <li>Cookies and tracking data</li>
            </ul>

            <h3>How We Use Your Information</h3>
            <p>We may use your information to:</p>
            <ul>
              <li>Provide and improve our services</li>
              <li>Send newsletters or updates you’ve opted into</li>
              <li>Analyze usage and trends to enhance our platform</li>
            </ul>

            <h3>Third-Party Services</h3>
            <p>
              We may use trusted third-party services like analytics or email
              platforms. These providers have their own privacy policies.
            </p>

            <h3>Your Rights</h3>
            <p>
              You have the right to access, update, or delete your personal
              information. Please contact us at support@cyphernxtlabs.com.
            </p>

            <h3>Changes to This Policy</h3>
            <p>
              We may update this policy from time to time. Changes will be
              posted on this page with a revised date.
            </p>

            <p>Last updated: April 20, 2025</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;
