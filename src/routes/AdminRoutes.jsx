import { Routes, Route } from "react-router-dom";
import DashboardView from "../pages/admin/Dashboard";
import UserManager from "../pages/admin/UserManager";

const AdminRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<DashboardView />} />
            <Route path="/dashboard" element={<DashboardView />} />
            <Route path="/user-manager" element={<UserManager />} />
        </Routes>
    );
};

export default AdminRoutes;