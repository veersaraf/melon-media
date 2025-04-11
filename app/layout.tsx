export const metadata = {
  title: 'Melon Media | High-End Product Visuals',
  description: 'We craft high-end product visuals for beauty & skincare brands. Transform your brand with scroll-stopping photography.',
  openGraph: {
    title: 'Melon Media | High-End Product Visuals',
    description: 'We craft high-end product visuals for beauty & skincare brands. Transform your brand with scroll-stopping photography.',
    url: 'https://www.melonmedia.site',
    siteName: 'Melon Media',
    images: [
      {
        url: 'https://www.melonmedia.site/og-image.jpg', // You'll need to add this image
        width: 1200,
        height: 630,
        alt: 'Melon Media - Beauty & Skincare Product Photography',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Melon Media | High-End Product Visuals',
    description: 'We craft high-end product visuals for beauty & skincare brands. Transform your brand with scroll-stopping photography.',
    images: ['https://www.melonmedia.site/og-image.jpg'], // Same image as OG
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#ffffff" />
      </head>
      <body>
        <main className="layout-container">
          {children}
        </main>
      </body>
    </html>
  )
} 