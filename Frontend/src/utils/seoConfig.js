// SEO Utilities and Helper Functions for Welfare Massage Centre

/**
 * SEO Configuration
 * Contains all SEO-related constants and metadata
 */

export const SEO_CONFIG = {
  siteName: "Welfare Massage Centre",
  siteUrl: "https://www.welfaremc.co.uk",
  defaultTitle:
    "Welfare Massage Centre Ashford | Hot Stone, Swedish Massage & Reflexology",
  defaultDescription:
    "Professional massage therapy in Ashford, Kent. Specialising in hot stone massage, Swedish massage, deep tissue, reflexology, aromatherapy & pregnancy massage. Book your relaxation session today.",
  defaultKeywords:
    "massage Ashford, hot stone massage, Swedish massage, reflexology Ashford, deep tissue massage, aromatherapy, pregnancy massage, lymphatic drainage, massage therapy Kent, spa Ashford, wellness centre Ashford",
  twitterHandle: "@welfaremc",
  locale: "en_GB",
  ogImage: "/src/img/logo.jpg",

  // Business information
  business: {
    name: "Welfare Massage Centre",
    address: {
      street: "59 High Street",
      city: "Ashford",
      postcode: "TN24 8SG",
      country: "United Kingdom",
      region: "Kent",
    },
    contact: {
      phone: "+44-1233-610050",
      text: "+44-7496-285460",
      email: "info@welfaremc.co.uk",
    },
    coordinates: {
      lat: 51.1464,
      lng: 0.875,
    },
    hours: {
      monday: "09:30 - 19:00",
      tuesday: "09:30 - 19:00",
      wednesday: "09:30 - 19:00",
      thursday: "09:30 - 19:00",
      friday: "09:30 - 19:00",
      saturday: "09:30 - 19:00",
      sunday: "Closed",
    },
  },

  // Services for structured data
  services: [
    {
      name: "Hot Stone Massage",
      description:
        "Therapeutic massage using warm stones to ease muscle tension and promote relaxation",
      keywords: "hot stone massage, heated stone therapy, thermal massage",
    },
    {
      name: "Swedish Massage",
      description:
        "Classic relaxation massage technique using long strokes and light pressure",
      keywords: "Swedish massage, relaxation massage, classic massage",
    },
    {
      name: "Deep Tissue Massage",
      description:
        "Intensive massage targeting deeper muscle layers for chronic pain relief",
      keywords: "deep tissue, sports massage, therapeutic massage",
    },
    {
      name: "Reflexology",
      description:
        "Therapeutic foot massage to relieve tension and improve circulation",
      keywords: "reflexology, foot massage, pressure point therapy",
    },
    {
      name: "Aromatherapy Massage",
      description:
        "Massage enhanced with essential oils for relaxation and stress relief",
      keywords: "aromatherapy, essential oils, holistic massage",
    },
    {
      name: "Pregnancy Massage",
      description: "Gentle massage therapy tailored for pregnant women",
      keywords: "pregnancy massage, prenatal massage, maternity massage",
    },
    {
      name: "Lymphatic Drainage",
      description:
        "Gentle massage to stimulate lymphatic system and reduce swelling",
      keywords: "lymphatic drainage, detox massage, circulation massage",
    },
    {
      name: "Back, Neck & Shoulders Massage",
      description: "Targeted massage for common tension areas",
      keywords: "back massage, neck massage, shoulder massage, tension relief",
    },
  ],
};

/**
 * Generate page title with site name
 * @param {string} pageTitle - The specific page title
 * @returns {string} Full page title
 */
export const generateTitle = (pageTitle) => {
  return pageTitle
    ? `${pageTitle} | ${SEO_CONFIG.siteName}`
    : SEO_CONFIG.defaultTitle;
};

/**
 * Generate meta description
 * @param {string} description - Custom description or default
 * @returns {string} Meta description
 */
export const generateDescription = (description) => {
  return description || SEO_CONFIG.defaultDescription;
};

/**
 * Generate canonical URL
 * @param {string} path - URL path
 * @returns {string} Full canonical URL
 */
export const generateCanonicalUrl = (path = "") => {
  return `${SEO_CONFIG.siteUrl}${path}`;
};

/**
 * Generate structured data for local business
 * @returns {object} JSON-LD structured data
 */
export const generateBusinessStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: SEO_CONFIG.business.name,
    description: SEO_CONFIG.defaultDescription,
    url: SEO_CONFIG.siteUrl,
    telephone: SEO_CONFIG.business.contact.phone,
    email: SEO_CONFIG.business.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SEO_CONFIG.business.address.street,
      addressLocality: SEO_CONFIG.business.address.city,
      postalCode: SEO_CONFIG.business.address.postcode,
      addressCountry: "GB",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SEO_CONFIG.business.coordinates.lat,
      longitude: SEO_CONFIG.business.coordinates.lng,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:30",
        closes: "19:00",
      },
    ],
  };
};

/**
 * Get all service names for keywords
 * @returns {string} Comma-separated service names
 */
export const getServiceKeywords = () => {
  return SEO_CONFIG.services.map((service) => service.name).join(", ");
};

export default SEO_CONFIG;
