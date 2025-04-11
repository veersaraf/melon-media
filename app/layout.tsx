export const metadata = {
  metadataBase: new URL('https://www.melonmedia.site'),
  title: 'Melon Media',
  description: 'Product shots made simple',
  openGraph: {
    url: 'https://www.melonmedia.site',
    type: 'website',
    title: 'Melon Media',
    description: 'Product shots made simple',
    images: [{
      url: 'https://freeimage.host/i/3cql7Pp',
      width: 1200,
      height: 630,
      alt: 'Melon Media',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    domain: 'melonmedia.site',
    url: 'https://www.melonmedia.site',
    title: 'Melon Media',
    description: 'Product shots made simple',
    images: ['https://opengraph.b-cdn.net/production/images/703ffed9-0bb8-4926-9559-fa12186b312d.jpg?token=i7Vu_-h8zAwrxfG5pXQLk4En1-A7L6h4Zt3BPvBGmkU&height=630&width=1200&expires=33280350381'],
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
        <meta property="og:title" content="Melon Media" />
        <meta property="og:description" content="Product shots made simple" />
        <meta property="og:image" content="https://opengraph.b-cdn.net/production/images/703ffed9-0bb8-4926-9559-fa12186b312d.jpg?token=i7Vu_-h8zAwrxfG5pXQLk4En1-A7L6h4Zt3BPvBGmkU&height=630&width=1200&expires=33280350381" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="melonmedia.site" />
        <meta property="twitter:url" content="https://www.melonmedia.site" />
        <meta name="twitter:title" content="Melon Media" />
        <meta name="twitter:description" content="Product shots made simple" />
        <meta name="twitter:image" content="https://opengraph.b-cdn.net/production/images/703ffed9-0bb8-4926-9559-fa12186b312d.jpg?token=i7Vu_-h8zAwrxfG5pXQLk4En1-A7L6h4Zt3BPvBGmkU&height=630&width=1200&expires=33280350381" />
        
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