import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import ProtectedRoute from './components/common/ProtectedRoute';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';

// Pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import HomestayDetailsPage from './pages/HomestayDetailsPage';
import AttractionsPage from './pages/AttractionsPage';
import BookingPage from './pages/BookingPage';
import NotFoundPage from './pages/NotFoundPage';

// Dashboards
import AdminDashboard from './pages/dashboards/AdminDashboard';
import HostDashboard from './pages/dashboards/HostDashboard';
import TouristDashboard from './pages/dashboards/TouristDashboard';
import LocalGuideDashboard from './pages/dashboards/LocalGuideDashboard';

import './styles/App.css';

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="App">
          <Navbar />
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/homestay/:id" element={<HomestayDetailsPage />} />
            <Route path="/attractions" element={<AttractionsPage />} />
            <Route path="/booking/:id" element={<BookingPage />} />

            {/* Protected Routes */}
            <Route path="/admin-dashboard" element={
              <ProtectedRoute allowedRoles={['admin']}>
                <AdminDashboard />
              </ProtectedRoute>
            } />
            
            <Route path="/host-dashboard" element={
              <ProtectedRoute allowedRoles={['host']}>
                <HostDashboard />
              </ProtectedRoute>
            } />
            
            <Route path="/tourist-dashboard" element={
              <ProtectedRoute allowedRoles={['tourist']}>
                <TouristDashboard />
              </ProtectedRoute>
            } />
            
            <Route path="/guide-dashboard" element={
              <ProtectedRoute allowedRoles={['guide']}>
                <LocalGuideDashboard />
              </ProtectedRoute>
            } />

            {/* 404 Route */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;