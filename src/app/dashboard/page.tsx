"use client";

import { Bell, BookOpen, Users, Calendar, ChevronRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { useUserStore } from "@/store/userStore";

const announcements = [
    {
        id: 1,
        title: "Sunday Liturgy – Timkat Celebration",
        excerpt: "Join us this Sunday for the grand Timkat (Epiphany) celebration. The procession will begin at 6:00 AM from the campus chapel.",
        date: "Tir 22, 2017 E.C.",
        category: "Service",
        categoryColor: "#0F3D2E",
        darkColor: "#1E4D3A",
    },
    {
        id: 2,
        title: "Choir Rehearsal – New Members Welcome",
        excerpt: "The Mezmur choir is welcoming new members for the upcoming semester. All voices and instruments are welcome.",
        date: "Tir 20, 2017 E.C.",
        category: "Choir",
        categoryColor: "#C9A227",
        darkColor: "#D4AF37",
    },
    {
        id: 3,
        title: "Sunday School Teacher Training",
        excerpt: "Mandatory teacher training session for all Sunday school instructors. Attendance certificates will be issued.",
        date: "Tir 18, 2017 E.C.",
        category: "Education",
        categoryColor: "#7A1C1C",
        darkColor: "#8B2C2C",
    },
];

const stats = [
    { label: "Total Members", value: "248", icon: Users, color: "#0F3D2E", darkColor: "#1E4D3A" },
    { label: "Service Classes", value: "8", icon: BookOpen, color: "#C9A227", darkColor: "#D4AF37" },
    { label: "Announcements", value: "12", icon: Bell, color: "#7A1C1C", darkColor: "#8B2C2C" },
    { label: "Events This Month", value: "5", icon: Calendar, color: "#0F3D2E", darkColor: "#1E4D3A" },
];

export default function DashboardPage() {
    const user = useUserStore((s) => s.user);
    const displayName = user?.fullName?.split(" ")[0] || "Member";

    return (
        <div className="max-w-5xl mx-auto space-y-6">
            {/* Welcome banner */}
            <div
                className="rounded-2xl p-6 flex items-center gap-5"
                style={{ background: "linear-gradient(135deg, #0F3D2E 0%, #1a5c44 100%)", borderLeft: "4px solid #C9A227" }}
            >
                {/* Profile image or initials */}
                <div className="w-14 h-14 rounded-full border-2 border-[#C9A227]/60 overflow-hidden flex-shrink-0">
                    {user?.profileImageUrl ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={user.profileImageUrl} alt="Profile" className="w-full h-full object-cover" />
                    ) : (
                        <div className="w-full h-full bg-[#C9A227]/20 flex items-center justify-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <rect x="10.5" y="1" width="3" height="22" rx="1" fill="#C9A227" />
                                <rect x="2" y="7" width="20" height="3" rx="1" fill="#C9A227" />
                            </svg>
                        </div>
                    )}
                </div>
                <div>
                    <h1 className="text-white font-bold text-xl leading-tight flex items-center gap-2">
                        Welcome back, {displayName} <Sparkles className="h-5 w-5 text-[#C9A227]" />
                    </h1>
                    <p className="text-white/60 text-sm mt-0.5">
                        {user?.serviceClass || "Fellowship Member"} · Enda Eyesus MU Fellowship
                    </p>
                </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map(({ label, value, icon: Icon, color }) => (
                    <div
                        key={label}
                        className="bg-white dark:bg-[#1C1C1F] rounded-xl p-4 shadow-sm border border-[#ddd8d0] dark:border-[#2a2a2d] flex items-center gap-4"
                        style={{ borderLeft: `3px solid ${color}` }}
                    >
                        <div
                            className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                            style={{ backgroundColor: `${color}15` }}
                        >
                            <Icon className="h-5 w-5" style={{ color }} />
                        </div>
                        <div>
                            <p className="text-xl font-bold text-[#1a1a1a] dark:text-[#F5F5F5]">{value}</p>
                            <p className="text-xs text-[#6b6b6b] dark:text-[#B0B0B0] font-medium">{label}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Main content grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Announcements feed */}
                <div className="lg:col-span-2 space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-base font-semibold text-[#0F3D2E] dark:text-[#D4AF37]">Recent Announcements</h2>
                        <Link href="/dashboard/announcements"
                            className="text-xs text-[#C9A227] dark:text-[#D4AF37] font-semibold hover:text-[#0F3D2E] dark:hover:text-[#F5F5F5] flex items-center gap-0.5 transition-colors">
                            View all <ChevronRight className="h-3 w-3" />
                        </Link>
                    </div>

                    <div className="space-y-3">
                        {announcements.map((a) => (
                            <div
                                key={a.id}
                                className="bg-white dark:bg-[#1C1C1F] rounded-xl p-5 shadow-sm border border-[#ddd8d0] dark:border-[#2a2a2d] hover:shadow-md transition-shadow"
                                style={{ borderLeft: `3px solid ${a.categoryColor}` }}
                            >
                                <div className="flex items-start justify-between gap-3">
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-2 mb-1.5">
                                            <span
                                                className="text-[10px] font-bold px-2 py-0.5 rounded-full text-white"
                                                style={{ backgroundColor: a.categoryColor }}
                                            >
                                                {a.category}
                                            </span>
                                            <span className="text-[10px] text-[#6b6b6b] dark:text-[#B0B0B0]">{a.date}</span>
                                        </div>
                                        <h3 className="text-sm font-semibold text-[#0F3D2E] dark:text-[#F5F5F5] leading-snug">{a.title}</h3>
                                        <p className="text-xs text-[#6b6b6b] dark:text-[#B0B0B0] mt-1 leading-relaxed line-clamp-2">{a.excerpt}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right sidebar widgets */}
                <div className="space-y-4">
                    <div className="bg-white dark:bg-[#1C1C1F] rounded-xl p-5 shadow-sm border border-[#ddd8d0] dark:border-[#2a2a2d]" style={{ borderTop: "3px solid #C9A227" }}>
                        <h2 className="text-sm font-semibold text-[#0F3D2E] dark:text-[#D4AF37] mb-3">My Service Class</h2>
                        <div className="flex items-center gap-3 bg-[#F8F5F0] dark:bg-[#252529] rounded-xl p-3">
                            <div className="w-10 h-10 rounded-xl bg-[#C9A227]/15 flex items-center justify-center">
                                <BookOpen className="h-5 w-5 text-[#C9A227] dark:text-[#D4AF37]" />
                            </div>
                            <div>
                                <p className="text-sm font-semibold text-[#1a1a1a] dark:text-[#F5F5F5]">
                                    {user?.serviceClass || "Not assigned"}
                                </p>
                                <p className="text-xs text-[#6b6b6b] dark:text-[#B0B0B0]">Rehearsals: Saturdays 3PM</p>
                            </div>
                        </div>
                        <Link href="/dashboard/my-class"
                            className="mt-3 text-xs text-[#0F3D2E] dark:text-[#D4AF37] font-semibold hover:text-[#C9A227] flex items-center gap-0.5 transition-colors">
                            View class details <ChevronRight className="h-3 w-3" />
                        </Link>
                    </div>

                    <div className="bg-white dark:bg-[#1C1C1F] rounded-xl p-5 shadow-sm border border-[#ddd8d0] dark:border-[#2a2a2d]" style={{ borderTop: "3px solid #0F3D2E" }}>
                        <h2 className="text-sm font-semibold text-[#0F3D2E] dark:text-[#D4AF37] mb-3">Upcoming Events</h2>
                        <ul className="space-y-2.5">
                            {[
                                { title: "Timkat Liturgy", date: "Tir 22" },
                                { title: "Monthly Fast", date: "Tir 25" },
                                { title: "Youth Conference", date: "Yekatit 01" },
                            ].map((ev) => (
                                <li key={ev.title} className="flex items-center gap-3">
                                    <span className="w-9 h-9 rounded-lg bg-[#0F3D2E]/10 dark:bg-[#1E4D3A]/30 text-[#0F3D2E] dark:text-[#D4AF37] flex items-center justify-center text-[10px] font-bold flex-shrink-0">
                                        {ev.date.split(" ")[1] ?? ev.date}
                                    </span>
                                    <div>
                                        <p className="text-xs font-semibold text-[#1a1a1a] dark:text-[#F5F5F5]">{ev.title}</p>
                                        <p className="text-[10px] text-[#6b6b6b] dark:text-[#B0B0B0]">{ev.date}, 2017 E.C.</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
