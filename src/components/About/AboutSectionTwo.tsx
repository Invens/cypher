"use client";

import Image from "next/image";

const techStack = [
  {
    name: "Next.js",
    icon: (
      <svg viewBox="0 0 128 128" fill="none" className="h-8 w-8">
        <circle cx="64" cy="64" r="64" fill="#000" />
        <path d="M93 89L54 47h-6v34h6V56l37 43z" fill="#fff" />
      </svg>
    ),
  },
  {
    name: "React",
    icon: (
      <svg viewBox="0 0 128 128" className="h-8 w-8" fill="#61DAFB">
        <circle cx="64" cy="64" r="11.4" />
        <g stroke="#61DAFB" strokeWidth="8" fill="none">
          <ellipse rx="50" ry="20" cx="64" cy="64" transform="rotate(60 64 64)" />
          <ellipse rx="50" ry="20" cx="64" cy="64" transform="rotate(120 64 64)" />
          <ellipse rx="50" ry="20" cx="64" cy="64" />
        </g>
      </svg>
    ),
  },
  {
    name: "Node.js",
    icon: (
      <svg viewBox="0 0 128 128" className="h-8 w-8">
        <path fill="#8CC84B" d="M64 12l52 30v44l-52 30-52-30V42z" />
        <path fill="#fff" d="M76 85V72H52v13h24zm0-27V45H52v13h24z" />
      </svg>
    ),
  },
  {
    name: "Tailwind CSS",
    icon: (
      <svg viewBox="0 0 128 128" className="h-8 w-8">
        <path fill="#38BDF8" d="M64 28c-20 0-30 10-30 30 10-10 20-10 30 0s20 10 30 0c0-20-10-30-30-30zm0 44c-20 0-30 10-30 30 10-10 20-10 30 0s20 10 30 0c0-20-10-30-30-30z" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    icon: (
      <svg viewBox="0 0 128 128" className="h-8 w-8">
        <rect width="128" height="128" fill="#3178C6" />
        <path fill="#fff" d="M37 70h54v10H69v28h-10V80H37zM96 90c-2-3-5-5-8-6s-6-1-9 1l4 6c2-1 4 0 6 1 2 2 1 4-1 6s-5 2-7 0l-4 5c4 4 11 3 15-1 5-5 5-11 1-16z" />
      </svg>
    ),
  },
  {
    name: "Firebase",
    icon: (
      <svg viewBox="0 0 128 128" className="h-8 w-8">
        <path fill="#FFA000" d="M24 104L64 24l40 80z" />
        <path fill="#F57C00" d="M64 24l16 32-16 48L24 104z" />
        <path fill="#FFCA28" d="M64 104l40-24-16-32z" />
      </svg>
    ),
  },
];

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          {/* Image */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="relative mx-auto mb-12 aspect-25/24 max-w-[500px] text-center lg:m-0">
              <Image
                src="/images/about/about-image-2.svg"
                alt="About CypherNXT Labs"
                fill
                className="drop-shadow-three dark:hidden"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="About CypherNXT Labs"
                fill
                className="hidden drop-shadow-three dark:block"
              />
            </div>
          </div>

          {/* Content */}
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl">
                  Full-Stack Engineering
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg">
                  We build modern, robust, and scalable applications using battle-tested tools and frameworks.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl">
                  Cloud-Ready & Optimized
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg">
                  Our systems are optimized for performance and deployment — ready to scale from day one.
                </p>
              </div>
              <div>
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl">
                  Designed for Real-World Impact
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg">
                  Every line of code we write drives business outcomes — faster delivery, better UX, and measurable ROI.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Grid */}
        <div className="mt-16">
          <h4 className="mb-10 text-center text-xl font-semibold text-black dark:text-white sm:text-2xl">
            Technologies We Work With
          </h4>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {techStack.map((tech) => (
              <div
                key={tech.name}
                className="flex flex-col items-center justify-center rounded-md border border-gray-200 bg-white p-4 shadow-sm transition hover:shadow-md dark:border-white/10 dark:bg-white/5"
              >
                {tech.icon}
                <p className="mt-2 text-sm font-medium text-center text-body-color dark:text-white">
                  {tech.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
