import { DashboardMetrics, AgentUser, ApprovalRequest, ActivityLog, RolePermission } from "./agent.types";

// Mock Data
const MOCK_METRICS: DashboardMetrics = {
    totalUsers: 1248,
    pendingApprovals: 42,
    activeClasses: 8,
    suspendedUsers: 3,
    genderData: [
        { name: "Male", value: 650 },
        { name: "Female", value: 598 },
    ],
    academicYearData: [
        { name: "1st Year", value: 300 },
        { name: "2nd Year", value: 280 },
        { name: "3rd Year", value: 250 },
        { name: "4th Year", value: 220 },
        { name: "5th+ Year", value: 198 },
    ],
};

const MOCK_USERS: AgentUser[] = [
    { id: "1", fullName: "Tsegay Hailu", username: "tsegay_h", department: "Software Engineering", serviceClass: "Choir (Mezmur)", status: "active", profileImageUrl: null, role: "moderator" },
    { id: "2", fullName: "Miriam Tesfaye", username: "miriam_t", department: "Medicine", serviceClass: "Sunday School Teacher", status: "active", profileImageUrl: null },
    { id: "3", fullName: "Bereket Alemu", username: "beki_a", department: "Civil Engineering", serviceClass: "Mahber (General Assembly)", status: "pending", profileImageUrl: null },
    { id: "4", fullName: "Dawit Kiros", username: "dawit_k", department: "Computer Science", serviceClass: "Media & Communications", status: "suspended", profileImageUrl: null },
    { id: "5", fullName: "Sara Gebru", username: "sara_g", department: "Law", serviceClass: "Youth Leadership", status: "active", profileImageUrl: null },
];

const MOCK_APPROVALS: ApprovalRequest[] = [
    { id: "a1", userId: "3", fullName: "Bereket Alemu", serviceClass: "Mahber (General Assembly)", requestDate: "2026-02-20", status: "pending" },
    { id: "a2", userId: "6", fullName: "Abel Yonas", serviceClass: "Choir (Mezmur)", requestDate: "2026-02-21", status: "pending" },
];

const MOCK_LOGS: ActivityLog[] = [
    { id: "l1", action: "Approved user registration", performedBy: "Admin", targetUser: "Lidetu H.", timestamp: "2026-02-21 10:30 AM", status: "success" },
    { id: "l2", action: "Suspended account", performedBy: "Admin", targetUser: "Dawit Kiros", timestamp: "2026-02-20 04:15 PM", status: "success" },
    { id: "l3", action: "Failed login attempt", performedBy: "Unknown", timestamp: "2026-02-20 11:00 PM", status: "failed" },
];

const MOCK_PERMISSIONS: RolePermission[] = [
    { role: "admin", manageUsers: true, manageApprovals: true, manageRoles: true, manageAnnouncements: true, viewLogs: true },
    { role: "moderator", manageUsers: false, manageApprovals: true, manageRoles: false, manageAnnouncements: true, viewLogs: false },
    { role: "viewer", manageUsers: false, manageApprovals: false, manageRoles: false, manageAnnouncements: false, viewLogs: false },
];

// Service functions (Mocked with delay)
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const agentService = {
    getMetrics: async (): Promise<DashboardMetrics> => {
        await delay(500);
        return MOCK_METRICS;
    },

    getUsers: async (): Promise<AgentUser[]> => {
        await delay(500);
        return MOCK_USERS;
    },

    getApprovals: async (): Promise<ApprovalRequest[]> => {
        await delay(500);
        return MOCK_APPROVALS;
    },

    getLogs: async (): Promise<ActivityLog[]> => {
        await delay(500);
        return MOCK_LOGS;
    },

    getPermissions: async (): Promise<RolePermission[]> => {
        await delay(300);
        return MOCK_PERMISSIONS;
    },

    // Mutations
    updateUserStatus: async (userId: string, status: AgentUser["status"]): Promise<boolean> => {
        await delay(400);
        console.log(`User ${userId} status changed to ${status}`);
        return true;
    },

    handleApproval: async (requestId: string, action: "approved" | "rejected"): Promise<boolean> => {
        await delay(400);
        console.log(`Request ${requestId} ${action}`);
        return true;
    }
};
