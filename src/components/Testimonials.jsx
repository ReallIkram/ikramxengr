import React from 'react';
import { Quote, Star } from 'lucide-react';
import './testimonials.css';
const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      text: "Professional and reliable developer. Delivered the smart contract audit ahead of schedule with perfect documentation.",
      author: "Alex Rivera",
      role: "Founder, Web3 Startup",
      stars: 5
    },
    {
      id: 2,
      text: "The UI/UX work on our dashboard was exceptional. Transformed a complex set of data into a beautiful, intuitive interface.",
      author: "Sarah Chen",
      role: "Lead Engineer",
      stars: 5
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <div className="section-header text-center mb-5">
          <p className="hero-eyebrow" style={{fontSize:"40px"}}>Social Proof</p>
          <h2 className="section-title">Client <span>Feedback</span></h2>
        </div>

        <div className="row g-4 justify-content-center">
          {reviews.map((rev) => (
            <div className="col-lg-5" key={rev.id}>
              <div className="testimonial-card transition-300">
                <div className="quote-icon">
                  <Quote size={40} fill="var(--accent)" fillOpacity={0.1} />
                </div>
                
                <div className="star-rating mb-3">
                  {[...Array(rev.stars)].map((_, i) => (
                    <Star key={i} size={14} className="star-filled" />
                  ))}
                </div>

                <p className="testimonial-text">"{rev.text}"</p>
                
                <div className="testimonial-author mt-4">
                  <div className="author-info">
                    <h5 className="author-name">{rev.author}</h5>
                    <span className="author-role">{rev.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;