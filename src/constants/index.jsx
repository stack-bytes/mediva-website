import { CheckCircle2 } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  {
    label: "Home",
    href: "#",
    button: false,
    clicked: () => scrollTo({ left: 0, top: 1200, behavior: "smooth" }),
  },
  { label: "About Us", href: "#", button: false },
  { label: "Info", href: "#", button: false },
  {
    label: "Download",
    href: "#",
    button: true,
  },
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <CheckCircle2 />,
    text: "Direct Connection to a Doctor",
    description:
      "Provides users with instant access to licensed doctors, allowing them to discuss symptoms, ask health-related questions, and receive medical advice without visiting a clinic. Doctors are available 24/7 for immediate assistance",
  },
  {
    icon: <CheckCircle2 />,
    text: "Online Prescriptions",
    description:
      "Enables users to receive prescriptions digitally after a consultation, which they can use to purchase medications at any partnered pharmacy or have them delivered. Users can also track their prescription history and set reminders for refills",
  },
  {
    icon: <CheckCircle2 />,
    text: "Interactive Map",
    description:
      "An in-app map feature that shows nearby hospitals, clinics, pharmacies, and urgent care centers based on the user's location. The map includes real-time navigation, facility information, hours of operation, and estimated wait times where available",
  },
  {
    icon: <CheckCircle2 />,
    text: "Support Groups",
    description:
      "Offers information on local and online support groups for various medical conditions and mental health issues. Users can search for support groups by topic, location, and meeting times, with options for virtual attendance when available",
  },
  {
    icon: <CheckCircle2 />,
    text: "Illness reports",
    description:
      "A section dedicated to the latest information on illnesses, including symptoms, treatment options, and preventive measures. Users can view reports on trending illnesses, seasonal outbreaks, and access educational content tailored to their health needs",
  },
  {
    icon: <CheckCircle2 />,
    text: "User rating",
    description:
      "Allows users to view ratings and reviews of doctors based on previous consultations. Ratings cover bedside manner, response time, communication skills, and overall satisfaction, helping users select a doctor who best fits their needs",
  },
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
