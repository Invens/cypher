"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const Services = () => {
  const sectionRef = useRef(null);
  const bgTopRef = useRef(null);
  const bgBottomRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const offsetX = (clientX / innerWidth - 0.5) * 30;
      const offsetY = (clientY / innerHeight - 0.5) * 30;

      if (bgTopRef.current) {
        bgTopRef.current.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      }

      if (bgBottomRef.current) {
        bgBottomRef.current.style.transform = `translate(${-offsetX}px, ${-offsetY}px)`;
      }
    };

    const section = sectionRef.current;
    section?.addEventListener("mousemove", handleMouseMove);

    return () => {
      section?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("https://formspree.io/f/xwplgzde", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", company: "", message: "" });
        setTimeout(() => setIsSubmitted(false), 5000);
      } else {
        throw new Error("Form submission failed");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative z-10 overflow-hidden bg-white py-16 dark:bg-gray-dark md:py-20 lg:py-28"
    >
      <div className="container">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl md:text-5xl">
            Transform Your Business with CypherNXT Labs
          </h1>
          <p className="mx-auto max-w-[800px] text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg md:text-xl">
            At CypherNXT Labs, we deliver cutting-edge AdTech solutions, scalable affiliate marketing strategies, and bespoke software development to drive your digital success. Partner with us to unlock your business’s full potential.
          </p>
        </motion.div>

        {/* What We Do */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="mb-6 text-2xl font-bold text-black dark:text-white sm:text-3xl">
            What We Do
          </h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
              <svg
                className="w-10 h-10 mb-4 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a8 8 0 00-8 8c0 4.418 3.582 8 8 8s8-3.582 8-8a8 8 0 00-8-8zm0 14a6 6 0 110-12 6 6 0 010 12zm3-6a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                AdTech Solutions
              </h3>
              <p className="mb-4 text-base text-body-color dark:text-body-color-dark">
                Our AdTech solutions harness advanced analytics, programmatic advertising, and real-time optimization to deliver high-ROI campaigns across multiple channels. From display ads to video and native advertising, we ensure your brand reaches the right audience at the right time.
              </p>
              <ul className="space-y-2 text-base text-body-color dark:text-body-color-dark">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Real-time bidding (RTB) and programmatic ads
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Cross-device and cross-platform targeting
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Advanced audience segmentation
                </li>
              </ul>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
              <svg
                className="w-10 h-10 mb-4 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M13 7H7v6h6V7zm-3 8a1 1 0 01-1-1v-1h2v1a1 1 0 01-1 1zm5-5h1v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6h1v-2a5 5 0 0110 0v2zm-1-2v-2a4 4 0 10-8 0v2h8z" />
              </svg>
              <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                Affiliate Marketing
              </h3>
              <p className="mb-4 text-base text-body-color dark:text-body-color-dark">
                Our affiliate marketing services connect you with high-value partners to drive conversions and revenue. We design and manage scalable networks, optimize performance, and provide detailed analytics to ensure your campaigns deliver measurable results.
              </p>
              <ul className="space-y-2 text-base text-body-color dark:text-body-color-dark">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Partner recruitment and management
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Conversion-driven campaign strategies
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Transparent performance tracking
                </li>
              </ul>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
              <svg
                className="w-10 h-10 mb-4 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M2 3a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V3zm3 2v10h10V5H5zm2 2h6v6H7V7z" />
              </svg>
              <h3 className="mb-4 text-xl font-semibold text-black dark:text-white">
                Custom Software Development
              </h3>
              <p className="mb-4 text-base text-body-color dark:text-body-color-dark">
                We build bespoke software solutions, from web platforms to mobile apps, tailored to your business needs. Our team delivers scalable, secure, and user-friendly applications that drive efficiency and growth.
              </p>
              <ul className="space-y-2 text-base text-body-color dark:text-body-color-dark">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Full-stack web and mobile development
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Cloud-based scalable architectures
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                  </svg>
                  Third-party API integrations
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Why Choose Us */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="mb-6 text-2xl font-bold text-black dark:text-white sm:text-3xl">
            Why Choose CypherNXT Labs
          </h2>
          <p className="mb-8 text-base text-body-color dark:text-body-color-dark sm:text-lg">
            At CypherNXT Labs, we combine innovation, expertise, and a client-first approach to deliver transformative results. Our team of strategists, developers, and marketers is dedicated to helping you achieve your business goals.
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="flex items-start">
              <svg
                className="w-8 h-8 mr-4 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm-1-5h2v4H9v-4zm0-3h2v2H9V8z" />
              </svg>
              <div>
                <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">
                  Proven Expertise
                </h4>
                <p className="text-base text-body-color dark:text-body-color-dark">
                  With years of experience in AdTech, affiliate marketing, and software development, we deliver solutions that work.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <svg
                className="w-8 h-8 mr-4 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm-1 1h2v-4H9v4zm0-7h2V6H9v4z" />
              </svg>
              <div>
                <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">
                  Data-Driven Results
                </h4>
                <p className="text-base text-body-color dark:text-body-color-dark">
                  We leverage analytics and insights to optimize campaigns and software, ensuring maximum ROI.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <svg
                className="w-8 h-8 mr-4 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm-1-5h2v4H9v-4zm0-3h2v2H9V8z" />
              </svg>
              <div>
                <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">
                  Tailored Solutions
                </h4>
                <p className="text-base text-body-color dark:text-body-color-dark">
                  Every project is customized to meet your unique business needs and goals.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <svg
                className="w-8 h-8 mr-4 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12zm-1 1h2v-4H9v4zm0-7h2V6H9v4z" />
              </svg>
              <div>
                <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">
                  24/7 Support
                </h4>
                <p className="text-base text-body-color dark:text-body-color-dark">
                  Our dedicated support team is available around the clock to ensure your success.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Who We Serve */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="mb-6 text-2xl font-bold text-black dark:text-white sm:text-3xl">
            Who We Serve
          </h2>
          <p className="mb-8 text-base text-body-color dark:text-body-color-dark sm:text-lg">
            We partner with businesses across industries to deliver solutions that drive growth. Our clients range from startups to enterprises, all seeking innovative digital strategies.
          </p>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <li className="flex items-center text-base text-body-color dark:text-body-color-dark">
              <svg
                className="w-5 h-5 mr-2 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
              </svg>
              E-commerce & Retail
            </li>
            <li className="flex items-center text-base text-body-color dark:text-body-color-dark">
              <svg
                className="w-5 h-5 mr-2 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
              </svg>
              FinTech & Finance
            </li>
            <li className="flex items-center text-base text-body-color dark:text-body-color-dark">
              <svg
                className="w-5 h-5 mr-2 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
              </svg>
              Healthcare & Wellness
            </li>
            <li className="flex items-center text-base text-body-color dark:text-body-color-dark">
              <svg
                className="w-5 h-5 mr-2 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
              </svg>
              Gaming & Entertainment
            </li>
            <li className="flex items-center text-base text-body-color dark:text-body-color-dark">
              <svg
                className="w-5 h-5 mr-2 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
              </svg>
              Travel & Hospitality
            </li>
            <li className="flex items-center text-base text-body-color dark:text-body-color-dark">
              <svg
                className="w-5 h-5 mr-2 text-primary"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
              </svg>
              Education & EdTech
            </li>
          </ul>
        </motion.div>

        {/* Technologies We Use */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="mb-6 text-2xl font-bold text-black dark:text-white sm:text-3xl">
            Technologies We Use
          </h2>
          <p className="mb-8 text-base text-body-color dark:text-body-color-dark sm:text-lg">
            We leverage industry-leading technologies to build robust, scalable, and high-performance solutions tailored to your needs.
          </p>
          <div className="space-y-8">
            <div>
              <h4 className="mb-4 text-lg font-semibold text-black dark:text-white">
                AdTech Solutions
              </h4>
              <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                <li className="text-base text-body-color dark:text-body-color-dark">Google Ads</li>
                <li className="text-base text-body-color dark:text-body-color-dark">The Trade Desk</li>
                <li className="text-base text-body-color dark:text-body-color-dark">Adobe Advertising Cloud</li>
                <li className="text-base text-body-color dark:text-body-color-dark">Google Marketing Platform</li>
                <li className="text-base text-body-color dark:text-body-color-dark">Data Management Platforms (DMPs)</li>
                <li className="text-base text-body-color dark:text-body-color-dark">Python for Data Analysis</li>
                <li className="text-base text-body-color dark:text-body-color-dark">Tableau for Visualization</li>
                <li className="text-base text-body-color dark:text-body-color-dark">Amazon Advertising</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-lg font-semibold text-black dark:text-white">
                Affiliate Marketing
              </h4>
              <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                <li className="text-base text-body-color dark:text-body-color-dark">CJ Affiliate</li>
                <li className="text-base text-body-color dark:text-body-color-dark">Impact Radius</li>
                <li className="text-base text-body-color dark:text-body-color-dark">Rakuten Advertising</li>
                <li className="text-base text-body-color dark:text-body-color-dark">ShareASale</li>
                <li className="text-base text-body-color dark:text-body-color-dark">Custom Tracking Systems</li>
                <li className="text-base text-body-color dark:text-body-color-dark">Google Analytics</li>
                <li className="text-base text-body-color dark:text-body-color-dark">AffiliateWP</li>
                <li className="text-base text-body-color dark:text-body-color-dark">Post Affiliate Pro</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 text-lg font-semibold text-black dark:text-white">
                Custom Software Development
              </h4>
              <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
                <li className="text-base text-body-color dark:text-body-color-dark">React.js</li>
                <li className="text-base text-body-color dark:text-body-color-dark">Next.js</li>
                <li className="text-base text-body-color dark:text-body-color-dark">Node.js</li>
                <li className="text-base text-body-color dark:text-body-color-dark">Express.js</li>
                <li className="text-base text-body-color dark:text-body-color-dark">TypeScript</li>
                <li className="text-base text-body-color dark:text-body-color-dark">AWS</li>
                <li className="text-base text-body-color dark:text-body-color-dark">Docker</li>
                <li className="text-base text-body-color dark:text-body-color-dark">MongoDB</li>
                <li className="text-base text-body-color dark:text-body-color-dark">PostgreSQL</li>
                <li className="text-base text-body-color dark:text-body-color-dark">GraphQL</li>
                <li className="text-base text-body-color dark:text-body-color-dark">Flutter</li>
                <li className="text-base text-body-color dark:text-body-color-dark">React Native</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Our Process */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="mb-6 text-2xl font-bold text-black dark:text-white sm:text-3xl">
            Our Process
          </h2>
          <p className="mb-8 text-base text-body-color dark:text-body-color-dark sm:text-lg">
            We follow a structured, transparent process to ensure every project is delivered on time, within budget, and to the highest standards.
          </p>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                1
              </div>
              <div>
                <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">
                  Discovery & Planning
                </h4>
                <p className="text-base text-body-color dark:text-body-color-dark">
                  We start by understanding your goals, challenges, and requirements. Our team conducts in-depth research and creates a detailed project roadmap.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                2
              </div>
              <div>
                <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">
                  Design & Prototyping
                </h4>
                <p className="text-base text-body-color dark:text-body-color-dark">
                  We create wireframes and prototypes to visualize the solution, ensuring alignment with your vision before development begins.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                3
              </div>
              <div>
                <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">
                  Development & Implementation
                </h4>
                <p className="text-base text-body-color dark:text-body-color-dark">
                  Our developers build the solution using agile methodologies, with regular updates and feedback loops to ensure quality.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                4
              </div>
              <div>
                <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">
                  Testing & Optimization
                </h4>
                <p className="text-base text-body-color dark:text-body-color-dark">
                  We rigorously test the solution for performance, security, and usability, making optimizations as needed.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-white">
                5
              </div>
              <div>
                <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">
                  Launch & Support
                </h4>
                <p className="text-base text-body-color dark:text-body-color-dark">
                  We deploy the solution and provide ongoing support, including maintenance, updates, and performance monitoring.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* How We Market */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="mb-6 text-2xl font-bold text-black dark:text-white sm:text-3xl">
            How We Market
          </h2>
          <p className="mb-8 text-base text-body-color dark:text-body-color-dark sm:text-lg">
            Our marketing strategies are designed to maximize reach, engagement, and conversions. We combine creativity, data, and technology to deliver campaigns that resonate with your audience.
          </p>
          <div className="space-y-6">
            <div>
              <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">
                Audience Research
              </h4>
              <p className="text-base text-body-color dark:text-body-color-dark">
                We analyze your target audience’s behavior, preferences, and demographics to create highly targeted campaigns.
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">
                Multi-Channel Campaigns
              </h4>
              <p className="text-base text-body-color dark:text-body-color-dark">
                We deploy campaigns across channels like search, social media, email, and affiliate networks to maximize reach.
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">
                Content Creation
              </h4>
              <p className="text-base text-body-color dark:text-body-color-dark">
                Our team crafts compelling content, from ad copy to landing pages, designed to engage and convert.
              </p>
            </div>
            <div>
              <h4 className="mb-2 text-lg font-semibold text-black dark:text-white">
                Performance Optimization
              </h4>
              <p className="text-base text-body-color dark:text-body-color-dark">
                We continuously monitor and optimize campaigns using A/B testing, analytics, and machine learning to improve results.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Lead Generation Form */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-[600px] rounded-lg bg-white p-8 shadow-lg dark:bg-gray-800"
        >
          <h2 className="mb-4 text-2xl font-bold text-black dark:text-white sm:text-3xl">
            Get a Free Consultation
          </h2>
          <p className="mb-6 text-base text-body-color dark:text-body-color-dark">
            Ready to elevate your business with our expertise? Fill out the form below, and our team will reach out within 24 hours to discuss your needs.
          </p>
          {isSubmitted && (
            <div className="mb-6 rounded bg-green-100 p-4 text-green-800 dark:bg-green-900 dark:text-green-200">
              Thank you! Your message has been sent successfully.
            </div>
          )}
          {error && (
            <div className="mb-6 rounded bg-red-100 p-4 text-red-800 dark:bg-red-900 dark:text-red-200">
              Error: {error}. Please try again.
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-body-color dark:text-body-color-dark">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                aria-label="Your Name"
                className="w-full rounded-md border border-gray-300 p-3 text-black focus:border-primary focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-body-color dark:text-body-color-dark">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                aria-label="Your Email"
                className="w-full rounded-md border border-gray-300 p-3 text-black focus:border-primary focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-body-color dark:text-body-color-dark">
                Company (Optional)
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                aria-label="Your Company"
                className="w-full rounded-md border border-gray-300 p-3 text-black focus:border-primary focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                placeholder="Your Company"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-body-color dark:text-body-color-dark">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                aria-label="Your Message"
                className="w-full rounded-md border border-gray-300 p-3 text-black focus:border-primary focus:outline-none dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                placeholder="Tell us about your project"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-primary px-6 py-3 text-base font-medium text-white duration-300 hover:bg-primary/90"
            >
              Get a Free Consultation
            </button>
          </form>
        </motion.div>
      </div>

      {/* TOP BACKGROUND SVG */}
      <div
        ref={bgTopRef}
        className="pointer-events-none absolute right-0 top-0 z-[-1] opacity-80 transition-all duration-300 ease-out"
      >
        <svg
          width="450"
          height="556"
          viewBox="0 0 450 556"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="277" cy="63" r="225" fill="url(#paint0_linear)" />
          <circle cx="18" cy="182" r="18" fill="url(#paint1_radial)" />
          <circle cx="77" cy="288" r="34" fill="url(#paint2_radial)" />
          <circle
            opacity="0.8"
            cx="325.486"
            cy="302.87"
            r="180"
            transform="rotate(-37.6852 325.486 302.87)"
            fill="url(#paint3_linear)"
          />
          <circle
            opacity="0.8"
            cx="184.521"
            cy="315.521"
            r="132.862"
            transform="rotate(114.874 184.521 315.521)"
            stroke="url(#paint4_linear)"
          />
          <circle
            opacity="0.8"
            cx="356"
            cy="290"
            r="179.5"
            transform="rotate(-30 356 290)"
            stroke="url(#paint5_linear)"
          />
          <circle
            opacity="0.8"
            cx="191.659"
            cy="302.659"
            r="133.362"
            transform="rotate(133.319 191.659 302.659)"
            fill="url(#paint6_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="-54.5"
              y1="-178"
              x2="222"
              y2="288"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <radialGradient
              id="paint1_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(18 182) rotate(90) scale(18)"
            >
              <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
            </radialGradient>
            <radialGradient
              id="paint2_radial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(77 288) rotate(90) scale(34)"
            >
              <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
            </radialGradient>
            <linearGradient
              id="paint3_linear"
              x1="226.775"
              y1="-66.1548"
              x2="292.157"
              y2="351.421"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint4_linear"
              x1="184.521"
              y1="182.159"
              x2="184.521"
              y2="448.882"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint5_linear"
              x1="356"
              y1="110"
              x2="356"
              y2="470"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint6_linear"
              x1="118.524"
              y1="29.2497"
              x2="166.965"
              y2="338.63"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" />
              <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* BOTTOM BACKGROUND SVG */}
      <div
        ref={bgBottomRef}
        className="pointer-events-none absolute bottom-0 left-0 z-[-1] opacity-80 transition-all duration-300 ease-out"
      >
        <svg
          width="364"
          height="201"
          viewBox="0 0 364 201"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
            stroke="url(#bottom1)"
          />
          <path
            d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
            stroke="url(#bottom2)"
          />
          <circle cx="220" cy="63" r="43" fill="url(#circleRadial)" />
          <defs>
            <linearGradient
              id="bottom1"
              x1="184.389"
              y1="69.2405"
              x2="184.389"
              y2="212.24"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <linearGradient
              id="bottom2"
              x1="156.389"
              y1="69.2405"
              x2="156.389"
              y2="212.24"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#4A6CF7" stopOpacity="0" />
              <stop offset="1" stopColor="#4A6CF7" />
            </linearGradient>
            <radialGradient
              id="circleRadial"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(220 63) rotate(90) scale(43)"
            >
              <stop offset="0.145833" stopColor="white" stopOpacity="0" />
              <stop offset="1" stopColor="white" stopOpacity="0.08" />
            </radialGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default Services;