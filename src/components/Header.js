import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-text">imweb</span>
        </Link>
        <nav className="nav">
          <Link to="/features" className="nav-link">주요기능</Link>
          <Link to="/templates" className="nav-link">템플릿</Link>
          <Link to="/pricing" className="nav-link">요금</Link>
          <Link to="/expert" className="nav-link">전문가 찾기</Link>
          <Link to="/story" className="nav-link">스토리</Link>
          <Link to="/support" className="nav-link">고객지원</Link>
        </nav>
        <div className="header-actions">
          <button className="btn-login">로그인</button>
          <button className="btn-primary">무료로 시작하기</button>
        </div>
      </div>
    </header>
  );
}

export default Header;

