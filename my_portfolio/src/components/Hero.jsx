import React, { useEffect, useState, useRef } from 'react';
import './styles/Hero.css';


function Hero() {
    const [text, setText] = useState('');
    const fullText = 'Fuull-Stack Developer | MERN Enthusiast | DSA  ';
    const indexRef = useRef(0);  // Use ref to manage the index without triggering re-renders
    const typingInterval = useRef(null);

    useEffect(() => {
        // Clear previous interval if it exists before starting a new one
        if (typingInterval.current) {
            clearInterval(typingInterval.current);
        }

        typingInterval.current = setInterval(() => {
            setText((prevText) => {
                if (indexRef.current < fullText.length) {
                    // Add the next character to the text being typed out
                    return prevText + fullText[indexRef.current];
                }
                return prevText; // Do nothing if the index exceeds the text length
            });

            indexRef.current += 1;

            if (indexRef.current >= fullText.length) {
                clearInterval(typingInterval.current); // Clear the interval when text is fully typed
            }
        }, 100); // Speed of typing effect (100ms per character)

        // Cleanup interval when component is unmounted or re-rendered
        return () => {
            clearInterval(typingInterval.current);
        };
    }, []); // Empty dependency array ensures this runs only once on mount
    // Empty dependency array ensures this runs only once on mount

    return (
        <section id="hero">
            <div className="hero-content">
                {/* Hero Text Section */}
                <div className="hero-text">
                    <p className="intro-text">Hello, I'm</p>
                    <h1>Preksha Jain</h1>
                    <h3>{text}</h3> {/* Typing effect applied to h3 */}
                    <p className="description">
                        Crafting responsive, innovative, and user-centric web applications.
                        With expertise in the MERN stack, I transform ideas into impactful solutions.
                    </p>
                    <div className="hero-buttons">
                        <a href="#portfolio" className="btn primary"> My Work</a>
                        <a href="#contact" className="btn secondary">Contact Me</a>
                    </div>
                </div>

                {/* Hero Image Section */}
                <div className="hero-image">
                    <img
                        src="images/Preksha Jain.png" 
                        alt="Preksha Jain"
                        className="profile-image h-[50px]"
                    />
                </div>
            </div>
        </section>
    );
}

export default Hero;