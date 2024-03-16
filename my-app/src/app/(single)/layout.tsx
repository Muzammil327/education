import Footer from '@/src/components/layout/footer/page'
import Navbar from '@/src/components/layout/navbar/page'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <Navbar />
      {children}
      <Footer />
    </section>
  )
}
