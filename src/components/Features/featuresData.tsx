import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg width="40" height="41" viewBox="0 0 40 41" className="fill-current">
        <path opacity="0.5" d="M37.7778 40.2223H24C22.8954 40.2223 22 39.3268 22 38.2223V20.0001C22 18.8955 22.8954 18.0001 24 18.0001H37.7778C38.8823 18.0001 39.7778 18.8955 39.7778 20.0001V38.2223C39.7778 39.3268 38.8823 40.2223 37.7778 40.2223Z" />
        <path d="M23.2222 0C22.6699 0 22.2222 0.447715 22.2222 1V12.3333C22.2222 12.8856 22.6699 13.3333 23.2222 13.3333H39C39.5523 13.3333 40 12.8856 40 12.3333V1C40 0.447715 39.5523 0 39 0H23.2222ZM0 39C0 39.5523 0.447715 40 1 40H16.7778C17.3301 40 17.7778 39.5523 17.7778 39V27.6667C17.7778 27.1144 17.3301 26.6667 16.7778 26.6667H1C0.447716 26.6667 0 27.1144 0 27.6667V39Z" />
      </svg>
    ),
    title: "AdTech Solutions",
    paragraph:
      "We engineer smart, scalable advertising technologies tailored for real-time performance and ROI. From DSPs to audience segmentation and analytics—our AdTech stack is built for the future.",
  },
  {
    id: 2,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M10 20L18 28L30 12" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    ),
    title: "Affiliate Marketing Solutions",
    paragraph:
      "We build and manage high-impact affiliate programs that grow revenue and expand reach. Whether you're starting from scratch or scaling an existing program, we’ve got the tech and talent to make it thrive.",
  },
  {
    id: 3,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <rect x="4" y="4" width="32" height="32" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M12 16H28M12 24H28" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Custom Software Development",
    paragraph:
      "From MVPs to enterprise solutions, our dev team crafts scalable, secure, and sleek software products tailored to your business goals.",
  },
  {
    id: 4,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M20 10V20L28 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Marketing Automation",
    paragraph:
      "Automate your marketing funnel with intelligent email sequences, CRM integrations, retargeting flows, and behavior-based actions that convert leads into loyal customers.",
  },
  {
    id: 5,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <rect x="6" y="6" width="28" height="28" rx="4" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M12 28V16H18V28H12ZM22 28V12H28V28H22Z" fill="currentColor" />
      </svg>
    ),
    title: "Data Analytics & BI",
    paragraph:
      "Unlock the power of your data through actionable insights, predictive models, and interactive dashboards that drive smarter business decisions.",
  },
  {
    id: 6,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path d="M10 10H30V30H10V10Z" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M10 16H30" stroke="currentColor" strokeWidth="2" />
        <circle cx="15" cy="13" r="1.5" fill="currentColor" />
        <circle cx="20" cy="13" r="1.5" fill="currentColor" />
        <circle cx="25" cy="13" r="1.5" fill="currentColor" />
      </svg>
    ),
    title: "Web & App Development",
    paragraph:
      "We design and develop fast, responsive websites and mobile apps tailored for scale, performance, and a top-tier user experience.",
  },
  {
    id: 7,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path d="M20 5V35M5 20H35" stroke="currentColor" strokeWidth="2" />
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    ),
    title: "Performance Marketing",
    paragraph:
      "ROI-focused digital advertising across PPC, social media, native ads, and influencer campaigns. We drive traffic that converts.",
  },
  {
    id: 8,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path d="M10 10H30V30H10V10Z" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M20 10V30" stroke="currentColor" strokeWidth="2" />
        <path d="M10 20H30" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    title: "Platform Integrations & APIs",
    paragraph:
      "Connect all your systems seamlessly with powerful APIs, third-party integrations, and automation workflows that boost productivity.",
  },
  {
    id: 9,
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M12 18H28V22H12V18Z" fill="currentColor" />
        <path d="M18 12H22V28H18V12Z" fill="currentColor" />
      </svg>
    ),
    title: "White-Label SaaS Solutions",
    paragraph:
      "Scale faster by reselling our tech under your brand. We provide rebrandable affiliate platforms, ad tools, and SaaS products with full support.",
  },
];

export default featuresData;
