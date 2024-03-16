import Sidebar from './dashboard/components/sidebar'

export default function DashboardLayout({
  children, 
}: {
  children: React.ReactNode
}) {
  return (
    <section>
      <div className="grid lg:grid-cols-9 gap-4">
        <div className="lg:col-span-2">
          <Sidebar />
        </div>
        <div className="lg:col-span-7">
          {children}
          </div>
      </div>
    </section>
  )
}
