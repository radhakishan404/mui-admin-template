import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "../pages/public/LoginPage.jsx";
import RegisterPage from "../pages/public/RegisterPage.jsx";
import Error from "../pages/public/ErrorPage.jsx";

const PublicRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/noroles' element={<Error />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='*' element={<Navigate replace to='/' />} />
        </Routes>
    );
};

export default PublicRoutes;
