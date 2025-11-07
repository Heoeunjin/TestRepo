import React from 'react';
import './Page.css';

function Pricing() {
  const plans = [
    {
      name: '베이직',
      price: '무료',
      period: '',
      features: [
        '기본 템플릿 사용',
        '1개 도메인 연결',
        '5GB 저장공간',
        '기본 고객지원'
      ],
      popular: false
    },
    {
      name: '프로',
      price: '29,000',
      period: '원/월',
      features: [
        '모든 템플릿 사용',
        '무제한 도메인 연결',
        '50GB 저장공간',
        '우선 고객지원',
        '고급 분석 도구',
        '이메일 마케팅'
      ],
      popular: true
    },
    {
      name: '비즈니스',
      price: '79,000',
      period: '원/월',
      features: [
        '프로 플랜 모든 기능',
        '무제한 저장공간',
        '전담 매니저 지원',
        '맞춤형 디자인',
        'API 접근',
        '우선 기술지원'
      ],
      popular: false
    }
  ];

  return (
    <div className="page">
      <div className="page-container">
        <h1 className="page-title">요금</h1>
        <p className="page-subtitle">비즈니스에 맞는 플랜을 선택하세요</p>
        
        <div className="pricing-grid">
          {plans.map((plan) => (
            <div key={plan.name} className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
              {plan.popular && <div className="popular-badge">인기</div>}
              <h3>{plan.name}</h3>
              <div className="price">
                <span className="price-amount">{plan.price}</span>
                {plan.period && <span className="price-period">{plan.period}</span>}
              </div>
              <ul className="features-list">
                {plan.features.map((feature, index) => (
                  <li key={index}>✓ {feature}</li>
                ))}
              </ul>
              <button className={`pricing-btn ${plan.popular ? 'primary' : ''}`}>
                시작하기
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Pricing;

