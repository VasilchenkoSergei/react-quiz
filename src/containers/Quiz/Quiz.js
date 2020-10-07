import React, { Component } from 'react';
import classes from './Quiz.module.scss';
import ActiveQuiz from '../../components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../components/FinishedQuiz/FinishedQuiz';

class Quiz extends Component {
  state = {
    isFinished: false,
    results: {},
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
    if (this.state.answerState) {
      const key = Object.keys(this.state.answerState)[0];

      if (this.state.answerState[key] === 'success') {
        return
      }
    }

    const question = this.state.quiz[this.state.activeQuestion];
    const results = this.state.results;

    if (question.rightAnswerId === answerId) {
      if (!results[answerId]) {
        results[answerId] = 'success';
      }
      this.setState({
        answerState: {[answerId]: 'success'},
        results
      })
      const timeout = window.setTimeout(() => {
        if (this.isQuizFinished()) {
          this.setState({
            isFinished: true,
          });
        } else {
          this.setState({
            activeQuestion: this.state.activeQuestion + 1,
            answerState: null
          });
        }

        window.clearTimeout(timeout)
      }, 1000);
    } else {
      results[answerId] = 'error';
      this.setState({
        answerState: {[answerId]: 'error'},
        results
      })
    }

  }

  retryFunc = () => {
    this.setState({
      activeQuestion: 0,
      answerState: null,
      isFinished: false
    })
  }

  isQuizFinished() {
    return this.state.activeQuestion + 1 === this.state.quiz.length;
  }

  render () {
    return (
      <div className={classes.Quiz}>
        <div className={classes.QuizWrapper}>
          <h1>Quiz</h1>

          { 
            this.state.isFinished ? 
            <FinishedQuiz 
              results={this.state.results}
              quiz={this.state.quiz}
              retry={this.retryFunc}
            /> :
            <ActiveQuiz 
              answers={this.state.quiz[this.state.activeQuestion].answers}
              question={this.state.quiz[this.state.activeQuestion].question}
              onAnswerClick={this.onAnswerClickHandler}
              quizLength={this.state.quiz.length}
              answerNumber={this.state.activeQuestion + 1}
              state={this.state.answerState}
            />
          }
        </div>
      </div>
    )
  }
}

export default Quiz;