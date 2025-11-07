import React from 'react';
import './Page.css';

function Expert() {
  const experts = [
    {
      name: '김디자인',
      specialty: '웹 디자인',
      rating: 4.9,
      projects: 120,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: '이개발',
      specialty: '프론트엔드 개발',
      rating: 4.8,
      projects: 95,
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: '박마케팅',
      specialty: '디지털 마케팅',
      rating: 5.0,
      projects: 150,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      name: '최기획',
      specialty: '브랜드 기획',
      rating: 4.7,
      projects: 80,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    }
  ];

  return (
    <div className="page">
      <div className="page-container">
        <h1 className="page-title">전문가 찾기</h1>
        <p className="page-subtitle">검증된 전문가와 함께 프로젝트를 시작하세요</p>
        
        <div className="experts-grid">
          {experts.map((expert, index) => (
            <div key={index} className="expert-card">
              <div className="expert-image">
                <img 
                  src={expert.image} 
                  alt={expert.name}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<div style="display: flex; align-items: center; justify-content: center; height: 100%; background: #e0e0e0; color: #666; font-size: 48px;">👤</div>`;
                  }}
                />
              </div>
              <h3>{expert.name}</h3>
              <p className="expert-specialty">{expert.specialty}</p>
              <div className="expert-stats">
                <span className="rating">⭐ {expert.rating}</span>
                <span className="projects">프로젝트 {expert.projects}개</span>
              </div>
              <button className="expert-btn">문의하기</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Expert;

