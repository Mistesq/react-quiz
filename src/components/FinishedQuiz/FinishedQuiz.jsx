import React from 'react';
import classes from './FinishedQuiz.module.scss';

const FineshedQuiz = (props) => {
  return (
    <div className={classes.FineshedQuiz}>
      <ul>
        <li>
          <strong>1. </strong>
          How are you
          <i className={'far fa-times-circle ' + classes.error}></i>
        </li>
        <li>
          <strong>1. </strong>
          How are you
          <i className={'far fa-check-circle ' + classes.success}></i>
        </li>
      </ul>

      <p>Correct answers 4 of 12</p>

      <div>
      <button>Retry</button>
      </div>
    </div>
  );
};

export default FineshedQuiz;
