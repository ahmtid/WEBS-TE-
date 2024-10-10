import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <section className="contact-section">
      <div className="container">
        <h2>تواصل معنا</h2>
        <form>
          <input type="text" placeholder="الاسم الأول" />
          <input type="text" placeholder="الاسم الأخير" />
          <input type="email" placeholder="البريد الإلكتروني" />
          <textarea placeholder="رسالتك"></textarea>
          <button type="submit" className="btn btn-primary">أرسل</button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;