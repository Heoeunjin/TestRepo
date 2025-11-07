import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Home.css';

const categories = [
  { name: '쇼핑몰', slug: 'shopping' },
  { name: '비즈니스 홍보', slug: 'business' },
  { name: '블로그·미디어', slug: 'blog' },
  { name: '이벤트·프로젝트', slug: 'event' },
  { name: '포트폴리오', slug: 'portfolio' },
  { name: '커뮤니티', slug: 'community' },
  { name: '예약·기타', slug: 'reservation' }
];

const templates = [
  {
    id: 1,
    category: '쇼핑몰',
    title: 'Fresh Grove',
    description: 'FRESH GROVE IS A FLAVOR-PACKED ORGANIC BEVERAGE',
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&h=300&fit=crop',
    color: '#8B7355'
  },
  {
    id: 2,
    category: '쇼핑몰',
    title: 'Wise Phirels',
    description: '새롭게 태어난 당신이 원하는 사운드',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=300&fit=crop',
    color: '#000000'
  },
  {
    id: 3,
    category: '쇼핑몰',
    title: 'NOBASE CLASS',
    description: 'IT전문가를 위한 첫걸음 지금, 노베이스 클래스에서',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
    color: '#6B46C1'
  },
  {
    id: 4,
    category: '쇼핑몰',
    title: 'PICK',
    description: 'I need to possess what I desire',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&fit=crop',
    color: '#F5F5F5'
  },
  {
    id: 5,
    category: '비즈니스 홍보',
    title: 'Business Pro',
    description: '프로페셔널한 비즈니스 웹사이트',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop',
    color: '#2563EB'
  },
  {
    id: 6,
    category: '블로그·미디어',
    title: 'Media Hub',
    description: '콘텐츠를 위한 미디어 플랫폼',
    image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop',
    color: '#DC2626'
  },
  {
    id: 7,
    category: '이벤트·프로젝트',
    title: 'Event Master',
    description: '이벤트와 프로젝트를 위한 템플릿',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=300&fit=crop',
    color: '#7C3AED'
  },
  {
    id: 8,
    category: '포트폴리오',
    title: 'Creative Portfolio',
    description: '창의적인 포트폴리오 디자인',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop',
    color: '#059669'
  },
  {
    id: 9,
    category: '커뮤니티',
    title: 'Community Hub',
    description: '커뮤니티를 위한 공간',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop',
    color: '#EA580C'
  },
  {
    id: 10,
    category: '예약·기타',
    title: 'Booking System',
    description: '예약 시스템을 위한 템플릿',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=300&fit=crop',
    color: '#0891B2'
  }
];

function Home() {
  const navigate = useNavigate();
  const { category } = useParams();
  
  // URL 파라미터에서 카테고리 찾기, 없으면 기본값 'shopping'
  const categorySlug = category || 'shopping';
  const categoryObj = categories.find(cat => cat.slug === categorySlug) || categories[0];
  const activeCategory = categoryObj.name;

  const filteredTemplates = templates.filter(t => t.category === activeCategory);

  const handleCategoryClick = (slug) => {
    if (slug === 'shopping') {
      navigate('/');
    } else {
      navigate(`/category/${slug}`);
    }
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-container">
          <h1 className="hero-title">
            <span className="hero-title-green">브랜드를 쉽고 아름답게</span>
            <span className="hero-title-large">템플릿으로 만들어 보세요</span>
          </h1>
          <p className="hero-subtitle">
            디자인 경험 없이도 누구나 활용 가능한 템플릿을 준비했어요
          </p>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="category-nav">
        <div className="category-container">
          {categories.map((cat) => (
            <button
              key={cat.slug}
              className={`category-btn ${activeCategory === cat.name ? 'active' : ''}`}
              onClick={() => handleCategoryClick(cat.slug)}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </section>

      {/* Template Grid */}
      <section className="templates">
        <div className="templates-container">
          <h2 className="templates-title">{activeCategory}</h2>
          {filteredTemplates.length > 0 ? (
            <div className="templates-grid">
              {filteredTemplates.map((template) => (
                <div key={template.id} className="template-card">
                  <div className="template-image">
                    <img 
                      src={template.image} 
                      alt={template.title}
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.style.backgroundColor = template.color;
                        e.target.parentElement.innerHTML = `<div style="display: flex; align-items: center; justify-content: center; height: 100%; color: ${template.color === '#000000' || template.color === '#6B46C1' ? 'white' : 'black'}; font-size: 24px; font-weight: bold;">${template.title}</div>`;
                      }}
                    />
                  </div>
                  <div className="template-info">
                    <h3 className="template-title">{template.title}</h3>
                    <p className="template-description">{template.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-templates">
              <p>이 카테고리의 템플릿이 아직 준비되지 않았습니다.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Home;
