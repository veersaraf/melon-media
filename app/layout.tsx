export const metadata = {
  metadataBase: new URL('https://www.melonmedia.site'),
  title: 'Melon Media | Product Photography Studio',
  description: 'We create stunning product photography for beauty, skincare, and lifestyle brands. Professional product shots made simple.',
  openGraph: {
    url: 'https://www.melonmedia.site',
    type: 'website',
    title: 'Melon Media | Product Photography Studio',
    description: 'We create stunning product photography for beauty, skincare, and lifestyle brands. Professional product shots made simple.',
    siteName: 'Melon Media',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Melon Media - Professional Product Photography',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    domain: 'melonmedia.site',
    url: 'https://www.melonmedia.site',
    title: 'Melon Media | Product Photography Studio',
    description: 'We create stunning product photography for beauty, skincare, and lifestyle brands. Professional product shots made simple.',
    images: ['/og-image.jpg'],
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
        <meta property="og:url" content="https://www.melonmedia.site" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Melon Media" />
        <meta property="og:title" content="Melon Media | Product Photography Studio" />
        <meta property="og:description" content="We create stunning product photography for beauty, skincare, and lifestyle brands. Professional product shots made simple." />
        <meta property="og:image" content="https://www.melonmedia.site/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="melonmedia.site" />
        <meta property="twitter:url" content="https://www.melonmedia.site" />
        <meta name="twitter:title" content="Melon Media | Product Photography Studio" />
        <meta name="twitter:description" content="We create stunning product photography for beauty, skincare, and lifestyle brands. Professional product shots made simple." />
        <meta name="twitter:image" content="https://www.melonmedia.site/og-image.jpg" />
        
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