import DashboardSidebar from "@/components/layout/sidebar/dashboard-sidebar";

export const metadata = {
  title: "Dashboard | Kingpin",
  description: "Manage your bookings and membership at Kingpin",
};

export default function DashboardLayout({ children }) {
  return (
    <div className="flex bg-[#F9FAFB] min-h-screen">
      <DashboardSidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="min-h-full">
          {children}
        </div>
      </main>
    </div>
  );
}
