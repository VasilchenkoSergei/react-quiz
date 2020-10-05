import React, { Component } from 'react';
import AnswersList from './AnswersList/AnswersList';
import classes from './ActiveQuiz.module.scss';

const ActiveQuiz = props => (
  <div className={classes.ActiveQuiz}>
    <p className={classes.Question}>
      <span>
        <strong>1.</strong> {props.question}
      </span>
    </p>

    <small>4 из 12</small>

    <AnswersList 
      answers={props.answers}
      onAnswerClick={props.onAnswerClick}
    />
  </div>
)

export default ActiveQuiz;