import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaUsers, 
  FaHome, 
  FaBookmark, 
  FaCheckCircle,
  FaTimesCircle,
  FaEdit,
  FaTrash,
  FaPlus
} from 'react-icons/fa';
import { useAuth } from '../../contexts/AuthContext';
import { homestays, users } from '../../data/dummyData';

const AdminDashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { icon: FaUsers, label: 'Total Users', value: '1,234', color: '#0EA5E9' },
    { icon: FaHome, label: 'Total Homestays', value: '156', color: '#14B8A6' },
    { icon: FaBookmark, label: 'Total Bookings', value: '892', color: '#F97316' },
    { icon: FaCheckCircle, label: 'Pending Approvals', value: '12', color: '#8B5CF6' }
  ];

  const pendingListings = homestays.slice(0, 3).map(h => ({
    ...h,
    status: 'pending'
  }));

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div className="dashboard-sidebar">
        <div style={{ padding: '2rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>
            Admin Panel
          </h2>
          
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <button
              onClick={() => setActiveTab('overview')}
              style={{
                padding: '0.75rem 1rem',
                background: activeTab === 'overview' ? '#0EA5E9' : 'transparent',
                color: activeTab === 'overview' ? 'white' : '#6B7280',
                border: 'none',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.3s ease'
              }}
            >
              Overview
            </button>
            <button
              onClick={() => setActiveTab('users')}
              style={{
                padding: '0.75rem 1rem',
                background: activeTab === 'users' ? '#0EA5E9' : 'transparent',
                color: activeTab === 'users' ? 'white' : '#6B7280',
                border: 'none',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              Users
            </button>
            <button
              onClick={() => setActiveTab('homestays')}
              style={{
                padding: '0.75rem 1rem',
                background: activeTab === 'homestays' ? '#0EA5E9' : 'transparent',
                color: activeTab === 'homestays' ? 'white' : '#6B7280',
                border: 'none',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              Homestays
            </button>
            <button
              onClick={() => setActiveTab('bookings')}
              style={{
                padding: '0.75rem 1rem',
                background: activeTab === 'bookings' ? '#0EA5E9' : 'transparent',
                color: activeTab === 'bookings' ? 'white' : '#6B7280',
                border: 'none',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                textAlign: 'left'
              }}
            >
              Bookings
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="dashboard-main">
        <div style={{ marginBottom: '2rem' }}>
          <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>
            Welcome back, {user?.name}!
          </h1>
          <p style={{ color: '#6B7280' }}>Here's what's happening with your platform today.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-4" style={{ marginBottom: '2rem' }}>
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="stats-card"
            >
              <div className="stats-icon primary">
                <stat.icon />
              </div>
              <div className="stats-content">
                <div className="stats-label">{stat.label}</div>
                <div className="stats-value">{stat.value}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pending Approvals */}
        <div className="card" style={{ padding: '1.5rem', marginBottom: '2rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Pending Approvals
          </h2>
          
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #E5E7EB' }}>
                  <th style={{ padding: '0.75rem', textAlign: 'left' }}>Homestay</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left' }}>Host</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left' }}>Location</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left' }}>Price</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {pendingListings.map((listing) => (
                  <tr key={listing.id} style={{ borderBottom: '1px solid #E5E7EB' }}>
                    <td style={{ padding: '0.75rem' }}>{listing.title}</td>
                    <td style={{ padding: '0.75rem' }}>{listing.host}</td>
                    <td style={{ padding: '0.75rem' }}>{listing.location}</td>
                    <td style={{ padding: '0.75rem' }}>${listing.price}</td>
                    <td style={{ padding: '0.75rem' }}>
                      <button style={{
                        background: '#10B981',
                        color: 'white',
                        border: 'none',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '0.25rem',
                        marginRight: '0.5rem',
                        cursor: 'pointer'
                      }}>
                        Approve
                      </button>
                      <button style={{
                        background: '#EF4444',
                        color: 'white',
                        border: 'none',
                        padding: '0.25rem 0.75rem',
                        borderRadius: '0.25rem',
                        cursor: 'pointer'
                      }}>
                        Reject
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Users */}
        <div className="card" style={{ padding: '1.5rem' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
            Recent Users
          </h2>
          
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid #E5E7EB' }}>
                  <th style={{ padding: '0.75rem', textAlign: 'left' }}>Name</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left' }}>Email</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left' }}>Role</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left' }}>Status</th>
                  <th style={{ padding: '0.75rem', textAlign: 'left' }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.slice(0, 3).map((user) => (
                  <tr key={user.id} style={{ borderBottom: '1px solid #E5E7EB' }}>
                    <td style={{ padding: '0.75rem' }}>{user.name}</td>
                    <td style={{ padding: '0.75rem' }}>{user.email}</td>
                    <td style={{ padding: '0.75rem' }}>{user.role}</td>
                    <td style={{ padding: '0.75rem' }}>
                      <span style={{
                        background: '#D1FAE5',
                        color: '#065F46',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '9999px',
                        fontSize: '0.875rem'
                      }}>
                        Active
                      </span>
                    </td>
                    <td style={{ padding: '0.75rem' }}>
                      <button style={{
                        background: 'none',
                        border: 'none',
                        color: '#0EA5E9',
                        cursor: 'pointer',
                        marginRight: '0.5rem'
                      }}>
                        <FaEdit />
                      </button>
                      <button style={{
                        background: 'none',
                        border: 'none',
                        color: '#EF4444',
                        cursor: 'pointer'
                      }}>
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;