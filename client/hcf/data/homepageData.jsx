import { LuHeartPulse } from "react-icons/lu";
import { GiBrain, GiLiver, GiPelvisBone } from "react-icons/gi";
import { IoMdArrowForward } from "react-icons/io";
import { LiaVectorSquareSolid } from "react-icons/lia";
import { PiMagicWandLight } from "react-icons/pi";
import { GiPartyPopper } from "react-icons/gi";

export const servicesData = [
  {
    imgUrl: "https://i.ibb.co/4m8TrYx/documents-svgrepo-com.png",
    text: "Send your reports & preferences",
  },
  {
    imgUrl: "https://i.ibb.co/bs0GMYJ/moneytracker-svgrepo-com.png",
    text: "Receive cost estimate in 48 hours",
  },
  {
    imgUrl: "https://i.ibb.co/PWBymvC/handshake-svgrepo-com.png",
    text: "Get received by our teams",
  },
  {
    imgUrl: "https://i.ibb.co/myb4TTK/aeroplane-plane-svgrepo-com.png",
    text: "Get treated and fly back",
  },
];
export const treatmentTypesData = [
  {
    majorTitle: "Organ Transplant",
    subtypes: [
      "Kidney Transplant",
      "Liver Transplant",
      "Heart Transplant",
      "Lung Transplant",
      "Pancreas Transplant",
    ],
  },
  {
    majorTitle: "Cardiology",
    subtypes: [
      "Coronary Artery Disease",
      "Heart Failure",
      "Arrhythmias",
      "Valvular Heart Disease",
      "Congenital Heart Disease",
    ],
  },
  {
    majorTitle: "Neurology",
    subtypes: [
      "Stroke",
      "Alzheimer's Disease",
      "Parkinson's Disease",
      "Multiple Sclerosis",
      "Epilepsy",
    ],
  },
  {
    majorTitle: "Orthopedics",
    subtypes: [
      "Joint Replacement Surgery",
      "Fracture Repair",
      "Sports Medicine",
      "Spinal Surgery",
      "Orthopedic Trauma",
    ],
  },
  {
    majorTitle: "Oncology",
    subtypes: [
      "Breast Cancer",
      "Lung Cancer",
      "Colorectal Cancer",
      "Prostate Cancer",
      "Leukemia",
    ],
  },
  {
    majorTitle: "Dermatology",
    subtypes: ["Acne", "Eczema", "Psoriasis", "Skin Cancer", "Rosacea"],
  },
  {
    majorTitle: "Gastroenterology",
    subtypes: [
      "Gastroesophageal Reflux Disease (GERD)",
      "Inflammatory Bowel Disease",
      "Liver Disease",
      "Pancreatitis",
      "Gallstones",
    ],
  },
  {
    majorTitle: "Pulmonology",
    subtypes: [
      "Asthma",
      "Chronic Obstructive Pulmonary Disease (COPD)",
      "Pneumonia",
      "Pulmonary Fibrosis",
      "Lung Cancer",
    ],
  },
  {
    majorTitle: "Endocrinology",
    subtypes: [
      "Diabetes Mellitus",
      "Thyroid Disorders",
      "Obesity",
      "Osteoporosis",
      "Polycystic Ovary Syndrome (PCOS)",
    ],
  },
  {
    majorTitle: "Nephrology",
    subtypes: [
      "Chronic Kidney Disease",
      "Hypertension",
      "Kidney Stones",
      "Acute Kidney Injury",
      "Glomerulonephritis",
    ],
  },
  {
    majorTitle: "Rheumatology",
    subtypes: [
      "Rheumatoid Arthritis",
      "Osteoarthritis",
      "Lupus",
      "Spondyloarthropathies",
      "Gout",
    ],
  },
  {
    majorTitle: "Urology",
    subtypes: [
      "Benign Prostatic Hyperplasia (BPH)",
      "Urinary Tract Infections",
      "Kidney Stones",
      "Prostate Cancer",
      "Erectile Dysfunction",
    ],
  },
  {
    majorTitle: "Psychiatry",
    subtypes: [
      "Depression",
      "Anxiety Disorders",
      "Bipolar Disorder",
      "Schizophrenia",
      "Post-Traumatic Stress Disorder (PTSD)",
    ],
  },
  {
    majorTitle: "Ophthalmology",
    subtypes: [
      "Cataracts",
      "Glaucoma",
      "Macular Degeneration",
      "Diabetic Retinopathy",
      "Refractive Errors",
    ],
  },
  {
    majorTitle: "Hematology",
    subtypes: ["Anemia", "Hemophilia", "Thrombosis", "Leukemia", "Lymphoma"],
  },
  {
    majorTitle: "Infectious Diseases",
    subtypes: ["HIV/AIDS", "Influenza", "Tuberculosis", "Malaria", "Hepatitis"],
  },
  {
    majorTitle: "Allergy & Immunology",
    subtypes: [
      "Allergic Rhinitis",
      "Asthma",
      "Food Allergy",
      "Autoimmune Diseases",
      "Immunodeficiency Disorders",
    ],
  },
  {
    majorTitle: "Geriatrics",
    subtypes: [
      "Dementia",
      "Falls",
      "Delirium",
      "Urinary Incontinence",
      "Polypharmacy",
    ],
  },
  {
    majorTitle: "Obstetrics & Gynecology",
    subtypes: [
      "Pregnancy",
      "Menstrual Disorders",
      "Endometriosis",
      "Polycystic Ovary Syndrome (PCOS)",
      "Cervical Cancer",
    ],
  },
  {
    majorTitle: "Pediatrics",
    subtypes: [
      "Childhood Obesity",
      "Autism Spectrum Disorder",
      "Attention-Deficit/Hyperactivity Disorder (ADHD)",
      "Pediatric Asthma",
      "Pediatric Cancer",
    ],
  },
  {
    majorTitle: "Emergency Medicine",
    subtypes: [
      "Trauma",
      "Heart Attack",
      "Stroke",
      "Respiratory Distress",
      "Sepsis",
    ],
  },
];

