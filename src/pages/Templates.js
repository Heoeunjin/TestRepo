import React from 'react';
import './Page.css';

function Templates() {
  const templateCategories = [
    { name: '쇼핑몰', count: 24 },
    { name: '비즈니스 홍보', count: 18 },
    { name: '블로그·미디어', count: 15 },
    { name: '이벤트·프로젝트', count: 12 },
    { name: '포트폴리오', count: 20 },
    { name: '커뮤니티', count: 10 },
    { name: '예약·기타', count: 8 }
  ];

  return (
    <div className="page">
      <div className="page-container">
        <h1 className="page-title">템플릿</h1>
        <p className="page-subtitle">다양한 카테고리의 템플릿을 선택하세요</p>
        
        <div className="template-categories">
          {templateCategories.map((category) => (
            <div key={category.name} className="template-category-card">
              <h3>{category.name}</h3>
              <p>{category.count}개의 템플릿</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Templates;

