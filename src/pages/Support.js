import React, { useState } from 'react';
import './Page.css';

function Support() {
  const [selectedCategory, setSelectedCategory] = useState('일반');

  const faqs = [
    {
      category: '일반',
      question: '무료 플랜에서도 모든 기능을 사용할 수 있나요?',
      answer: '무료 플랜에서는 기본 템플릿과 기본 기능을 사용할 수 있습니다. 더 많은 기능이 필요하시면 프로 플랜으로 업그레이드하실 수 있습니다.'
    },
    {
      category: '일반',
      question: '도메인을 연결하려면 어떻게 해야 하나요?',
      answer: '설정 > 도메인 메뉴에서 도메인을 추가하실 수 있습니다. DNS 설정에 대한 자세한 안내는 고객지원팀에 문의해주세요.'
    },
    {
      category: '결제',
      question: '결제는 어떻게 진행되나요?',
      answer: '신용카드, 계좌이체, 간편결제 등 다양한 결제 수단을 지원합니다. 결제는 매월 자동으로 진행됩니다.'
    },
    {
      category: '결제',
      question: '플랜을 변경할 수 있나요?',
      answer: '언제든지 플랜을 변경하실 수 있습니다. 업그레이드 시 즉시 적용되며, 다운그레이드 시 다음 결제일부터 적용됩니다.'
    },
    {
      category: '기술',
      question: '모바일에서도 편집할 수 있나요?',
      answer: '네, 모바일 브라우저에서도 기본적인 편집이 가능합니다. 다만 더 많은 기능은 데스크톱에서 이용하실 수 있습니다.'
    }
  ];

  const filteredFaqs = faqs.filter(faq => faq.category === selectedCategory);
  const categories = ['일반', '결제', '기술'];

  return (
    <div className="page">
      <div className="page-container">
        <h1 className="page-title">고객지원</h1>
        
        <div className="support-content">
          <div className="contact-section">
            <h2>문의하기</h2>
            <form className="contact-form">
              <input type="text" placeholder="이름" className="form-input" />
              <input type="email" placeholder="이메일" className="form-input" />
              <select className="form-input">
                <option>문의 유형 선택</option>
                <option>기술 지원</option>
                <option>결제 문의</option>
                <option>기능 제안</option>
                <option>기타</option>
              </select>
              <textarea placeholder="문의 내용" className="form-textarea" rows="5"></textarea>
              <button type="submit" className="form-submit">문의하기</button>
            </form>
          </div>

          <div className="faq-section">
            <h2>자주 묻는 질문</h2>
            <div className="faq-categories">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`faq-category-btn ${selectedCategory === category ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="faq-list">
              {filteredFaqs.map((faq, index) => (
                <div key={index} className="faq-item">
                  <h4>{faq.question}</h4>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;

