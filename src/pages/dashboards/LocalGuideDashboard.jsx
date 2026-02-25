import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaMapMarkedAlt, 
  FaPlus, 
  FaEdit, 
  FaTrash, 
  FaLightbulb,
  FaImage
} from 'react-icons/fa';
import { useAuth } from '../../contexts/AuthContext';
import { attractions } from '../../data/dummyData';

const LocalGuideDashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('attractions');
  const [showAddForm, setShowAddForm] = useState(false);

  const myAttractions = attractions.slice(0, 3);
  const travelTips = [
    { id: 1, title: 'Best Time to Visit Goa', content: 'October to March is ideal...', likes: 45 },
    { id: 2, title: 'Hidden Gems in Manali', content: 'Apart from the popular spots...', likes: 32 },
    { id: 3, title: 'Local Food Guide', content: 'Must-try dishes in each region...', likes: 78 }
  ];

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div className="dashboard-sidebar">
        <div style={{ padding: '2rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <img
              src="https://randomuser.me/api/portraits/men/3.jpg"
              alt="Profile"
              style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                marginBottom: '1rem'
              }}
            />
            <h3 style={{ fontWeight: 'bold' }}>{user?.name}</h3>
            <p style={{ color: '#6B7280', fontSize: '0.875rem' }}>Local Guide</p>
          </div>
          
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <button
              onClick={() => setActiveTab('attractions')}
              style={{
                padding: '0.75rem 1rem',
                background: activeTab === 'attractions' ? '#0EA5E9' : 'transparent',
                color: activeTab === 'attractions' ? 'white' : '#6B7280',
                border: 'none',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <FaMapMarkedAlt />
              My Attractions
            </button>
            <button
              onClick={() => setActiveTab('tips')}
              style={{
                padding: '0.75rem 1rem',
                background: activeTab === 'tips' ? '#0EA5E9' : 'transparent',
                color: activeTab === 'tips' ? 'white' : '#6B7280',
                border: 'none',
                borderRadius: '0.5rem',
                cursor: 'pointer',
                textAlign: 'left',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              <FaLightbulb />
              Travel Tips
            </button>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="dashboard-main">
        {activeTab === 'attractions' && (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
              <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>My Attractions</h1>
              <button 
                className="btn btn-primary"
                onClick={() => setShowAddForm(!showAddForm)}
                style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <FaPlus />
                Add New Attraction
              </button>
            </div>

            {showAddForm && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="card"
                style={{ padding: '2rem', marginBottom: '2rem' }}
              >
                <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '1rem' }}>
                  Add New Attraction
                </h2>
                <form>
                  <div className="grid grid-2" style={{ gap: '1rem' }}>
                    <div className="form-group">
                      <label className="form-label">Attraction Name</label>
                      <input type="text" className="form-input" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Location</label>
                      <input type="text" className="form-input" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Entry Fee ($)</label>
                      <input type="number" className="form-input" />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Best Time to Visit</label>
                      <input type="text" className="form-input" placeholder="e.g., October to March" />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Description</label>
                    <textarea className="form-input" rows="4"></textarea>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Travel Tips</label>
                    <textarea className="form-input" rows="3" placeholder="Enter tips separated by commas"></textarea>
                  </div>
                  <div className="form-group">
                    <label className="form-label">Images</label>
                    <input type="file" multiple className="form-input" />
                  </div>
                  <button type="submit" className="btn btn-primary">
                    Save Attraction
                  </button>
                </form>
              </motion.div>
            )}

            <div className="grid grid-2" style={{ gap: '1.5rem' }}>
              {myAttractions.map((attraction) => (
                <div key={attraction.id} className="card">
                  <img
                    src={attraction.image}
                    alt={attraction.name}
                    style={{
                      width: '100%',
                      height: '200px',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{ padding: '1.5rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                      <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{attraction.name}</h3>
                      <div>
                        <button style={{ background: 'none', border: 'none', color: '#0EA5E9', cursor: 'pointer', marginRight: '0.5rem' }}>
                          <FaEdit />
                        </button>
                        <button style={{ background: 'none', border: 'none', color: '#EF4444', cursor: 'pointer' }}>
                          <FaTrash />
                        </button>
                      </div>
                    </div>
                    <p style={{ color: '#6B7280', marginBottom: '0.5rem' }}>{attraction.location}</p>
                    <p style={{ marginBottom: '1rem' }}>{attraction.description}</p>
                    <div style={{ display: 'flex', gap: '2rem', marginBottom: '1rem' }}>
                      <div>
                        <span style={{ color: '#6B7280', fontSize: '0.875rem' }}>Entry Fee</span>
                        <p style={{ fontWeight: 'bold' }}>${attraction.entryFee}</p>
                      </div>
                      <div>
                        <span style={{ color: '#6B7280', fontSize: '0.875rem' }}>Best Time</span>
                        <p style={{ fontWeight: 'bold' }}>{attraction.bestTime}</p>
                      </div>
                    </div>
                    <div>
                      <span style={{ color: '#6B7280', fontSize: '0.875rem' }}>Travel Tips</span>
                      <ul style={{ marginTop: '0.5rem', listStyle: 'none', padding: 0 }}>
                        {attraction.tips.map((tip, index) => (
                          <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                            <span style={{ color: '#0EA5E9' }}>•</span>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === 'tips' && (
          <>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
              <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>Travel Tips</h1>
              <button className="btn btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FaPlus />
                Add New Tip
              </button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {travelTips.map((tip) => (
                <div key={tip.id} className="card" style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>{tip.title}</h3>
                    <div>
                      <button style={{ background: 'none', border: 'none', color: '#0EA5E9', cursor: 'pointer', marginRight: '0.5rem' }}>
                        <FaEdit />
                      </button>
                      <button style={{ background: 'none', border: 'none', color: '#EF4444', cursor: 'pointer' }}>
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                  <p style={{ color: '#6B7280', marginBottom: '1rem' }}>{tip.content}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <span style={{ color: '#0EA5E9' }}>❤️</span>
                    <span>{tip.likes} likes</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LocalGuideDashboard;