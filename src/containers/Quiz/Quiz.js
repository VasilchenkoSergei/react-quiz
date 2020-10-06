import React, { Component } from 'react';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import classes from './Quiz.module.scss';

class Quiz extends Component {
  state = {
    activeQuestion: 0,
    answerState: null,
    quiz: [
      {
        question: 'Какого цвета небо?',
        rightAnswerId: 1,
        answers: [
          {
            text: 'Синий',
            id: 1
          },
          {
            text: 'Красный',
            id: 2
          },
          {
            text: 'Желтый',
            id: 3
          },
          {
            text: 'Зеленый',
            id: 4
          },
        ]
      },
      {
        question: 'Когда основана Москва?',
        rightAnswerId: 3,
        answers: [
          {
            text: '1111',
            id: 1
          },
          {
            text: '2222',
            id: 2
          },
          {
            text: '333',
            id: 3
          },
          {
            text: '4444',
            id: 4
          },
        ]
      },
    ],
  }

  onAnswerClickHandler = answerId => {
    const question = this.state.quiz[this.state.activeQuestion];

    if (question.rightAnswerId === answerId) {
      this.setState({
        answerState: {[answerId]: 'success'}
      })
      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          console.log('finished');
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          });
        }

        window.clearTimeout(timeout)
      }, 1000);
    } else {
      this.setState({
        answerState: {[answerId]: 'error'}
      })
    }

  }

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }

  render () {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Quiz</h1>
          <ActiveQuiz 
            answers={this.state.quiz[this.state.activeQuestion].answers}
            question={this.state.quiz[this.state.activeQuestion].question}
            onAnswerClick={this.onAnswerClickHandler}
            quizLength={this.state.quiz.length}
            answerNumber={this.state.activeQuestion + 1}
            state={this.state.answerState}
          />
        </div>
      </div>
    )
  }
}

export default Quiz;