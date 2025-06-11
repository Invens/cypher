"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import SectionTitle from "../Common/SectionTitle";

export default function ServicesSection() {
  const sectionRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const offsetX = (clientX / innerWidth - 0.5) * 30;
      const offsetY = (clientY / innerHeight - 0.5) * 30;

      if (backgroundRef.current) {
        backgroundRef.current.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
      }
    };

    const section = sectionRef.current;
    section?.addEventListener("mousemove", handleMouseMove);

    return () => {
      section?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 py-16 md:py-20 lg:py-28 overflow-hidden"
    >
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <SectionTitle
            title="Transform Your Business with CypherNXT Labs"
            paragraph="We deliver innovative AdTech solutions, smart affiliate marketing strategies, and custom software development to help your business thrive in the digital age."
            center
            mb="80px"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[770px] text-center">
                <h3 className="mb-6 text-2xl font-semibold text-black dark:text-white sm:text-3xl">
                  Our Expertise, Your Success
                </h3>
                <p className="mb-8 text-base leading-relaxed text-body-color dark:text-body-color-dark sm:text-lg">
                  At CypherNXT Labs, we combine creativity, technology, and data-driven strategies to empower businesses. Whether you need a high-performance ad campaign, a scalable affiliate network, or bespoke software, we’ve got you covered.
                </p>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
                    <svg
                      className="w-8 h-8 mb-4 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 2a8 8 0 00-8 8c0 4.418 3.582 8 8 8s8-3.582 8-8a8 8 0 00-8-8zm0 14a6 6 0 110-12 6 6 0 010 12zm3-6a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <h4 className="mb-2 text-xl font-semibold text-black dark:text-white">
                      AdTech Solutions
                    </h4>
                    <p className="text-body-color dark:text-body-color-dark">
                      Maximize ROI with targeted ad campaigns powered by advanced analytics and real-time optimization.
                    </p>
                  </div>
                  <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
                    <svg
                      className="w-8 h-8 mb-4 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13 7H7v6h6V7zm-3 8a1 1 0 01-1-1v-1h2v1a1 1 0 01-1 1zm5-5h1v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6h1v-2a5 5 0 0110 0v2zm-1-2v-2a4 4 0 10-8 0v2h8z" />
                    </svg>
                    <h4 className="mb-2 text-xl font-semibold text-black dark:text-white">
                      Affiliate Marketing
                    </h4>
                    <p className="text-body-color dark:text-body-color-dark">
                      Build high-converting affiliate networks with our smart, scalable strategies tailored to your goals.
                    </p>
                  </div>
                  <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
                    <svg
                      className="w-8 h-8 mb-4 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M2 3a1 1 0 011-1h14a1 1 0 011 1v14a1 1 0 01-1 1H3a1 1 0 01-1-1V3zm3 2v10h10V5H5zm2 2h6v6H7V7z" />
                    </svg>
                    <h4 className="mb-2 text-xl font-semibold text-black dark:text-white">
                      Custom Software
                    </h4>
                    <p className="text-body-color dark:text-body-color-dark">
                      Develop robust, scalable apps and platforms designed to meet your unique business needs.
                    </p>
                  </div>
                </div>
                <div className="mt-12">
                  <Link
                    href="#contact"
                    className="inline-block rounded bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                  >
                    Get in Touch
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Mouse-Animated Background */}
          <div
            ref={backgroundRef}
            className="pointer-events-none absolute right-0 bottom-0 left-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat opacity-80 transition-all duration-300 ease-out"
          />
        </motion.div>
      </div>
    </section>
  );
}