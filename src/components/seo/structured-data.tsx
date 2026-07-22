export function StructuredData() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Corenova Technologies Ltd",
    "url": "https://corenova.com",
    "logo": "https://corenova.com/logo.png",
    "foundingDate": "2026",
    "founders": [
      {
        "@type": "Person",
        "name": "Michael Olowoselu"
      }
    ],
    "description": "Helping businesses transform through Artificial Intelligence, Automation, Cybersecurity, Modern Software Development and Cloud Solutions.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lagos",
      "addressCountry": "Nigeria"
    },
    "sameAs": [
      "https://twitter.com/corenova",
      "https://linkedin.com/company/corenova"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Corenova Technologies Ltd",
    "image": "https://corenova.com/logo.png",
    "@id": "https://corenova.com",
    "url": "https://corenova.com",
    "telephone": "+2348000000000",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Lagos",
      "addressCountry": "NG"
    }
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
    </>
  );
}
