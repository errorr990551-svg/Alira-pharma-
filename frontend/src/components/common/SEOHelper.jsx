import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { seoConfig } from '../../services/seoConfig';
import { productsCatalog } from '../../data/productsCatalog';

const SEOHelper = () => {
  const location = useLocation();

  useEffect(() => {
    const origin = "https://alirapharmaceuticals.com";
    const rawPath = location.pathname.toLowerCase();
    
    // 1. Resolve Trailing Slash and Double Slash Bug (Issue 1, Issue 7)
    const cleanPath = rawPath.replace(/\/+/g, '/').replace(/\/+$/, '') + '/';
    const canonicalPath = cleanPath === '//' ? '/' : cleanPath;
    const canonicalUrl = `${origin}${canonicalPath}`;

    // Update Canonical Link tag in head
    let linkCanonical = document.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement('link');
      linkCanonical.rel = 'canonical';
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute('href', canonicalUrl);

    // 2. Resolve Hreflang Tags (Issue 17)
    let linkHreflangEn = document.querySelector('link[hreflang="en"]');
    if (!linkHreflangEn) {
      linkHreflangEn = document.createElement('link');
      linkHreflangEn.rel = 'alternate';
      linkHreflangEn.hreflang = 'en';
      document.head.appendChild(linkHreflangEn);
    }
    linkHreflangEn.setAttribute('href', canonicalUrl);

    let linkHreflangDefault = document.querySelector('link[hreflang="x-default"]');
    if (!linkHreflangDefault) {
      linkHreflangDefault = document.createElement('link');
      linkHreflangDefault.rel = 'alternate';
      linkHreflangDefault.hreflang = 'x-default';
      document.head.appendChild(linkHreflangDefault);
    }
    linkHreflangDefault.setAttribute('href', canonicalUrl);

    // 3. Resolve Robots Tag & Minor Cities Pruning (Issue 10, Issue 13)
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement('meta');
      metaRobots.name = 'robots';
      document.head.appendChild(metaRobots);
    }

    const minorCities = [
      'abqaiq', 'afif', 'al-ahsa', 'al-baha', 'al-bukayriyah', 'al-kharj', 'al-lith',
      'al-majmaah', 'al-mithnab', 'al-namas', 'al-qunfudhah', 'al-ula', 'al-zulfi',
      'ar-rass', 'arar', 'badr', 'baljurashi', 'baqaa', 'buraydah', 'dawadmi',
      'dhahran', 'duba', 'dumat-al-jandal', 'ghazalah', 'hail', 'haql', 'hubuna',
      'jubail', 'khafji', 'khaybar', 'qatif', 'qurayyat', 'rabigh', 'rafha',
      'ranyah', 'ras-tanura', 'sakaka', 'shaqra', 'tabuk', 'taif', 'tanomah',
      'tayma', 'thuwal', 'turabah', 'turaif', 'unaizah', 'wadi-ad-dawasir', 'yanbu'
    ];

    const pathSegment = rawPath.replace(/\//g, '');
    const isMinorCity = minorCities.includes(pathSegment);

    // 4. Update Meta Description and Title based on Config
    let pageMeta = seoConfig.pages[canonicalPath];
    let isBlogPost = false;
    let blogPostMeta = null;
    let blogPostSlug = "";

    // Check if blog post
    if (rawPath.startsWith('/blogs/') && rawPath !== '/blogs' && rawPath !== '/blogs/') {
      blogPostSlug = rawPath.split('/').filter(Boolean)[1];
      if (seoConfig.blogs[blogPostSlug]) {
        blogPostMeta = seoConfig.blogs[blogPostSlug];
        isBlogPost = true;
      }
    }

    // Check if category or product page
    let isCategory = false;
    let isProduct = false;
    let categoryMeta = null;
    let categorySlug = "";
    let productSlug = "";
    let productMeta = null;

    if (rawPath.startsWith('/products/')) {
      const segments = rawPath.split('/').filter(Boolean);
      categorySlug = segments[1]; // e.g. surgical-instruments
      productSlug = segments[2];  // e.g. mayo-scissors-straight-curved
      
      if (categorySlug) {
        if (productSlug && productsCatalog[categorySlug]) {
          const product = productsCatalog[categorySlug].products.find(p => p.slug === productSlug);
          if (product) {
            isProduct = true;
            productMeta = {
              title: `${product.name} — ${product.specsTable.Material.split('-')[0].trim()} | ${product.specsTable.Compliance.split(',')[0]} | Supplier Saudi Arabia & UAE | Alira`,
              description: `${product.name} available in bulk. ${product.specsTable.Material.split('-')[0].trim()}, ${product.specsTable.Certifications}. Serving hospitals & clinics in Saudi Arabia, UAE, GCC. Request RFQ today. | Alira Pharmaceuticals`
            };
          }
        }
        
        if (!isProduct && seoConfig.categories[categorySlug]) {
          categoryMeta = seoConfig.categories[categorySlug];
          isCategory = true;
        }
      }
    }

    // Check if major city page
    let isMajorCity = false;
    let majorCityMeta = null;
    if (seoConfig.majorCities[pathSegment]) {
      majorCityMeta = seoConfig.majorCities[pathSegment];
      isMajorCity = true;
    }

    const isValidPage = 
      !!pageMeta || 
      (isBlogPost && !!blogPostMeta) || 
      (isProduct && !!productMeta) || 
      (isCategory && !!categoryMeta) || 
      (isMajorCity && !!majorCityMeta) || 
      isMinorCity;

    if (isMinorCity || !isValidPage) {
      metaRobots.setAttribute('content', 'noindex, follow');
    } else {
      metaRobots.setAttribute('content', 'index, follow');
    }

    let activeTitle = "";
    let activeDescription = "";

    if (pageMeta) {
      activeTitle = pageMeta.title;
      activeDescription = pageMeta.description;
    } else if (isBlogPost && blogPostMeta) {
      activeTitle = blogPostMeta.title;
      activeDescription = blogPostMeta.description;
    } else if (isProduct && productMeta) {
      activeTitle = productMeta.title;
      activeDescription = productMeta.description;
    } else if (isCategory && categoryMeta) {
      // Dynamic title check might be performed by child component if productId is present
      // We will allow page configuration overrides but fall back to category default
      activeTitle = categoryMeta.title;
      activeDescription = categoryMeta.description;
    } else if (isMajorCity && majorCityMeta) {
      activeTitle = majorCityMeta.title;
      activeDescription = majorCityMeta.description;
    } else if (!isValidPage) {
      activeTitle = "Page Not Found | Alira Pharmaceuticals";
      activeDescription = "The page you are looking for does not exist or has been moved. | Alira Pharmaceuticals";
    }

    // Set page values if found
    if (activeTitle) {
      document.title = activeTitle;
    }
    if (activeDescription) {
      let metaDescEl = document.querySelector('meta[name="description"]');
      if (!metaDescEl) {
        metaDescEl = document.createElement('meta');
        metaDescEl.name = "description";
        document.head.appendChild(metaDescEl);
      }
      metaDescEl.setAttribute('content', activeDescription);
    }

    // 5. Setup Open Graph and Twitter Card tags dynamically (Issue 16)
    const updateOGTags = () => {
      const currentTitle = document.title;
      const currentDesc = document.querySelector('meta[name="description"]')?.getAttribute('content') || "";
      
      const tags = {
        "og:type": "website",
        "og:title": currentTitle,
        "og:description": currentDesc,
        "og:url": canonicalUrl,
        "og:image": isBlogPost && blogPostMeta ? blogPostMeta.image : "https://alirapharmaceuticals.com/og-image-1200x630.jpg",
        "twitter:card": "summary_large_image",
        "twitter:title": currentTitle,
        "twitter:description": currentDesc,
        "twitter:image": isBlogPost && blogPostMeta ? blogPostMeta.image : "https://alirapharmaceuticals.com/og-image-1200x630.jpg"
      };

      Object.entries(tags).forEach(([property, content]) => {
        const isOG = property.startsWith("og:");
        const selector = isOG ? `meta[property="${property}"]` : `meta[name="${property}"]`;
        let metaEl = document.querySelector(selector);
        if (!metaEl) {
          metaEl = document.createElement('meta');
          if (isOG) {
            metaEl.setAttribute('property', property);
          } else {
            metaEl.name = property;
          }
          document.head.appendChild(metaEl);
        }
        metaEl.setAttribute('content', content);
      });
    };

    // A brief timeout allows child components' page title overrides to complete before we copy them to OG tags
    const ogTimeout = setTimeout(updateOGTags, 150);

    // 6. Inject Structured JSON-LD Schemas (Issue 6, Issue 14)
    const injectSchema = () => {
      let schemas = [];

      // A. Organization Schema (Homepage)
      const orgSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Alira Pharmaceuticals",
        "url": "https://alirapharmaceuticals.com",
        "logo": "https://alirapharmaceuticals.com/favicon.ico",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "A-116, URBTECH TRADE CENTRE, SECTOR-132, Baraula, Dadri",
          "addressLocality": "Gautam Buddha Nagar",
          "addressRegion": "Uttar Pradesh",
          "postalCode": "201304",
          "addressCountry": "IN"
        },
        "contactPoint": {
          "@type": "ContactPoint",
          "telephone": "+91-7895850793",
          "contactType": "sales",
          "availableLanguage": ["English", "Hindi"]
        }
      };

      // B. Breadcrumb Schema
      const breadcrumbList = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://alirapharmaceuticals.com/"
          }
        ]
      };

      if (canonicalPath === '/') {
        // Homepage specific schemas: Organization + FAQPage
        schemas.push(orgSchema);

        const homeFAQs = {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What types of surgical instruments do you export?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We export a comprehensive range of high-quality surgical instruments including Retractors & Elevators, Bone & Neuro Instruments, ENT & Oral Instruments, Surgical Blades & Accessories, and Trays & Utility Items. Our instruments are manufactured using medical-grade stainless steel and meet international quality standards for hospital and clinical use."
              }
            },
            {
              "@type": "Question",
              "name": "Do you supply disposable medical products and PPE?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. We are a reliable exporter of Gloves, Face Masks, PPE Kits, Surgical Drapes & Gowns, Wound Care Products, IV Products, and other medical disposables. All products comply with global healthcare safety standards."
              }
            },
            {
              "@type": "Question",
              "name": "Which countries do you export surgical instruments to?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We export to buyers across the Middle East, Africa, Europe, Asia, and North America. Our logistics network ensures timely delivery and complete export documentation."
              }
            },
            {
              "@type": "Question",
              "name": "Are your surgical instruments certified?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Our products are manufactured under strict quality control systems and comply with international certifications such as CE, ISO, and other country-specific regulatory standards."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer bulk supply for distributors and importers?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Absolutely. We specialize in bulk export of surgical instruments and medical supplies for wholesalers, distributors, hospital chains, and government procurement agencies. Competitive pricing and consistent supply are our core strengths."
              }
            },
            {
              "@type": "Question",
              "name": "Can you provide OEM or private labeling services?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. We offer OEM and private labeling services for international buyers. We can customize packaging, branding, labeling, and product specifications according to your market requirements."
              }
            }
          ]
        };
        schemas.push(homeFAQs);
      } else {
        // Inner pages schemas
        let currentPos = 2;
        let isBlogsListing = canonicalPath === '/blogs/';

        if (isBlogsListing) {
          breadcrumbList.itemListElement.push({
            "@type": "ListItem",
            "position": currentPos,
            "name": "Blog",
            "item": "https://alirapharmaceuticals.com/blogs/"
          });
          schemas.push(breadcrumbList);
        } else if (isBlogPost && blogPostMeta) {
          breadcrumbList.itemListElement.push({
            "@type": "ListItem",
            "position": 2,
            "name": "Blog",
            "item": "https://alirapharmaceuticals.com/blogs/"
          });
          breadcrumbList.itemListElement.push({
            "@type": "ListItem",
            "position": 3,
            "name": blogPostMeta.title,
            "item": canonicalUrl
          });
          schemas.push(breadcrumbList);

          // BlogPosting Schema (Issue 14)
          const articleSchema = {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            "headline": blogPostMeta.title.substring(0, 110),
            "description": blogPostMeta.description,
            "image": blogPostMeta.image,
            "datePublished": blogPostMeta.datePublished,
            "dateModified": blogPostMeta.datePublished, // Fallback to published
            "author": {
              "@type": "Organization",
              "name": "Alira Pharmaceuticals"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Alira Pharmaceuticals",
              "logo": {
                "@type": "ImageObject",
                "url": "https://alirapharmaceuticals.com/favicon.ico"
              }
            },
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": canonicalUrl
            }
          };
          schemas.push(articleSchema);
        } else if (isCategory && categoryMeta) {
          const segments = rawPath.split('/').filter(Boolean);
          breadcrumbList.itemListElement.push({
            "@type": "ListItem",
            "position": 2,
            "name": "Products",
            "item": `https://alirapharmaceuticals.com/products/${categorySlug}/`
          });
          
          if (segments[2]) {
            // Dynamic product
            breadcrumbList.itemListElement.push({
              "@type": "ListItem",
              "position": 3,
              "name": document.title.split('|')[0].trim(),
              "item": canonicalUrl
            });
          }
          schemas.push(breadcrumbList);

          // Product Schema
          const productSchema = {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": document.title.split('|')[0].trim(),
            "description": activeDescription,
            "image": "https://alirapharmaceuticals.com/favicon.ico",
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "USD",
              "itemCondition": "https://schema.org/NewCondition",
              "seller": {
                "@type": "Organization",
                "name": "Alira Pharmaceuticals"
              }
            }
          };
          schemas.push(productSchema);
        } else {
          // Other pages
          breadcrumbList.itemListElement.push({
            "@type": "ListItem",
            "position": 2,
            "name": document.title.split('|')[0].trim(),
            "item": canonicalUrl
          });
          schemas.push(breadcrumbList);

          // If major city page, add LocalBusiness schema
          if (isMajorCity && majorCityMeta) {
            const localBusiness = {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": `Alira Pharmaceuticals - ${pathSegment.toUpperCase()}`,
              "image": "https://alirapharmaceuticals.com/favicon.ico",
              "url": canonicalUrl,
              "telephone": "+91-7895850793",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": pathSegment.charAt(0).toUpperCase() + pathSegment.slice(1),
                "addressCountry": "SA"
              }
            };
            schemas.push(localBusiness);
          }
        }
      }

      // Inject schemas into DOM
      let script = document.getElementById('jsonld-schema');
      if (!script) {
        script = document.createElement('script');
        script.type = 'application/ld+json';
        script.id = 'jsonld-schema';
        document.head.appendChild(script);
      }
      script.innerHTML = JSON.stringify(schemas.length === 1 ? schemas[0] : schemas);
    };

    const schemaTimeout = setTimeout(injectSchema, 200);

    return () => {
      clearTimeout(ogTimeout);
      clearTimeout(schemaTimeout);
      const script = document.getElementById('jsonld-schema');
      if (script) script.remove();
    };
  }, [location.pathname]);

  return null;
};

export default SEOHelper;
