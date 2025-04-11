export const metadata = {
  metadataBase: new URL('https://www.melonmedia.site'),
  title: 'Melon Media | High-End Product Visuals',
  description: 'We craft high-end product visuals for beauty & skincare brands. Transform your brand with scroll-stopping photography.',
  openGraph: {
    title: 'Melon Media | High-End Product Visuals',
    description: 'We craft high-end product visuals for beauty & skincare brands. Transform your brand with scroll-stopping photography.',
    url: 'https://www.melonmedia.site',
    siteName: 'Melon Media',
    images: [{
      url: '/og-image.jpg',
      width: 1200,
      height: 630,
      alt: 'Melon Media - Beauty & Skincare Product Photography',
    }],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Melon Media | High-End Product Visuals',
    description: 'We craft high-end product visuals for beauty & skincare brands. Transform your brand with scroll-stopping photography.',
    images: ['/og-image.jpg'],
  },
  other: {
    'og:image': 'https://www.melonmedia.site/og-image.jpg',
    'og:image:width': '1200',
    'og:image:height': '630',
    'og:type': 'website',
    'og:site_name': 'Melon Media',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="https://www.melonmedia.site/og-image.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Melon Media" />
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