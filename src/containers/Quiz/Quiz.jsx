import React, {Component} from 'react';
import classes from './Quiz.module.scss';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';

class Quiz extends Component {
  state = {
    activeQuestion: 0,
    quiz: [
      {
        question: 'What color is the sky?',
        rightAnswerId: 4,
        id: 1,
        answers: [
          {text: 'green', id: 1},
          {text: 'yellow', id: 2},
          {text: 'red', id: 3},
          {text: 'blue', id: 4}
        ]
      },
      {
        question: 'What year was Leonardo da Vinci born?',
        rightAnswerId: 2,
        id: 2,
        answers: [
          {text: '1343', id: 1},
          {text: '1452', id: 2},
          {text: '1401', id: 3},
          {text: '1487', id: 4}
        ]
      }
    ]
  }

  onAnswerClickHandler = (answerId) => {
    this.setState({
      activeQuestion: this.state.activeQuestion + 1
    });
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Answer all questions</h1>
          <ActiveQuiz
            answers={this.state.quiz[this.state.activeQuestion].answers}
            question={this.state.quiz[this.state.activeQuestion].question}
            onAnswerClick={this.onAnswerClickHandler}
            quizLenght={this.state.quiz.length}
            answerNumber={this.state.activeQuestion + 1}
          />
        </div>
      </div>
    );
  }
}

export default Quiz;
