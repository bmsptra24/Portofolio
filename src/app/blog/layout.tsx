import Header from '@/components/Header/Header'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Header variant="light" />
      {children}
    </>
  )
}
