"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import VideoModal from "@/components/video-modal";
import SectionTitle from "../Common/SectionTitle";

export default function Video() {
  const [isOpen, setOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
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
    <>
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
              title="We Are Ready to Help You Grow"
              paragraph="At CypherNXT Labs, we empower digital businesses with transformative AdTech, smart affiliate systems, and software innovations. Whether you're launching or scaling, we're here to build your next breakthrough."
              center
              mb="80px"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative overflow-hidden"
        >
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[770px] overflow-hidden rounded-md">
                <div className="relative aspect-video items-center justify-center">
                  <Image
                    src="/images/video/image.png"
                    alt="CypherNXT Labs video preview"
                    className="object-cover"
                    fill
                    priority
                  />
                  <div className="absolute top-0 right-0 flex h-full w-full items-center justify-center">
                    <button
                      aria-label="video play button"
                      onClick={() => setOpen(true)}
                      className="text-primary flex h-[70px] w-[70px] items-center justify-center rounded-full bg-white/75 backdrop-blur-sm shadow-lg transition hover:bg-white"
                    >
                      <svg
                        width="16"
                        height="18"
                        viewBox="0 0 16 18"
                        className="fill-current"
                      >
                        <path d="M15.5 8.13397C16.1667 8.51888 16.1667 9.48112 15.5 9.86602L2 17.6603C1.33333 18.0452 0.499999 17.564 0.499999 16.7942L0.5 1.20577C0.5 0.43597 1.33333 -0.0451549 2 0.339745L15.5 8.13397Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mouse-Animated Background */}
          <div
            ref={backgroundRef}
            className="pointer-events-none absolute right-0 bottom-0 left-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat transition-all duration-300 ease-out"
          />
        </motion.div>
      </section>

      <VideoModal
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        channel="youtube"
        videoId="L61p2uyiMSo"
      />
    </>
  );
}
