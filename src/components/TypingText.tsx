import React, { useState, useEffect } from 'react';
import '../css/textAnimation.css';

interface TypingTextProps {
    fullText: string;
  }
  
  const TypingText: React.FC<TypingTextProps> = ({ fullText }) => {
    const [typedText, setTypedText] = useState<string>('');
  
    useEffect(() => {
      if (typedText.length < fullText.length) {
        const timeoutId = setTimeout(() => {
          setTypedText(fullText.slice(0, typedText.length + 1));
        }, 80); 
        return () => clearTimeout(timeoutId);
      } 
    }, [typedText, fullText]);
  
    return (
      <div className="typing-container inline-block relative">
        <span className="text-2xl sm:text-xl md:text-2xl inline">{typedText}</span>
        <div className={`cursor`}></div>
      </div>
    );
  };
  
  export default TypingText;
