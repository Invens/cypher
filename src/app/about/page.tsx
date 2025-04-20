import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | CypherNXT Labs – AdTech, Affiliate & Software Solutions",
  description:
    "Learn about CypherNXT Labs – a tech-forward team building scalable AdTech platforms, high-performing affiliate systems, and custom software built for real-world growth.",
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About CypherNXT Labs"
        description="We are a team of passionate technologists, marketers, and engineers building next-gen AdTech platforms, powerful affiliate infrastructures, and scalable software products. At CypherNXT Labs, we combine strategy, data, and innovation to deliver real business impact."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
