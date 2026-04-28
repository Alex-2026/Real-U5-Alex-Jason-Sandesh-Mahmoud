import React from 'react';

export default function CommunityHealthNeeds() {
  const containerStyle = {
    padding: '80px 20px',
    minHeight: '100vh',
    backgroundColor: '#ffffff',
    color: '#1a1a1a',
    fontFamily: 'sans-serif',
    lineHeight: '1.6'
  };

  const cardStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    border: '1px solid #ddd',
    padding: '40px',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={{ color: '#1d4ed8', fontSize: '2.5rem', marginBottom: '20px' }}>
          Community Health Needs & Equity
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#444', marginBottom: '30px' }}>
          Research Analysis: Health Inequalities and Government Policies
        </p>

        <section style={{ marginBottom: '30px' }}>
          <h2 style={{ color: '#333', borderBottom: '2px solid #1d4ed8', display: 'inline-block' }}>
            Key Disparities
          </h2>
          <p>
            Based on the analysis of the <a href="https://docs.google.com/document/d/1evX0Z1NuVTJOmMS4r-Ou9PjKcgSe24McVEZkUsDUYqA/edit?tab=t.0" target="_blank" rel="noreferrer">Research Paper Draft</a>, 
            life expectancy varies by up to 20 years based on regional spending. 
            The U.S. healthcare system faces extreme polarization and a lack of uniformity in financing.
          </p>
        </section>

        <section style={{ backgroundColor: '#f0f7ff', padding: '20px', borderRadius: '8px' }}>
          <h2 style={{ color: '#1e40af', marginTop: '0' }}>Strategic Action</h2>
          <ul>
            <li>Adopt a nonpartisan nonprofit model for community aid.</li>
            <li>Address the $8,400 per capita spending gap.</li>
            <li>Focus on Social Determinants of Health (SDOH).</li>
          </ul>
        </section>
      </div>
    </div>
  );
}