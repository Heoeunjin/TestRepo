import React from 'react';
import './Page.css';

function Story() {
  const stories = [
    {
      title: '스타트업의 성공 스토리',
      description: '아임웹으로 3개월 만에 매출 1억 달성',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=250&fit=crop',
      date: '2024.01.15'
    },
    {
      title: '브랜드 아이덴티티 구축',
      description: '템플릿으로 완성한 독특한 브랜드 스토리',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=250&fit=crop',
      date: '2024.02.20'
    },
    {
      title: '온라인 쇼핑몰 오픈',
      description: '디자인 경험 없이도 멋진 쇼핑몰 만들기',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop',
      date: '2024.03.10'
    }
  ];

  return (
    <div className="page">
      <div className="page-container">
        <h1 className="page-title">스토리</h1>
        <p className="page-subtitle">고객들의 성공 스토리를 만나보세요</p>
        
        <div className="stories-grid">
          {stories.map((story, index) => (
            <div key={index} className="story-card">
              <div className="story-image">
                <img 
                  src={story.image} 
                  alt={story.title}
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.style.backgroundColor = '#e0e0e0';
                    e.target.parentElement.innerHTML = `<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: #666; font-size: 48px;">📖</div>`;
                  }}
                />
              </div>
              <div className="story-content">
                <span className="story-date">{story.date}</span>
                <h3>{story.title}</h3>
                <p>{story.description}</p>
                <a href="#" className="story-link">자세히 보기 →</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Story;

