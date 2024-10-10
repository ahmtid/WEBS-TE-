import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>مرحباً بك في موقعنا</h1>
        <p>نوفر لك أفضل الحلول التقنية لإدارة وتحويل أموالك بأمان وسهولة</p>
        <div className="cta-buttons">
          <button className="btn btn-primary">ابدأ الآن</button>
          <button className="btn btn-secondary">تواصل معنا</button>
        </div>
      </div>
    </header>
  );
};

export default Header;