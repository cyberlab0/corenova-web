export function StructuredData() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Corenova Technology Ltd",
    "alternateName": "CORENOVA TECHNOLOGY LTD",
    "url": "https://corenovatechnology.com",
    "logo": "https://corenovatechnology.com/corenova-icon.svg",
    "foundingDate": "2026",
    "founders": [
      {
        "@type": "Person",
        "name": "Michael Olowoselu",
        "jobTitle": "Founder & Chief Executive Officer",
        "url": "https://corenovatechnology.com/about",
      }
    ],
    "description": "Helping businesses transform through Artificial Intelligence, Automation, Cybersecurity, Modern Software Development and Cloud Solutions.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+2349131815101",
      "contactType": "customer service",
      "email": "contact@corenovatechnology.com",
      "availableLanguage": ["English"],
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lagos",
      "addressCountry": "NG"
    },
    "sameAs": [
      "https://x.com/corenovaltd",
      "https://www.instagram.com/corenovaltd",
      "https://www.facebook.com/share/1EkN96dPri/",
      "https://www.tiktok.com/@corenovaltd"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Corenova Technology Ltd",
    "image": "https://corenovatechnology.com/corenova-icon.svg",
    "@id": "https://corenovatechnology.com",
    "url": "https://corenovatechnology.com",
    "telephone": "+2349131815101",
    "email": "contact@corenovatechnology.com",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lagos",
      "addressCountry": "NG"
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 6.5244,
        "longitude": 3.3792
      },
      "geoRadius": "50000"
    },
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Corenova Technology Services",
    "itemListElement": [
      {
        "@type": "Service",
        "position": 1,
        "name": "AI Automation",
        "description": "Intelligent automation solutions using cutting-edge artificial intelligence to streamline business operations.",
        "provider": { "@type": "Organization", "name": "Corenova Technology Ltd" },
      },
      {
        "@type": "Service",
        "position": 2,
        "name": "Cybersecurity Services",
        "description": "Comprehensive cybersecurity assessments, penetration testing, and digital infrastructure protection.",
        "provider": { "@type": "Organization", "name": "Corenova Technology Ltd" },
      },
      {
        "@type": "Service",
        "position": 3,
        "name": "Software Development",
        "description": "Custom software development for businesses, from enterprise applications to mobile solutions.",
        "provider": { "@type": "Organization", "name": "Corenova Technology Ltd" },
      },
      {
        "@type": "Service",
        "position": 4,
        "name": "Web Development",
        "description": "Modern, high-performance web applications built with cutting-edge technologies.",
        "provider": { "@type": "Organization", "name": "Corenova Technology Ltd" },
      },
      {
        "@type": "Service",
        "position": 5,
        "name": "Cloud Solutions",
        "description": "Scalable cloud architecture design, migration, and management services.",
        "provider": { "@type": "Organization", "name": "Corenova Technology Ltd" },
      },
      {
        "@type": "Service",
        "position": 6,
        "name": "Technology Consulting",
        "description": "Strategic technology consulting to help businesses leverage modern solutions for growth.",
        "provider": { "@type": "Organization", "name": "Corenova Technology Ltd" },
      },
    ],
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Corenova Technology",
    "url": "https://corenovatechnology.com",
    "description": "We build intelligent software, automate business operations, secure digital infrastructure and develop scalable web applications for businesses worldwide.",
    "publisher": {
      "@type": "Organization",
      "name": "Corenova Technology Ltd",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}

