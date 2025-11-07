import React from 'react';
import './Page.css';

function Features() {
  return (
    <div className="page">
      <div className="page-container">
        <h1 className="page-title">주요기능</h1>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🎨</div>
            <h3>쉬운 디자인</h3>
            <p>드래그 앤 드롭으로 누구나 쉽게 웹사이트를 만들 수 있습니다.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📱</div>
            <h3>반응형 디자인</h3>
            <p>모바일, 태블릿, 데스크톱 모든 기기에서 완벽하게 작동합니다.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🛒</div>
            <h3>쇼핑몰 기능</h3>
            <p>상품 등록부터 결제까지 모든 것을 한 곳에서 관리하세요.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>분석 도구</h3>
            <p>방문자 통계와 매출 분석으로 비즈니스 인사이트를 얻으세요.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔒</div>
            <h3>보안</h3>
            <p>SSL 인증서와 안전한 호스팅으로 데이터를 보호합니다.</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>빠른 속도</h3>
            <p>최적화된 서버로 빠른 로딩 속도를 제공합니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;

