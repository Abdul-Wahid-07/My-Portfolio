import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://abdul-wahid.vercel.app"), // <-- replace with your domain
  title: {
    default: "Abdul Wahid Khan | MERN & Backend Developer",
    template: "%s | Abdul Wahid Khan",
  },
  description:
    "I’m Abdul Wahid Khan, a MERN and Backend Developer skilled in Express, Node.js, MongoDB, JavaScript, and Next.js. Explore my projects, experience, and portfolio.",
  keywords: [
    "MERN Developer",
    "Backend Developer",
    "Node.js Developer",
    "Express Developer",
    "MongoDB Developer",
    "JavaScript Developer",
    "Next.js Developer",
    "Portfolio",
  ],
  authors: [{ name: "Abdul Wahid Khan" }],
  creator: "Abdul Wahid Khan",
  publisher: "Abdul Wahid Khan",

  openGraph: {
    title: "Abdul Wahid Khan | MERN & Backend Developer",
    description:
      "Portfolio of Abdul Wahid Khan, MERN and Backend Developer with projects, skills, and experience.",
    url: "https://abdul-wahid.vercel.app",
    siteName: "Abdul Wahid Khan Portfolio",
    images: [
      {
        url: "/og-image.png", // create this image
        width: 1200,
        height: 630,
        alt: "Abdul Wahid Khan Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Abdul Wahid Khan | MERN & Backend Developer",
    description:
      "Explore projects and experience of MERN and Backend Developer Abdul Wahid Khan.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://abdul-wahid.vercel.app",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* JSON-LD: Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Abdul Wahid Khan",
              url: "https://abdul-wahid.vercel.app",
              jobTitle: "MERN & Backend Developer",
              sameAs: [
                "https://github.com/Abdul-Wahid-07",
                "https://www.linkedin.com/in/abdul-wahid-khan-",
              ],
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
