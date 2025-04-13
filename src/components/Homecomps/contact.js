import React, { useState } from 'react';
import './contact.css';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    
    const [status, setStatus] = useState({
        submitting: false,
        submitted: false,
        info: { error: false, msg: null }
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus({ submitting: true, submitted: false, info: { error: false, msg: null } });
        
        // Replace with your actual Formspree endpoint
        fetch("https://formspree.io/f/xdkebbko", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        })
        .then(response => {
            if (response.ok) {
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: '',
                    message: ''
                });
                setStatus({
                    submitting: false,
                    submitted: true,
                    info: { error: false, msg: 'Message sent successfully!' }
                });
                
                // Reset status after 5 seconds
                setTimeout(() => {
                    setStatus({
                        submitting: false,
                        submitted: false,
                        info: { error: false, msg: null }
                    });
                }, 5000);
            } else {
                throw new Error('Form submission failed');
            }
        })
        .catch((error) => {
            console.error('Submit error:', error);
            setStatus({
                submitting: false,
                submitted: false,
                info: { error: true, msg: 'Failed to send message. Please Contact +977-9843797777.' }
            });
        });
    };

    return (
        <div className="contact-container">
            <div className="contact-header">
                <span className="contact-subtitle">CONTACT</span>
                <h2 className="contact-title">"Let's connect! We look forward to hearing from you." </h2>
            </div>

            <div className="info-cards">
                <div className="info-card">
                    <div className="contact-icon">📍</div>
                    <h3>Address</h3>
                    <p>Talchhikhel-15,Mahalaxmisthan,Lalitpur</p>
                </div>

                <div className="info-card">
                    <div className="contact-icon">📞</div>
                    <h3>Call Us</h3>
                    <p>+977-015400123 , 9767472047</p>
                </div>

                <div className="info-card">
                    <div className="contact-icon">✉️</div>
                    <h3>Email Us</h3>
                    <p>lexisabroadstudy@gmail.com</p>
                </div>

                <div className="info-card">
                    <div className="contact-icon">⏰</div>
                    <h3>Open Hours</h3>
                    <p>Monday-Sunday</p>
                    <p>07 AM - 05 PM</p>
                </div>
            </div>
            <div className="contact-form">
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <input 
                            type="text" 
                            name="name"
                            placeholder="Your Name" 
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input 
                            type="email" 
                            name="email"
                            placeholder="Your Email" 
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-row">
                        <input 
                            type="tel" 
                            name="phone"
                            placeholder="Phone" 
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                        <input 
                            type="text" 
                            name="subject"
                            placeholder="Subject" 
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <textarea 
                        name="message"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <button 
                        className='buttoncontact' 
                        type="submit"
                        disabled={status.submitting}
                    >
                        {status.submitting ? 'Sending...' : 'Send Message'}
                    </button>
                    
                    {status.info.msg && (
                        <div className={`form-message ${status.info.error ? 'error' : 'success'}`} style={{
                            color: status.info.error ? '#e74c3c' : '#2ecc71',
                            marginTop: '15px',
                            textAlign: 'center',
                            fontWeight: 'bold'
                        }}>
                            {status.info.msg}
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
};

export default ContactSection;