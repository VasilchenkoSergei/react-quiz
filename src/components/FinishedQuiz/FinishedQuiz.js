import React from 'react';
import classes from './FinishedQuiz.module.scss';

const FinishedQuiz = props => {
  const successCount = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === 'success') {
      total++
    }

    return total
  }, 0)
  return (
    <div className={classes.FinishedQuiz}>
      <ul>
        { props.quiz.map((item, index) => {
          const cls = [
            'status',
            props.results[item.id] === 'error' ? 'error' : 'success',
            classes[props.results[item.id]]
          ];
          return (
            <li key={index}>
              <span>{index + 1}.</span>
              {item.question}
              <span className={cls.join(' ')}>WRONG</span>
            </li>
          )
        }) }
      </ul>

      <p>Правильно {successCount} из {props.quiz.length}</p>
      <div>
        <button onClick={props.retry}>Повторить</button>
      </div>
    </div>
  )
}

export default FinishedQuiz;