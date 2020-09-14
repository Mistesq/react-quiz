import React from 'react';
import classes from './FinishedQuiz.module.scss';
import Button from '../UI/Button/Button'

const FineshedQuiz = (props) => {
  const successCount = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === 'success') {
      total++;
    }

    return total;
  }, 0);

  return (
    <div className={classes.FineshedQuiz}>
      <ul>
        { props.quiz.map((quizItem, index) => {
          const cls = [
            'far',
            props.results[quizItem.id] === 'error' ? 'fa-times-circle ' : 'fa-check-circle ',
            classes[props.results[quizItem.id]]
          ];

           return (
             <li key={index}>
               <strong>{index + 1}</strong>.&nbsp;
                 {quizItem.question}
                 <i className={cls.join(' ')} />
             </li>
           )
        }) }
      </ul>

      <p>Correct answers {successCount} of {props.quiz.length}</p>

      <div>
        <Button onClick={props.onRetry} type="primary">Retry</Button>
        <Button type="success">Go to the list of tests</Button>
      </div>
    </div>
  );
};

export default FineshedQuiz;