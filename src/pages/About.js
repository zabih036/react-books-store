import React from 'react';
import { BookOpen, Users, Award, Heart, Mail, Phone, MapPin } from 'lucide-react';

const About = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="about-hero">
          <h1>About BookStore</h1>
          <p className="about-subtitle">
            Your trusted partner in discovering and purchasing amazing books since 2020
          </p>
        </div>
        
        <div className="about-content">
          <section className="about-story">
            <h2>Our Story</h2>
            <p>
              BookStore was founded with a simple mission: to make great books accessible to everyone. 
              What started as a small local bookstore has grown into a comprehensive online platform 
              that serves book lovers worldwide.
            </p>
            <p>
              We believe that books have the power to transform lives, expand minds, and bring people together. 
              That's why we're committed to curating a diverse collection of books that cater to every taste, 
              interest, and reading level.
            </p>
          </section>
          
          <section className="about-values">
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <BookOpen size={48} className="value-icon" />
                <h3>Quality</h3>
                <p>We carefully select every book in our collection to ensure the highest quality and value for our customers.</p>
              </div>
              
              <div className="value-card">
                <Users size={48} className="value-icon" />
                <h3>Community</h3>
                <p>We foster a community of readers by providing recommendations, reviews, and a platform for book discussions.</p>
              </div>
              
              <div className="value-card">
                <Award size={48} className="value-icon" />
                <h3>Excellence</h3>
                <p>We strive for excellence in everything we do, from customer service to book curation and delivery.</p>
              </div>
              
              <div className="value-card">
                <Heart size={48} className="value-icon" />
                <h3>Passion</h3>
                <p>Our passion for books drives everything we do. We're not just selling books; we're sharing our love for reading.</p>
              </div>
            </div>
          </section>
          
          <section className="about-stats">
            <h2>By the Numbers</h2>
            <div className="stats-grid">
              <div className="stat-item">
                <div className="stat-number">10,000+</div>
                <div className="stat-label">Books Available</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">50,000+</div>
                <div className="stat-label">Happy Customers</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">100+</div>
                <div className="stat-label">Categories</div>
              </div>
              <div className="stat-item">
                <div className="stat-number">99%</div>
                <div className="stat-label">Customer Satisfaction</div>
              </div>
            </div>
          </section>
          
          <section className="about-team">
            <h2>Meet Our Team</h2>
            <p>
              Our team consists of passionate book lovers, experienced librarians, and dedicated customer service 
              professionals who are here to help you find your next favorite book.
            </p>
            <div className="team-grid">
              <div className="team-member">
                <div className="member-avatar">
                  <Users size={32} />
                </div>
                <h4>Sarah Johnson</h4>
                <p>Head of Curation</p>
                <p>Sarah has been in the book industry for over 15 years and has a passion for discovering hidden gems.</p>
              </div>
              
              <div className="team-member">
                <div className="member-avatar">
                  <Users size={32} />
                </div>
                <h4>Michael Chen</h4>
                <p>Customer Experience Manager</p>
                <p>Michael ensures that every customer has an exceptional experience from browsing to delivery.</p>
              </div>
              
              <div className="team-member">
                <div className="member-avatar">
                  <Users size={32} />
                </div>
                <h4>Emily Rodriguez</h4>
                <p>Community Manager</p>
                <p>Emily builds and nurtures our community of readers through events, discussions, and recommendations.</p>
              </div>
            </div>
          </section>
          
          <section className="about-contact">
            <h2>Get in Touch</h2>
            <p>
              Have questions, suggestions, or just want to share your latest book recommendation? 
              We'd love to hear from you!
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <Mail size={20} />
                <span>info@bookstore.com</span>
              </div>
              <div className="contact-item">
                <Phone size={20} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="contact-item">
                <MapPin size={20} />
                <span>123 Book Street, Literary City, LC 12345</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
