export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <main className="layout-container">
          {children}
        </main>
      </body>
    </html>
  )
} 