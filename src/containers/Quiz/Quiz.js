import React, { Component } from 'react';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import classes from './Quiz.module.scss';

class Quiz extends Component {
  state = {
    quiz: [
      {
        question: 'Какого цвета небо?',
        rightAnswerId: 1,
        answers: [
          {
            text: 'Синий',
            id: '1'
          },
          {
            text: 'Красный',
            id: '2'
          },
          {
            text: 'Желтый',
            id: '3'
          },
          {
            text: 'Зеленый',
            id: '4'
          },
        ]
      }
    ],
  }

  onAnswerClickHandler = answerId => {

  }
  render () {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Quiz</h1>
          <ActiveQuiz 
            answers={this.state.quiz[0].answers}
            question={this.state.quiz[0].question}
            onAnswerClick={this.onAnswerClickHandler}
          />
        </div>
      </div>
    )
  }
}

export default Quiz;