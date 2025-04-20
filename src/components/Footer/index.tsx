"use client";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-white pt-16 dark:bg-gray-dark md:pt-20 lg:pt-24">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          {/* Company Info */}
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
            <div className="mb-12 max-w-[360px] lg:mb-16">
              <Link href="/" className="mb-8 inline-block">
                <Image
                  src="/images/logo/logo.png"
                  alt="CypherNXT Labs"
                  className="w-full dark:hidden"
                  width={140}
                  height={30}
                />
                <Image
                  src="/images/logo/logo.png"
                  alt="CypherNXT Labs"
                  className="hidden w-full dark:block"
                  width={140}
                  height={30}
                />
              </Link>
              <p className="mb-9 text-base leading-relaxed text-body-color dark:text-body-color-dark">
                CypherNXT Labs builds next-gen AdTech platforms, performance-driven affiliate marketing systems, and scalable software tailored for growth-focused businesses.
              </p>
              <div className="flex items-center space-x-4">
                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-body-color hover:text-primary dark:text-body-color-dark">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-body-color hover:text-primary dark:text-body-color-dark">
                  <i className="fab fa-linkedin-in text-xl"></i>
                </a>
                <a href="https://github.com" target="_blank" rel="noreferrer" className="text-body-color hover:text-primary dark:text-body-color-dark">
                  <i className="fab fa-github text-xl"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-6 text-xl font-bold text-black dark:text-white">
                Company
              </h2>
              <ul>
                <li>
                  <Link href="/about" className="mb-4 block text-base text-body-color hover:text-primary dark:text-body-color-dark">
                    About Us
                  </Link>
                </li>
                <li>
                  {/* <Link href="/services" className="mb-4 block text-base text-body-color hover:text-primary dark:text-body-color-dark">
                    Services
                  </Link> */}
                </li>
                <li>
                  {/* <Link href="/careers" className="mb-4 block text-base text-body-color hover:text-primary dark:text-body-color-dark">
                    Careers
                  </Link> */}
                </li>
              </ul>
            </div>
          </div>

          {/* Resources */}
          {/* <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-6 text-xl font-bold text-black dark:text-white">
                Resources
              </h2>
              <ul>
                <li>
                  <Link href="/blog" className="mb-4 block text-base text-body-color hover:text-primary dark:text-body-color-dark">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/case-studies" className="mb-4 block text-base text-body-color hover:text-primary dark:text-body-color-dark">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="mb-4 block text-base text-body-color hover:text-primary dark:text-body-color-dark">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div> */}

          {/* Legal */}
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
            <div className="mb-12 lg:mb-16">
              <h2 className="mb-6 text-xl font-bold text-black dark:text-white">
                Legal
              </h2>
              <ul>
                <li>
                  <Link href="/privacy" className="mb-4 block text-base text-body-color hover:text-primary dark:text-body-color-dark">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="mb-4 block text-base text-body-color hover:text-primary dark:text-body-color-dark">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link href="/disclaimer" className="mb-4 block text-base text-body-color hover:text-primary dark:text-body-color-dark">
                    Disclaimer
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="h-px w-full bg-linear-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>

        <div className="py-8">
          <p className="text-center text-base text-body-color dark:text-white">
            © {new Date().getFullYear()} CypherNXT Labs. All rights reserved. Built with ❤️ using Next.js.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
