import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Montserrat, Lora } from "next/font/google";
import "./globals.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import Script from "next/script";
import ScrollToTop from "@/components/general/ScrollToTop";
import NavBar from "@/components/general/navbar";
import ScrollBookNow from "@/components/general/ScrollBookNow";
import Footer from "@/components/general/Footer";
import { Toaster } from "@/components/ui/sonner";
import TermlyCMP from "@/components/general/TermlyCMP";
import { CookieIcon } from "lucide-react";
import WhatsAppLive from "@/components/general/WhatsAppLive";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.aidaayurveda.com";
const BRAND = "Aida Ayurveda";

const monserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["cyrillic", "cyrillic-ext", "latin", "latin-ext", "vietnamese"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    metadataBase: new URL(SITE_URL),
    title: {
      default: `${BRAND} | Authentic Ayurveda in Sri Lanka`,
      template: `%s | ${BRAND}`,
    },
    description:
      "Experience authentic Ayurveda treatments, yoga, and wellness by the beach at Aida Ayurveda & Hotel in Sri Lanka.",
    openGraph: {
      type: "website",
      siteName: BRAND,
      title: `${BRAND} | Authentic Ayurveda in Sri Lanka`,
      description:
        "Experience authentic Ayurveda treatments, yoga, and wellness by the beach at Aida Ayurveda & Hotel in Sri Lanka.",
      images: [
        {
          url: "/icon/social.png",
          width: 1200,
          height: 630,
          alt: `${BRAND} social image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${BRAND} | Authentic Ayurveda in Sri Lanka`,
      description:
        "Experience authentic Ayurveda treatments, yoga, and wellness by the beach at Aida Ayurveda & Hotel in Sri Lanka.",
      images: ["/icon/social.png"],
    },
    robots: {
      index: true,
      follow: true,
    },
    themeColor: "#ffffff",
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body className={`${monserrat.className} ${lora.variable} antialiased`}>
        <head>
            <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-N4CCGXFP');
            `,
          }}
        />
          <script
            dangerouslySetInnerHTML={{
              __html: `
function loadScript(a){
  var b=document.getElementsByTagName("head")[0],
      c=document.createElement("script");
  c.type="text/javascript",
  c.src="https://tracker.metricool.com/resources/be.js",
  c.onreadystatechange=a,
  c.onload=a,
  b.appendChild(c)
}
loadScript(function(){
  beTracker.t({hash:"5a89330ce1204ead28da0df4142e3ace"})
});
            `,
            }}
          />
        </head>
        <Script
          id="org-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: BRAND,
              url: SITE_URL,
              logo: `${SITE_URL}/icon/social.png`,
              sameAs: [
                "https://www.facebook.com/AidaHotelAyurveda",
                "https://www.instagram.com/aida_ayurveda/",
              ],
            }),
          }}
        />
        <Script
          id="website-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: SITE_URL,
              name: BRAND,
              potentialAction: {
                "@type": "SearchAction",
                target:
                  "https://www.google.com/search?q={search_term_string}+site:aidaayurveda.com",
                "query-input": "required name=search_term_string",
              },
            }),
          }}
        />
        <ScrollToTop />
        <NextIntlClientProvider>
          <TermlyCMP
            websiteUUID={process.env.NEXT_PUBLIC_WEBSITE_UUID}
            autoBlock={undefined}
            masterConsentsOrigin={undefined}
          />
          <Toaster />
          <NavBar />
          <ScrollBookNow />
          {children}
          <div
            style={{
              position: "fixed",
              bottom: "0",
              left: "1.5rem",
              zIndex: 50,
            }}
          >
            <a href="#" className="termly-display-preferences px-3 py-1">
              <CookieIcon className="mr-1 text-orange-500 " size={35} />
            </a>
          </div>
          <Footer />
          <WhatsAppLive />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
