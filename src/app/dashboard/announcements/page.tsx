import { Bell, Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";

const announcements = [
    {
        id: 1,
        title: "Sunday Liturgy – Timkat Celebration",
        body: "Join us this Sunday for the grand Timkat (Epiphany) celebration. The procession will begin at 6:00 AM from the campus chapel. All members are expected to wear white traditional clothing. Candles will be provided.",
        date: "Tir 22, 2017 E.C.",
        category: "Service",
        categoryColor: "#0F3D2E",
        author: "Abba Tesfamariam",
    },
    {
        id: 2,
        title: "Choir Rehearsal – New Members Welcome",
        body: "The Mezmur choir is welcoming new members for the upcoming semester. Whether you sing soprano, alto, tenor, or bass — you are warmly invited. First rehearsal is Saturday at 3 PM in the chapel hall.",
        date: "Tir 20, 2017 E.C.",
        category: "Choir",
        categoryColor: "#C9A227",
        author: "Choir Director",
    },
    {
        id: 3,
        title: "Sunday School Teacher Training",
        body: "Mandatory teacher training session for all Sunday school instructors on Tir 25. Attendance certificates will be issued. Lunch will be provided. Please confirm your attendance by Wednesday.",
        date: "Tir 18, 2017 E.C.",
        category: "Education",
        categoryColor: "#7A1C1C",
        author: "Education Committee",
    },
    {
        id: 4,
        title: "Ye'abiy Tsom – Great Lent Preparation",
        body: "Ye'abiy Tsom (Great Lent) begins on Yekatit 3. The fellowship will hold daily morning prayers starting at 5:30 AM throughout the fasting period. All members are encouraged to participate.",
        date: "Tir 15, 2017 E.C.",
        category: "Fasting",
        categoryColor: "#0F3D2E",
        author: "Fellowship Committee",
    },
];

export default function AnnouncementsPage() {
    return (
        <div className="max-w-3xl mx-auto space-y-5">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#0F3D2E] dark:bg-[#1E4D3A] flex items-center justify-center">
                        <Bell className="h-5 w-5 text-[#C9A227] dark:text-[#D4AF37]" />
                    </div>
                    <div>
                        <h1 className="text-lg font-bold text-[#0F3D2E] dark:text-[#D4AF37]">Announcements</h1>
                        <p className="text-xs text-[#6b6b6b] dark:text-[#B0B0B0]">{announcements.length} recent announcements</p>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                {announcements.map((a) => (
                    <article
                        key={a.id}
                        className="bg-white dark:bg-[#1C1C1F] rounded-xl p-5 border border-[#ddd8d0] dark:border-[#2a2a2d] shadow-sm hover:shadow-md transition-shadow"
                        style={{ borderLeft: `4px solid ${a.categoryColor}` }}
                    >
                        <div className="flex items-start gap-3">
                            <div
                                className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                                style={{ backgroundColor: `${a.categoryColor}15` }}
                            >
                                <Calendar className="h-5 w-5" style={{ color: a.categoryColor }} />
                            </div>
                            <div className="flex-1 min-w-0">
                                <div className="flex flex-wrap items-center gap-2 mb-2">
                                    <span
                                        className="text-[10px] font-bold px-2 py-0.5 rounded-full text-white"
                                        style={{ backgroundColor: a.categoryColor }}
                                    >
                                        {a.category}
                                    </span>
                                    <span className="text-[10px] text-[#6b6b6b] dark:text-[#B0B0B0]">{a.date}</span>
                                    <span className="text-[10px] text-[#6b6b6b] dark:text-[#B0B0B0]">· by {a.author}</span>
                                </div>
                                <h2 className="text-sm font-bold text-[#0F3D2E] dark:text-[#F5F5F5] leading-snug mb-2">{a.title}</h2>
                                <p className="text-xs text-[#6b6b6b] dark:text-[#B0B0B0] leading-relaxed">{a.body}</p>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    );
}
