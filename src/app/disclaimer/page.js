import Breadcrumb from "@/components/Common/Breadcrumb";

const DisclaimerPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Disclaimer"
        description="Please read this disclaimer carefully before using the CypherNXT Labs website."
      />
      <section className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <div className="prose max-w-4xl dark:prose-invert">
            <h2>Disclaimer</h2>
            <p>
              The information provided by CypherNXT Labs is for general
              informational purposes only. All information is provided in good
              faith; however, we make no representation or warranty of any kind.
            </p>

            <h3>External Links</h3>
            <p>
              Our site may contain links to other websites. We are not
              responsible for the content or practices of any third-party sites.
            </p>

            <h3>Limitation of Liability</h3>
            <p>
              CypherNXT Labs will not be liable for any damages arising from
              your use of the site or reliance on any information provided.
            </p>

            <h3>Professional Advice</h3>
            <p>
              Any information provided does not constitute professional advice.
              Always seek advice from a qualified professional for any
              business, legal, or financial decisions.
            </p>

            <p>Last updated: April 20, 2025</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default DisclaimerPage;
