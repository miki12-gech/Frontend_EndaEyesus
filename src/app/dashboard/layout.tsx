import { Sidebar } from "@/components/dashboard/Sidebar";
import { Topbar } from "@/components/dashboard/Topbar";

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="min-h-screen bg-[#F8F5F0] dark:bg-[#0E0E0F] transition-colors duration-300">
            <Sidebar />
            <Topbar />
            <main className="pl-64 pt-16 min-h-screen">
                <div className="p-6">{children}</div>
            </main>
        </div>
    );
}