export const topHospitalsData = [
  {
    title: "Cardiology",
    icon: <LuHeartPulse size={80} strokeWidth={1} />,
  },
  {
    title: "Orthopedic",
    icon: <GiPelvisBone size={80} strokeWidth={1} />,
  },
  {
    title: "Neurology",
    icon: <GiBrain size={80} strokeWidth={1} />,
  },
  {
    title: "Liver Transplant",
    icon: <GiLiver size={80} strokeWidth={1} />,
  },
  {
    title: "More Doctors",
    icon: <IoMdArrowForward size={80} />,
  },
];
export const topDoctorsData = [
  {
    title: "Cardiology",
    icon: <LuHeartPulse size={80} strokeWidth={1} />,
  },
  {
    title: "Orthopedic",
    icon: <GiPelvisBone size={80} strokeWidth={1} />,
  },
  {
    title: "Neurology",
    icon: <GiBrain size={80} strokeWidth={1} />,
  },
  {
    title: "Liver Transplant",
    icon: <GiLiver size={80} strokeWidth={1} />,
  },
  {
    title: "More Doctors",
    icon: <IoMdArrowForward size={80} />,
  },
];
export const WhyMakwellData = [
  {
    quantity: "1000+",
    title: "Hospitals",
  },
  {
    quantity: "20000+",
    title: "Doctors",
  },
  {
    quantity: "100+",
    title: "Countries",
  },
  {
    quantity: "10+",
    title: "Years of Medical Experience",
  },
];
export const testimonialsData = [
  {
    imageSrc:
      "https://a.storyblok.com/f/191576/1200x800/faa88c639f/round_profil_picture_before_.webp", // Profile image source will be inserted here
    reviewContent:
      "Mixed feelings but adequate results. Pros: technical skills & Intuition about colors, fonts, & layout styles. Cons: Communication, English, Detail Orientation, Creativity, Following the Brief (Style guide, sample website, text requested). Off the mark 2 day delivery, and 5-days of revision for one landing (good) page.",
    reviewer: {
      name: "Ava Robert",
      designation: "Golio",
    },
  },
  {
    imageSrc:
      "https://a.storyblok.com/f/191576/1200x800/a3640fdc4c/profile_picture_maker_before.webp", // Profile image source will be inserted here
    reviewContent:
      "Mixed feelings but adequate results. Pros: technical skills & Intuition about colors, fonts, & layout styles. Cons: Communication, English, Detail Orientation, Creativity, Following the Brief (Style guide, sample website, text requested). Off the mark 2 day delivery, and 5-days of revision for one landing (good) page.",
    reviewer: {
      name: "John Doe",
      designation: "Designer",
    },
  },
  {
    imageSrc:
      "https://www.shutterstock.com/image-photo/close-head-shot-portrait-preppy-600nw-1433809418.jpg", // Profile image source will be inserted here
    reviewContent:
      "Yet Mixed feelings but adequate results. Pros: technical skills & Intuition about colors, fonts, & layout styles. Cons: Communication, English, Detail Orientation, Creativity, Following the Brief (Style guide, sample website, text requested). Off the mark 2 day delivery, and 5-days of revision for one landing (good) page.",
    reviewer: {
      name: "Jane Smith",
      designation: "Developer",
    },
  },
];
export const testimonialsVideosData = [
  {
    title: "Planet Earth II - Official Trailer",
    url: "https://www.youtube.com/watch?v=c8aFcHFu8QM",
  },
  {
    title: "BBC Earth: The Power of the Planet - The Story of the Earth (HD)",
    url: "https://www.youtube.com/watch?v=YsObzP1H5_g",
  },
  {
    title: "Our Planet | Official Trailer [HD] | Netflix",
    url: "https://www.youtube.com/watch?v=6MWzLKlrbCU",
  },
  {
    title: "Wonders of Nature",
    url: "https://www.youtube.com/watch?v=sGkq9wZXbWQ",
  },
  {
    title: "Nature's Fury: The Science of Natural Disasters",
    url: "https://www.youtube.com/watch?v=wRJU2ukRs2o",
  },
];
export const blogsData = [
  {
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/ffc8/bb48/3a107b4d1decc08fcfdffabaefdcd36c?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aM9H2gjwrTa3D58FEgoCIQFOUj6o3ZuS7TeDncFYubFal~qbKUuowY19qkkolENbUMEhL2oZ8iiE1UQj0MIvp22c5bsP-lzpp2zw8zW9hrFB4sy4gnwWNKPK0egwGDcwJQXrtW3THurwKjvVOKyUm~VBywcJjCQ1JXpvyD~SXWPhRdTo4NsUONnmsUKCDUORTpT~UI8vuPjApEDZ8uz9XuXyIKQrhhzAr3mTF16vG5GkL5E19~VkRilYOY5Kjk-cfCdeuFOAPG79tSA0ZH0Hj9sjwoaUK02qdZs9g0cJJAr5xnDZ9JWdxnYEGOBS1q72UMyyJxkFIxlY5AAUHDny2w__",
    title: "10 Tips for Eco-Friendly Gardening",
    description:
      "Discover ten easy-to-implement tips to make your gardening practices more eco-friendly, from composting to water conservation.",
  },
  {
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/4dcd/e22e/f4c65a46ecc815635a88b5fc4a9c75dc?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FmdMTK0omfuGrUCaYAoRh7TxF3h2JGF1VlTEUPaML9YR~83YRj7I9G9wy2g12jMCsiDNSev9aPYe6JRJs8AS1N40NmNHd8bFfkn2R-L3y5R2ByyQbIiOsJgShPx6GPnp-iqMLoqDNt3L4w6rYOpS1xzu2srLgYCOm6MJNymXoc1GdEvKWH-p0GqvYuNth7f1EW5dck6-GAnCicQ5uVH4Gzf1hwL0M11lUYHzKr9FluM5Vj3DW4pySaVNpNF-5P~hokjnIC2KDWajwsFuKPHnG4iUqc~V4YXKKyAdRSP2Q2dZpzZVXYGaeyChiPTUNtAYdYEkuAWZjRD6luDXxBbzCA__",
    title: "Exploring National Parks: Yosemite",
    description:
      "Embark on a journey through the stunning landscapes and rich biodiversity of Yosemite National Park, from iconic landmarks to hidden gems.",
  },
  {
    imgUrl:
      "https://s3-alpha-sig.figma.com/img/650f/a424/d8443974650854c43a964c75118a092c?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fwwt157DcFmzWkuqtcxAoQsypjUBb8Fi7oFKhRlnMM281b8ap-pqHXf7toR0L29oHtiU5-AZg9v0FtNNpdDPeQLQXRNnNW6mzpV6LVbLfm23ZsiZDWh1RGEU4JyPX~T~gH-I-ZP1Q~LAT2cwvZ998iwiiS2lmJLmCvdOqNSjFkJIePm~wOSrptdY9UEWRDEMtVVsO2QprnElMprwQoQtujKkzUm-K7Co6dNVmhZ0RCvEgXSjJkyejCCmH8Kynk9lo5fmYOl4V1Ov3jqF3GepmDB-GddbenXdpFudd4aBMDw6HnrbcrudTWkNFl51~6A~v04OuCdejLkxDHqYLVNTcQ__",
    title: "The Importance of Biodiversity Conservation",
    description:
      "Learn about the critical role biodiversity plays in sustaining ecosystems, economies, and human well-being, and what you can do to protect it.",
  },
];
export const AIFeaturesData = [
  {
    imgSrc: "https://i.ibb.co/WtF4qXF/image-1.webp",
    title: "User-Friendly Website Builder",
    description:
      "Provide a user-friendly website builder that allows healthcare facilitators (HCFs) to create professional websites with simple clicks. Intuitive drag-and-drop interfaces, pre-designed templates, and customizable themes make it easy for HCFs to showcase their services and expertise online without the need for technical expertise.",
  },
  {
    imgSrc: "https://i.ibb.co/2WnLtx4/23.webp",
    title: "Global Branding and Identity Tools",
    description:
      "Offer tools and features that enable HCFs to establish a strong global identity and brand presence. This includes customizable branding elements such as logos, color schemes, and typography options, as well as localization features to adapt the website content for international audiences.",
  },
  {
    imgSrc:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShove5FVlDIlnX5k3a-wqqLOC0S4D14zarOQLX0BGLvg&s",
    title: "SEO Optimization and Visibility Tools",
    description:
      "Incorporate search engine optimization (SEO) tools and features that help HCFs improve their website's visibility and rank higher in search engine results. This includes keyword optimization, meta tags, and sitemaps to ensure that the website is easily discoverable by potential patients worldwide.",
  },
  {
    imgSrc: "https://cdn-icons-png.freepik.com/512/8462/8462185.png",
    title: "Multilingual Support and Translation Services",
    description:
      "Provide multilingual support and translation services that allow HCFs to create websites in multiple languages, catering to diverse patient demographics. This ensures that the website is accessible to patients from different regions and enhances the HCF's ability to attract a global audience.",
  },
  {
    imgSrc: "https://cdn-icons-png.freepik.com/512/7731/7731130.png",
    title: "Analytics and Performance Tracking:",
    description:
      "Include analytics and performance tracking tools that allow HCFs to monitor the effectiveness of their website and marketing efforts in real-time. Key metrics such as website traffic, conversion rates, and user engagement provide valuable insights that enable HCFs to optimize their website and upscale their business by 400%.",
  },
];
export const featuresData = [
  {
    title: "Boost Patient Conversion",
    description:
      "Achieve exceptional results with an astounding 80% improvement in converting existing inquiries through streamlined patient tracking, effective communication with medical professionals, and automated follow-up procedures.",
    icon: <LiaVectorSquareSolid size={25} color="#7660C2" />,
  },
  {
    title: "Revenue Growth",
    description:
      "Boost patient influx and revenue by harnessing referrals generated through the effective utilization of the patient management platform.",
    icon: <PiMagicWandLight size={25} color="#7660C2" />,
  },
  {
    title: "Lead Generation Support",
    description:
      "Our platform specializes in cultivating targeted leads for your business, bolstering your brand and generating high-quality leads.",
    icon: <GiPartyPopper size={25} color="#7660C2" />,
  },
  {
    title: "Seamless Patient Management",
    description:
      "Revolutionize patient management with AI driven technology for smooth operations and enhanced care coordination.",
    icon: <LiaVectorSquareSolid size={25} color="#7660C2" />,
  },
  {
    title: "Medical Case Management",
    description:
      "Enhance patient care through effective medical report management, leveraging AI for precise analysis and informed decision-making.",
    icon: <GiPartyPopper size={25} color="#7660C2" />,
  },
  {
    title: "Empowering Facilitators with Personalised Websites",
    description:
      "Effortlessly craft personalized websites to showcase your services and expertise, attracting new patients and establishing industry credibility.",
    icon: <PiMagicWandLight size={25} color="#7660C2" />,
  },
];
export const earningPotentialData = [
  {
    title: "Lead Management System with WhatsApp Integration",
    description:
      "Effortlessly manage and track potential patient leads from various sources, such as referrals, partnerships, and digital inquiries, with the added convenience of receiving lead notifications directly on WhatsApp. Stay instantly informed and respond promptly to new leads, ensuring no opportunity is missed in converting them into valuable patients",
  },
  {
    title: "Automated Follow-Up System with Real-time Knowledge Material",
    description:
      "Implement an automated follow-up system that not only sends reminders for appointments and follow-ups but also provides real-time knowledge material to engage and educate potential patients. By offering valuable information promptly, you can nurture leads effectively and build trust, increasing the likelihood of conversion.",
  },
  {
    title: "24/7 Support for Future Leads Conversion",
    description:
      "Offer round-the-clock support to all future leads, providing them with assistance and guidance at any time of the day. By offering continuous support and addressing queries promptly, you can enhance the lead conversion process, making it easier for potential patients to choose your services with confidence.",
  },
  {
    title: "Referral Program Management",
    description:
      "A well-designed referral program encourages existing patients to refer their friends and family to the HCF's services. By offering incentives or rewards for successful referrals, HCFs can leverage their existing patient base to attract new patients, leading to a higher volume of business and increased earnings.",
  },
  {
    title: "Value-added Services and Upselling Opportunities",
    description:
      "Offering value-added services, such as premium consultations, concierge healthcare packages, or additional wellness services, presents upselling opportunities for HCFs. By diversifying their service offerings and catering to the unique needs of their patients, HCFs can increase their revenue streams and capture additional value from each patient interaction.",
  },
  {
    title: "Strategic Partnerships and Network Expansion",
    description:
      "Forming strategic partnerships with hospitals, clinics, and other healthcare providers can open up new revenue streams for HCFs. By leveraging these partnerships to offer complementary services or access to specialized medical expertise, HCFs can attract more patients and increase their earning potential through referral agreements or revenue-sharing arrangements.",
  },
];
