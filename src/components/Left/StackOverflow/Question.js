import React from 'react';
import '../Youtube/components/VideoItem.css';

const Question = ({question, onQuestionSelect}) => {
    return (
      <div className="video-item item" onClick={() => onQuestionSelect(question)}>
          <div className="content">
              <div className="header">
                  {question.title}
              </div>
          </div>
      </div>
    );
};
export default Question;
