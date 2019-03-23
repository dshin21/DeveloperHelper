import React from 'react';
import Question from './Question';

const QuestionList = ({questions,onQuestionSelect}) => {
    const renderedList = questions.map((q) => {
        return <Question key={q.question_id}
                         onQuestionSelect={onQuestionSelect}
                         question={q}/>;
    });
    return <div className="ui relaxed divided list">{renderedList}</div>;
};
export default QuestionList;
