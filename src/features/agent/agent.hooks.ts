import { useState, useEffect } from "react";
import { agentService } from "./agent.service";
import { DashboardMetrics, AgentUser, ApprovalRequest, ActivityLog, RolePermission } from "./agent.types";

export function useAgentDashboard() {
    const [metrics, setMetrics] = useState<DashboardMetrics | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        agentService.getMetrics().then(data => {
            setMetrics(data);
            setLoading(false);
        });
    }, []);

    return { metrics, loading };
}

export function useAgentUsers() {
    const [users, setUsers] = useState<AgentUser[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchUsers = () => {
        setLoading(true);
        agentService.getUsers().then(data => {
            setUsers(data);
            setLoading(false);
        });
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    const changeStatus = async (userId: string, status: "active" | "pending" | "suspended") => {
        const success = await agentService.updateUserStatus(userId, status);
        if (success) {
            setUsers(prev => prev.map(u => u.id === userId ? { ...u, status } : u));
        }
    };

    return { users, loading, changeStatus, refresh: fetchUsers };
}

export function useAgentApprovals() {
    const [approvals, setApprovals] = useState<ApprovalRequest[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchApprovals = () => {
        setLoading(true);
        agentService.getApprovals().then(data => {
            setApprovals(data);
            setLoading(false);
        });
    };

    useEffect(() => {
        fetchApprovals();
    }, []);

    const handleRequest = async (id: string, action: "approved" | "rejected") => {
        const success = await agentService.handleApproval(id, action);
        if (success) {
            setApprovals(prev => prev.filter(a => a.id !== id));
        }
    };

    return { approvals, loading, handleRequest, refresh: fetchApprovals };
}

export function useAgentData() {
    const [logs, setLogs] = useState<ActivityLog[]>([]);
    const [permissions, setPermissions] = useState<RolePermission[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Promise.all([agentService.getLogs(), agentService.getPermissions()]).then(([lData, pData]) => {
            setLogs(lData);
            setPermissions(pData);
            setLoading(false);
        });
    }, []);

    return { logs, permissions, loading };
}
