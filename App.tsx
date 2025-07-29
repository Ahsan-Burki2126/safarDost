
import React from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './pages/Layout';
import HomePage from './pages/HomePage';
import GuidesPage from './pages/GuidesPage';
import GuideProfilePage from './pages/GuideProfilePage';
import DestinationPage from './pages/DestinationPage';
import DashboardLayout from './pages/DashboardLayout';
import GuideDashboardPage from './pages/GuideDashboardPage';
import AdminDashboardPage from './pages/AdminDashboardPage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import RegisterGuidePage from './pages/RegisterGuidePage';
import EditGuideProfilePage from './pages/EditGuideProfilePage';
import AdminManageUsersPage from './pages/AdminManageUsersPage';
import AdminEditGuidePage from './pages/AdminEditGuidePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="guides" element={<GuidesPage />} />
          <Route path="guide/:id" element={<GuideProfilePage />} />
          <Route path="destination/:name" element={<DestinationPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="register-guide" element={<RegisterGuidePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Navigate to="/dashboard/guide" replace />} />
          <Route path="guide" element={<GuideDashboardPage />} />
          <Route path="guide/edit" element={<EditGuideProfilePage />} />
          <Route path="admin" element={<AdminDashboardPage />} />
          <Route path="admin/users" element={<AdminManageUsersPage />} />
          <Route path="admin/guide/edit/:id" element={<AdminEditGuidePage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;