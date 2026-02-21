"use client";

import { MapPin, BookOpen, GraduationCap, Phone, Mail, Music, Edit, User, Calendar, ArrowLeft } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useUserStore } from "@/store/userStore";
import { useRef } from "react";

export default function ProfilePage() {
    const { user, updateProfileImage } = useUserStore();
    const fileInputRef = useRef<HTMLInputElement>(null);

    const initials = user?.fullName
        ? user.fullName.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase()
        : "?";

    const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const url = URL.createObjectURL(file);
            updateProfileImage(url);
        }
    };

    return (
        <div className="max-w-3xl mx-auto space-y-5">
            {/* Back button */}
            <Link
                href="/dashboard"
                className="inline-flex items-center gap-1.5 text-sm text-[#6b6b6b] dark:text-[#B0B0B0] hover:text-[#0F3D2E] dark:hover:text-[#D4AF37] font-medium transition-colors group mb-1"
            >
                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-0.5 transition-transform" />
                Back to Dashboard
            </Link>

            {/* Profile Card */}
            <div
                className="bg-white dark:bg-[#1C1C1F] rounded-2xl border border-[#ddd8d0] dark:border-[#2a2a2d] shadow-sm overflow-hidden"
                style={{ borderTop: "4px solid #C9A227" }}
            >
                {/* Cover banner */}
                <div className="h-24 bg-[#0F3D2E] dark:bg-[#151516] relative">
                    <div className="absolute inset-0 opacity-10">
                        <svg className="w-full h-full" viewBox="0 0 400 96" fill="none" aria-hidden="true">
                            <rect x="190" y="4" width="20" height="88" rx="4" fill="#C9A227" />
                            <rect x="140" y="36" width="120" height="20" rx="4" fill="#C9A227" />
                        </svg>
                    </div>
                </div>

                <div className="px-6 pb-6">
                    {/* Avatar + Edit */}
                    <div className="flex items-end justify-between -mt-10 mb-4">
                        <div className="relative group">
                            <Avatar className="h-20 w-20 border-4 border-white dark:border-[#1C1C1F] shadow-md">
                                {user?.profileImageUrl && <AvatarImage src={user.profileImageUrl} alt={user.fullName} />}
                                <AvatarFallback className="text-2xl font-bold bg-[#0F3D2E] dark:bg-[#1E4D3A] text-[#C9A227] dark:text-[#D4AF37]">
                                    {initials}
                                </AvatarFallback>
                            </Avatar>
                            {/* Change photo overlay */}
                            <button
                                onClick={() => fileInputRef.current?.click()}
                                className="absolute inset-0 rounded-full bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                                aria-label="Change profile photo"
                            >
                                <Edit className="h-5 w-5 text-white" />
                            </button>
                            <input
                                ref={fileInputRef}
                                type="file"
                                accept="image/*"
                                className="hidden"
                                onChange={handlePhotoChange}
                                aria-label="Upload profile photo"
                            />
                        </div>
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => fileInputRef.current?.click()}
                            className="border-[#0F3D2E] dark:border-[#D4AF37] text-[#0F3D2E] dark:text-[#D4AF37] hover:bg-[#0F3D2E] dark:hover:bg-[#D4AF37] hover:text-white dark:hover:text-[#0E0E0F] rounded-xl text-xs flex items-center gap-1.5 transition-all"
                        >
                            <Edit className="h-3.5 w-3.5" /> Change Photo
                        </Button>
                    </div>

                    {/* Name & identity */}
                    <div className="mb-4">
                        <h1 className="text-xl font-bold text-[#0F3D2E] dark:text-[#D4AF37]">
                            {user?.fullName || "Guest Member"}
                        </h1>
                        <p className="text-sm text-[#6b6b6b] dark:text-[#B0B0B0]">
                            @{user?.username || "username"}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-2">
                            <Badge className="bg-[#0F3D2E] dark:bg-[#1E4D3A] text-white text-[10px] hover:bg-[#0F3D2E]">
                                Member
                            </Badge>
                            {user?.serviceClass && (
                                <Badge className="bg-[#C9A227]/15 dark:bg-[#D4AF37]/15 text-[#C9A227] dark:text-[#D4AF37] border border-[#C9A227]/30 dark:border-[#D4AF37]/30 text-[10px] hover:bg-[#C9A227]/20">
                                    {user.serviceClass}
                                </Badge>
                            )}
                        </div>
                    </div>

                    {/* Bio */}
                    {user?.bio && (
                        <p className="text-sm text-[#6b6b6b] dark:text-[#B0B0B0] leading-relaxed mb-5 bg-[#F8F5F0] dark:bg-[#252529] rounded-xl p-3 italic">
                            &ldquo;{user.bio}&rdquo;
                        </p>
                    )}

                    {/* Info grid */}
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { icon: GraduationCap, label: "Department", value: user?.department },
                            { icon: BookOpen, label: "Academic Year", value: user?.academicYear },
                            { icon: Music, label: "Service Class", value: user?.serviceClass },
                            { icon: MapPin, label: "Birth Place", value: user?.birthPlace },
                            { icon: Calendar, label: "Birth Date", value: user?.birthDate },
                            { icon: User, label: "Sex", value: user?.sex ? (user.sex.charAt(0).toUpperCase() + user.sex.slice(1)) : undefined },
                            { icon: Mail, label: "Email", value: user?.email },
                            { icon: Phone, label: "Phone", value: user?.phone },
                        ]
                            .filter((item) => item.value)
                            .map(({ icon: Icon, label, value }) => (
                                <div key={label} className="flex items-start gap-3">
                                    <div className="w-8 h-8 rounded-lg bg-[#0F3D2E]/10 dark:bg-[#1E4D3A]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <Icon className="h-4 w-4 text-[#0F3D2E] dark:text-[#D4AF37]" />
                                    </div>
                                    <div className="min-w-0">
                                        <p className="text-[10px] text-[#6b6b6b] dark:text-[#B0B0B0] font-medium uppercase tracking-wide">{label}</p>
                                        <p className="text-xs font-semibold text-[#1a1a1a] dark:text-[#F5F5F5] leading-snug">{value}</p>
                                    </div>
                                </div>
                            ))}
                    </div>
                </div>
            </div>

            {/* Activity summary */}
            <div className="bg-white dark:bg-[#1C1C1F] rounded-xl p-5 border border-[#ddd8d0] dark:border-[#2a2a2d] shadow-sm" style={{ borderLeft: "3px solid #C9A227" }}>
                <h2 className="text-sm font-semibold text-[#0F3D2E] dark:text-[#D4AF37] mb-4">Activity Summary</h2>
                <div className="grid grid-cols-3 gap-4">
                    {[
                        { label: "Liturgies Attended", value: "18" },
                        { label: "Rehearsals", value: "32" },
                        { label: "Community Events", value: "7" },
                    ].map(({ label, value }) => (
                        <div key={label} className="text-center p-3 rounded-xl bg-[#F8F5F0] dark:bg-[#252529]">
                            <p className="text-2xl font-bold text-[#0F3D2E] dark:text-[#D4AF37]">{value}</p>
                            <p className="text-[10px] text-[#6b6b6b] dark:text-[#B0B0B0] mt-0.5 font-medium">{label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
