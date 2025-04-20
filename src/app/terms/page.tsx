import Breadcrumb from "@/components/Common/Breadcrumb";

const TermsPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Terms & Conditions"
        description="Please read the terms and conditions carefully before using CypherNXT Labs' website and services."
      />
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="prose max-w-4xl dark:prose-invert">
            <h2>Terms and Conditions</h2>
            <p>
              These terms govern your use of our website and services. By
              accessing or using CypherNXT Labs, you agree to be bound by
              these terms.
            </p>

            <h3>Use of Services</h3>
            <p>
              You may not use our services for any unlawful purpose. You agree
              not to reproduce, duplicate, or resell our products or services
              without permission.
            </p>

            <h3>Intellectual Property</h3>
            <p>
              All content on our website is the property of CypherNXT Labs and
              may not be copied or reused without permission.
            </p>

            <h3>Termination</h3>
            <p>
              We reserve the right to terminate access to our services for any
              user who violates these terms.
            </p>

            <h3>Changes to Terms</h3>
            <p>
              We may update these terms at any time. Continued use of the site
              means you accept the new terms.
            </p>

            <p>Last updated: April 20, 2025</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsPage;
