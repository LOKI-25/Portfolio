import { useEffect, useState } from 'react';
import './NetflixTitle.css';
import netflixSound from './netflix-sound.mp3';
import { useNavigate } from 'react-router-dom';
import logoImage from '../src/images/logo-2.png'; // Update with the path to your logo

const NetflixTitle = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [showTypingEffect, setShowTypingEffect] = useState(
true
  );
  const [typedText, setTypedText] = useState("");
  const navigate = useNavigate();
  const name = "Lookesh Narayana"; // Your name for typing effect

  useEffect(() => {
    if (showTypingEffect) {
      let i = 0;
      const interval = setInterval(() => {
        if (i < name.length) {
          setTypedText((prev) => prev + name.charAt(i));
          i++;
        } else {
          clearInterval(interval);
            setShowTypingEffect(false);
          // Wait 1 sec before switching to logo
        }
      }, 150);
      return () => clearInterval(interval);
    }
  }, [showTypingEffect]);

  const handlePlaySound = () => {
    const audio = new Audio(netflixSound);
    audio.play().catch(error => console.error("Audio play error:", error));
    setIsClicked(true); // Starts animation after clicking
  };

  useEffect(() => {
    if (isClicked) {
      const timer = setTimeout(() => {
        navigate('/browse');
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isClicked, navigate]);

  return (
    <div className="netflix-container" onClick={handlePlaySound}>
      {showTypingEffect ? (
        <h1 className="typing-effect">{typedText}</h1>
      ) : (
        <img 
          src={logoImage} 
          alt="Custom Logo" 
          className={`netflix-logo ${isClicked ? 'animate' : ''}`} 
        />
      )}
    </div>
  );
};

export default NetflixTitle;
