import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | CypherNXT Labs – Let's Build Something Powerful",
  description:
    "Get in touch with CypherNXT Labs. Whether you're looking for a custom software solution, affiliate platform, or AdTech system, we're here to help.",
  // Add Open Graph, Twitter Card, etc. if needed
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Us"
        description="Let’s connect and create something impactful. Whether you have a project in mind, need strategic consulting, or just want to say hello—our team at CypherNXT Labs is here for you."
      />
      <Contact />
    </>
  );
};

export default ContactPage;
