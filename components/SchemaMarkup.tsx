import React from "react";

export function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    url: "https://manasflow.com",
    logo: "https://manasflow.com/logo.svg",
    name: "Manasflow",
    sameAs: [
      "https://twitter.com/manasflow",
      "https://linkedin.com/company/manasflow"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
