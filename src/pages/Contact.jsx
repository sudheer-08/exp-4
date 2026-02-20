import { useState } from 'react';
import { useAppContext } from '../context/AppContext';
import './Contact.css';

export default function Contact() {
  const { state } = useAppContext();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className={`contact-page ${state.theme}`}>
      <div className="contact-header">
        <h1>📞 Get in Touch</h1>
        <p>Questions about the experiment? Reach out to us!</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Information</h2>

          <div className="info-item">
            <h3>👨‍🏫 Instructor</h3>
            <p><strong>Name:</strong> Mr. Prince Pal Singh</p>
            <p><strong>ID:</strong> E18505</p>
            <p><strong>Position:</strong> Assistant Professor</p>
            <p><strong>Department:</strong> AIT-CSE CORE & AIML</p>
          </div>

          <div className="info-item">
            <h3>🏫 Institution</h3>
            <p><strong>University:</strong> University Institute of Engineering</p>
            <p><strong>Department:</strong> Department of AIT-CSE CORE & AIML</p>
            <p><strong>Program:</strong> Full Stack - II (23CSH-382)</p>
            <p><strong>Semester:</strong> 4th</p>
          </div>

          <div className="info-item">
            <h3>📚 Experiment Details</h3>
            <p><strong>Title:</strong> Implement State Management in SPA</p>
            <p><strong>Duration:</strong> 4-5 hours</p>
            <p><strong>Tools:</strong> Context API, Redux Toolkit</p>
            <p><strong>Learning Outcome:</strong> CO1 - BT3</p>
          </div>

          <div className="info-item">
            <h3>📋 About This Page</h3>
            <p>This contact page demonstrates state management through a form component. The form data is managed using React hooks (useState), showing how to handle local component state effectively.</p>
          </div>
        </div>

        <div className="contact-form-section">
          {submitted && (
            <div className="success-message">
              ✅ Thank you! Your message has been received.
            </div>
          )}

          <form onSubmit={handleSubmit} className="contact-form">
            <h2>Send a Message</h2>

            <div className="form-group">
              <label htmlFor="name">Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Message subject"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                rows="6"
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-btn">
              Send Message →
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
