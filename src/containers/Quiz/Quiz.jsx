import React, {Component} from 'react';
import classes from './Quiz.module.scss';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

class Quiz extends Component {
  state = {
    quiz: [
      {
        question: 'What color is the sky?',
        rightAnswerId: 4,
        answers: [
          {text: 'green', id: 1},
          {text: 'yellow', id: 2},
          {text: 'red', id: 3},
          {text: 'blue', id: 4}
        ]
      }
    ]
  }

  onAnswerClickHandler = (answerId) => {
    console.log('Answer id: ', answerId);
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Answer all questions</h1>
          <ActiveQuiz
            answers={this.state.quiz[0].answers}
            question={this.state.quiz[0].question}
            onAnswerClick={this.onAnswerClickHandler}
          />
        </div>
      </div>
    );
  }
}

export default Quiz;
