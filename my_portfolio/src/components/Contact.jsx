import React from 'react';
import { FiPhone, FiMail, FiLinkedin } from 'react-icons/fi'; // Importing icons
import { FaLinkedinIn } from "react-icons/fa6";
import './styles/Contact.css';

function Contact() {
    return (
        <section id="contact">
            <h2>Contact Me</h2>
            <div className="contact-details">
                <p>
                    <FiPhone className="contact-icon" /> {/* Phone Icon */}

                    <a href="tel:+91 9016697267" className="contact-link"> +91 9016697267</a>
                </p>
                <p>
                    <FiMail className="contact-icon" /> {/* Email Icon */}

                    <a href="prekshajainsurat@gmail.com" className="contact-link"> prekshajainsurat@gmail,com</a>
                </p>
                <p>
                    {/* LinkedIn Icon */}
                    <FaLinkedinIn className="contact-icon linkedin-icon" />
                    <a
                        href="https://www.linkedin.com/in/preksha-jain16"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-link"
                    >
                        https://www.linkedin.com/in/preksha-jain
                    </a>
                </p>
            </div>
        </section>
    );
}

export default Contact;