import React, { Component } from 'react';
import classes from './AnswerItem.module.scss';

const AnswerItem = props => {
  console.log(props);
  return (
    <li 
      className={classes.AnswerItem} 
      onClick = {() => props.onAnswerClick(props.answer.id)}
    >
      {props.answer.text}
    </li>
  )
}

export default AnswerItem;