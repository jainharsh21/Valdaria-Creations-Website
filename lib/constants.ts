export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Collections", href: "#categories" },
  { label: "About Us", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
] as const;

export const HERO_STATS = [
  { value: 30, suffix: "+", label: "Years Experience" },
  { value: 100, suffix: "+", label: "Happy Clients" },
  { value: 250, suffix: "+", label: "Products" },
] as const;

export const FEATURES = [
  {
    icon: "Shirt",
    title: "Premium Quality",
    description:
      "Our garments are crafted from the finest fabrics and materials, ensuring durability and comfort that your customers will appreciate.",
    cta: { label: "View Collections", href: "#categories" },
  },
  {
    icon: "Boxes",
    title: "Bulk Order Ready",
    description:
      "We specialize in large-volume wholesale orders, making it easy for retailers to stock up on premium menswear collections in one seamless transaction.",
    cta: { label: "Place an Order", href: "#contact" },
  },
  {
    icon: "Tag",
    title: "Competitive Pricing",
    description:
      "Our direct-from-manufacturer approach eliminates middlemen, allowing us to offer premium products at competitive wholesale rates.",
    cta: { label: "Get a Quote", href: "#contact" },
  },
] as const;

export const CATEGORIES = [
  {
    title: "Formal Shirts",
    count: "120+ Designs",
    image:
      "https://img.freepik.com/premium-photo/happy-groom-white-shirt_115318-1443.jpg?w=826",
    alt: "Formal Shirts Collection",
  },
  {
    title: "Trousers",
    count: "85+ Designs",
    image:
      "https://img.freepik.com/free-photo/businessman-wearing-black-pants-with-white-shirt_53876-102237.jpg?w=826",
    alt: "Trousers Collection",
  },
  {
    title: "Kurtas",
    count: "75+ Designs",
    image:
      "https://img.freepik.com/premium-photo/man-green-floral-dress-with-white-pants-green-shirt_953460-24.jpg?w=996",
    alt: "Kurtas Collection",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Valdaria Creation has been our trusted supplier for over 5 years. Their consistent quality, timely deliveries, and attention to detail have helped us grow our retail business substantially.",
    name: "Rajesh Sharma",
    role: "Owner, Style Junction",
  },
  {
    quote:
      "The quality of their formal shirts is unmatched at this price point. Our customers keep coming back specifically for the Valdaria range. A partnership we deeply value.",
    name: "Meera Patel",
    role: "Buyer, Ethnic Threads",
  },
] as const;

export const ABOUT_FEATURES = [
  {
    icon: "Medal",
    title: "Quality Assurance",
    description:
      "Rigorous quality control processes ensure every garment meets our strict standards before shipping.",
  },
  {
    icon: "Home",
    title: "Trusted",
    description:
      "A family-run business since 1996, built on trust, personal care, and a deep passion for quality menswear.",
  },
  {
    icon: "Handshake",
    title: "Long-term Partnerships",
    description:
      "We focus on building lasting relationships with our clients through reliability and exceptional service.",
  },
] as const;

export const CONTACT_INFO = {
  address:
    "12/16 3rd Floor Shree Thackersey Golpalji Bldg, Shop No 27, 1st Old Hanuman X Lane, Kalbadevi, Mumbai – 400002",
  phone: "+91 9833654160",
  email: "pravinvaldaria@gmail.com",
  hours: "Monday – Saturday: 1:00 PM – 7:00 PM",
} as const;

export const FOOTER_COLUMNS = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "#home" },
      { label: "About Us", href: "#about" },
      { label: "Collections", href: "#categories" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Formal Shirts", href: "#categories" },
      { label: "Trousers", href: "#categories" },
      { label: "Kurtas", href: "#categories" },
    ],
  },
] as const;
