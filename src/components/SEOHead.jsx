// src/components/SEOHead.jsx
import React from "react";
import { Helmet } from "react-helmet";

const SEOHead = () => {
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>Stop & Wash Carwash | Trusted in Midrand</title>
      <meta
        name="description"
        content="Stop & Wash Carwash – Trusted car cleaning service in Midrand. ⭐ 4.8 rating. Since 2022. Book your service today!"
      />
      <meta
        name="keywords"
        content="Carwash, Midrand, Stop & Wash, Car cleaning, Trusted Carwash, Auto detailing Midrand"
      />
      <meta name="viewport" content="width=device-width, initial-scale=1">
      </meta>
      {/* Open Graph / Social Sharing */}
      <meta property="og:title" content="Stop & Wash Carwash – Midrand" />
      <meta
        property="og:description"
        content="Trusted car cleaning service in Midrand. ⭐ 4.8 rating. Since 2022. Book now!"
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://your-site-url.com" />
      <meta
        property="og:image"
        content="https://your-site-url.com/your-image.jpg"
      />

      {/* Local SEO */}
      <meta name="geo.region" content="ZA-GP" />
      <meta name="geo.placename" content="Midrand" />
      <meta name="geo.position" content="-25.9894;28.0950" />
      <meta name="ICBM" content="-25.9894,28.0950" />

      {/* Structured Data for Local Business */}
      <script type="application/ld+json">
        {`
        {
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Stop & Wash Carwash",
          "image": "https://your-site-url.com/logo.png",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "3 Ridge Road, Glen Austin",
            "addressLocality": "Midrand",
            "addressRegion": "Gauteng",
            "postalCode": "1685",
            "addressCountry": "ZA"
          },
          "telephone": "+27-XX-XXX-XXXX",
          "url": "https://your-site-url.com",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.8",
            "reviewCount": "120"
          }
        }
      `}
      </script>
    </Helmet>
  );
};

export default SEOHead;