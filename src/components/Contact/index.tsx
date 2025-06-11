"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import NewsLatterBox from "./NewsLatterBox";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

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
        setTimeout(() => setIsSubmitted(false), 5000); // Hide message after 5s
      } else {
        throw new Error("Form submission failed");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section
      id="contact"
      className="overflow-hidden py-16 md:py-20 lg:py-28"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12 rounded-lg bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Start Your Journey with CypherNXT Labs
              </h2>
              <p className="mb-12 text-base font-medium text-body-color dark:text-body-color-dark">
                Ready to elevate your business with our AdTech, affiliate marketing, or custom software solutions? Submit your details, and our team will reach out within 24 hours.
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
              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your name"
                        required
                        aria-label="Your Name"
                        className="w-full rounded-md border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color focus:border-primary focus:outline-none dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        aria-label="Your Email"
                        className="w-full rounded-md border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color focus:border-primary focus:outline-none dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="company"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Company (Optional)
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Enter your company name"
                        aria-label="Your Company"
                        className="w-full rounded-md border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color focus:border-primary focus:outline-none dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project"
                        required
                        aria-label="Your Message"
                        className="w-full resize-none rounded-md border border-stroke bg-[#f8f8f8] px-6 py-3 text-base text-body-color focus:border-primary focus:outline-none dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:focus:border-primary"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      className="rounded-md bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark"
                    >
                      Get a Free Consultation
                    </button>
                  </div>
                </div>
              </form>
            </motion.div>
          </div>
          <div className="w-full px-4 lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <NewsLatterBox />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;