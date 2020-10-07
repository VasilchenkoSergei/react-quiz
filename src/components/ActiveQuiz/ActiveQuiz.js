import React from 'react';
import AnswersList from './AnswersList/AnswersList';
import classes from './ActiveQuiz.module.scss';

const ActiveQuiz = props => (
  <div className={classes.ActiveQuiz}>
    <p className={classes.Question}>
      <span>
        <strong>{props.answerNumber}.</strong> {props.question}
      </span>
    </p>

    <small>{props.answerNumber} из {props.quizLength}</small>

    <AnswersList 
      state={props.state}
      answers={props.answers}
      onAnswerClick={props.onAnswerClick}
    />
  </div>
)

export default ActiveQuiz;