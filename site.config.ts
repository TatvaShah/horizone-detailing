import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Horizone Detailing",
  tagline: "Interior and exterior detailing, wax and ceramic sealant.",
  category: "Auto detailing",
  schemaType: "LocalBusiness",
  area: "Mississauga and the GTA, ON",
  siteUrl: "https://horizone-detailing-ca.vercel.app",

  theme: {
    preset: "barber-bold",
    colors: { accent: "#8a1a1a" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: false,

  hero: {
    eyebrow: "Mississauga and the GTA",
    headline: "Interior and exterior detailing that brings the shine back",
    subhead: "Deep cleaning, wax and ceramic sealant, wheel and tire cleaning, and salt stain removal. Send a message or call to book.",
    images: [
      { src: "/images/post-1.jpg", alt: "A matte black Dodge SRT detailed by Horizone Detailing", width: 1080, height: 1440 },
      { src: "/images/post-5.jpg", alt: "A red Audi detailed by Horizone Detailing", width: 878, height: 1170 },
      { src: "/images/post-8.jpg", alt: "A BMW M850i detailed by Horizone Detailing", width: 1080, height: 1440 },
    ],
    primaryCta: { label: "DM to book", href: "https://ig.me/m/horizone_detailing" },
    secondaryCta: { label: "See the work", href: "#gallery" },
  },

  highlights: [
    "Interior and exterior deep clean",
    "Wax and ceramic sealant",
    "Wheel, tire and salt stain cleaning",
    "Mississauga and the GTA",
  ],

  about: {
    title: "Welcome to Horizone Detailing",
    body: [
      "Horizone Detailing is an auto detailing service in Mississauga and the GTA. Work includes interior and exterior deep cleaning, wax and ceramic sealant, wheel and tire cleaning, and salt stain removal.",
      "Bookings are made by Instagram DM or by calling 647-677-1614.",
    ],
    image: { src: "/images/post-1.jpg", alt: "A matte black Dodge SRT detailed by Horizone Detailing", width: 1080, height: 1440 },
  },

  menu: {
    label: "Services",
    title: "Detailing services",
    variant: "list",
    showPrices: false,
    priceNote: "Send a DM or call to ask about current pricing and availability.",
    groups: [
      {
        title: "Auto detailing",
        items: [
          { name: "Interior deep clean" },
          { name: "Exterior detailing" },
          { name: "Wax and ceramic sealant" },
          { name: "Wheel and tire cleaning" },
          { name: "Salt stain removal" },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent work",
    items: [
      { src: "/images/post-1.jpg", width: 1080, height: 1440, alt: "A matte black Dodge SRT detailed by Horizone Detailing", caption: "Dodge SRT", href: "https://www.instagram.com/p/DfiApErEeev/" },
      { src: "/images/post-2.jpg", width: 1080, height: 1440, alt: "A GMC Sierra HD detailed by Horizone Detailing", caption: "GMC Sierra HD", href: "https://www.instagram.com/p/DfeiAFdCMxE/" },
      { src: "/images/post-5.jpg", width: 878, height: 1170, alt: "A red Audi detailed by Horizone Detailing", caption: "Audi A6", href: "https://www.instagram.com/p/DfF1Ui0nLJk/" },
      { src: "/images/post-6.jpg", width: 1080, height: 1440, alt: "A black BMW X6 M detailed by Horizone Detailing", caption: "BMW X6 M", href: "https://www.instagram.com/p/DfFu2h6HGdw/" },
      { src: "/images/post-7.jpg", width: 1080, height: 1440, alt: "A BMW X3 detailed by Horizone Detailing", caption: "BMW X3", href: "https://www.instagram.com/p/DfCoxQciDGf/" },
      { src: "/images/post-8.jpg", width: 1080, height: 1440, alt: "A BMW M850i detailed by Horizone Detailing", caption: "BMW M850i", href: "https://www.instagram.com/p/DfCnyt1CMLB/" },
      { src: "/images/post-9.jpg", width: 1080, height: 1440, alt: "An Audi S5 detailed by Horizone Detailing", caption: "Audi S5", href: "https://www.instagram.com/p/De87EaHiCUk/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "horizone_detailing",
    embeds: ["https://www.instagram.com/p/DfiApErEeev/", "https://www.instagram.com/p/DfF1Ui0nLJk/", "https://www.instagram.com/p/DfeiAFdCMxE/"],
  },

  order: {
    label: "How to book",
    title: "Book with a DM or a call",
    intro: "Send a message on Instagram, or call 647-677-1614, with your vehicle, the service you want and your preferred date.",
    dmMessage: "Hi Horizone Detailing! I would like to book.\nVehicle:\nService:\nPreferred date:\nLocation in Mississauga or the GTA:",
    headerCtaLabel: "DM to book",
    links: [
      { label: "DM to book", href: "https://ig.me/m/horizone_detailing" },
      { label: "Call 647-677-1614", href: "tel:+16476771614" },
    ],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I book?", a: "Send a message on Instagram, or call 647-677-1614." },
    { q: "Where do you work?", a: "Horizone Detailing serves Mississauga and the GTA." },
    { q: "What services do you offer?", a: "Interior and exterior deep cleaning, wax and ceramic sealant, wheel and tire cleaning, and salt stain removal." },
  ],

  contact: {
    title: "Contact and booking",
    area: "Mississauga and the GTA, Ontario",
    phone: "647-677-1614",
    socials: [
      { label: "Instagram", href: "https://www.instagram.com/horizone_detailing/" },
      { label: "TikTok", href: "https://www.tiktok.com/@horizonedetailing" },
    ],
  },

  seo: {
    title: "Horizone Detailing | Auto detailing in Mississauga and the GTA",
    description: "Interior and exterior detailing in Mississauga and the GTA, plus wax, ceramic sealant, wheel cleaning and salt stain removal. DM or call 647-677-1614 to book.",
    keywords: ["auto detailing Mississauga", "ceramic sealant GTA", "Horizone Detailing"],
    ogPhoto: "/images/og-photo.jpg",
  },
};
