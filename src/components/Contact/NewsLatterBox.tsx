"use client";

import { useState } from "react";
import { useTheme } from "next-themes";

const NewsLatterBox = () => {
  const { theme } = useTheme();
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  return (
    <div className="shadow-three dark:bg-gray-dark relative z-10 rounded-xs bg-white p-8 sm:p-11 lg:p-8 xl:p-11">
      <h3 className="mb-4 text-2xl leading-tight font-bold text-black dark:text-white">
        Subscribe to CypherNXT Insights
      </h3>
      <p className="text-body-color mb-11 border-b border-body-color/25 pb-11 text-base leading-relaxed dark:border-white/25">
        Get updates on AdTech, affiliate strategies, and software innovation.
        No spam. Just useful insights delivered straight to your inbox.
      </p>

      {/* Newsletter Form */}
      <form
        action="https://formspree.io/f/xwplgzde" // replace with your Formspree endpoint
        method="POST"
        onSubmit={() => setStatus("success")}
      >
        <input
          type="text"
          name="name"
          required
          placeholder="Your name"
          className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary mb-4 w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Your email"
          className="border-stroke text-body-color focus:border-primary dark:text-body-color-dark dark:shadow-two dark:focus:border-primary mb-4 w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base outline-hidden dark:border-transparent dark:bg-[#2C303B] dark:focus:shadow-none"
        />
        <input
          type="submit"
          value="Subscribe"
          className="bg-primary shadow-submit hover:bg-primary/90 dark:shadow-submit-dark mb-5 flex w-full cursor-pointer items-center justify-center rounded-xs px-9 py-4 text-base font-medium text-white duration-300"
        />
      </form>

      {status === "success" && (
        <p className="text-green-600 dark:text-green-400 text-center text-sm mt-2">
          ✅ Thank you! You’re now subscribed.
        </p>
      )}

      <p className="text-body-color dark:text-body-color-dark text-center text-base leading-relaxed mt-5">
        We respect your privacy — unsubscribe anytime.
      </p>

      {/* Decorative SVGs */}
      {/* (Keep all your original SVGs here - unchanged from your code above) */}
    </div>
  );
};

export default NewsLatterBox;
