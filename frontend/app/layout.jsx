import "./globals.css";
// import { headers } from "next/headers";
import { ToastProvider } from "@/contexts/ToastContext";

export const metadata = {
  title: {
    default: "Landrup Dans",
    template: "%s | Landrup Dans",
  },
  description: "Landrup Dans, er din danseskole, for ny og klassisk dans, for alle aldre",
  robots: 'index, follow',

  twitter: {
    card: "summary_large_image",
    title: "Landrup Dans",
    description: "Landrup Dans, er din danseskole, for ny og klassisk dans, for alle aldre",
    type: "website",
    url: "https://kb-landrup-dans-blue.vercel.app",
    images: [
      {
        url: "https://kb-landrup-dans-blue.vercel.app/api/og/1200x630",
        width: 1200,
        height: 630,
        alt: 'Landrup Dans OG Image',
      }
    ],
    siteName: "Landrup Dans",
    locale: "da_DK",
  },

  openGraph: {
    title: "Landrup Dans",
    description: "Landrup Dans, er din danseskole, for ny og klassisk dans, for alle aldre",
    type: "website",
    url: "https://kb-landrup-dans-blue.vercel.app",
    images: [
      {
        url: "https://kb-landrup-dans-blue.vercel.app/api/og/1200x630",
        width: 1200,
        height: 630,
        alt: 'Landrup Dans OG Image',
      }
    ],
    siteName: "Landrup Dans",
    locale: "da_DK",
  },

  alternates: {
    canonical: "https://kb-landrup-dans-blue.vercel.app",
  },
}

export default async function RootLayout({ children }) {
  // const headerList = await headers()
  // const currentPath = headerList.get("x-current-path")
  // console.log('currentPath', currentPath)
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  )
}
