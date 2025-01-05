import React from 'react';
import '../globals.css'; // Assuming you want to style it separately

const LLMEvalComponent = () => {
    return (
        <div className="llm-eval-container">
            <input type="text" className="input-box" placeholder="Enter your input here..." />
            <div className="output-box" placeholder="Output will be displayed here..." />
        </div>
    );
};

export default LLMEvalComponent;
