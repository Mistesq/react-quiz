import React, {Component} from 'react';
import classes from './Quiz.module.scss';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';

class Quiz extends Component {
  state = {
    isFinished: true,
    activeQuestion: 0,
    answerState: null,
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
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState[0]);
      if (this.state.answerState[key] === 'success') {
        return
      }
    }

    const question = this.state.quiz[this.state.activeQuestion];
    if (question.rightAnswerId === answerId) {
      this.setState({
        answerState: {[answerId]: 'success'},
      });

      const timeout = window.setTimeout(() => {
        if (this.isQuizFinish()) {
          this.setState({
            isFinished: true,
          });
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          });
        }
        window.clearTimeout(timeout);
      }, 1000);

    } else {
      this.setState({
        answerState: {[answerId]: 'error'},
      });
    }

  }

  isQuizFinish() {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }

  render() {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Answer all questions</h1>
          {
            this.state.isFinished
              ? <FinishedQuiz

                />
              : <ActiveQuiz
                  answers={this.state.quiz[this.state.activeQuestion].answers}
                  question={this.state.quiz[this.state.activeQuestion].question}
                  onAnswerClick={this.onAnswerClickHandler}
                  quizLenght={this.state.quiz.length}
                  answerNumber={this.state.activeQuestion + 1}
                  state={this.state.answerState}
                />
          }

        </div>
      </div>
    );
  }
}

export default Quiz;
