import PropTypes from 'prop-types';
import s from './Statistics.module.css';


const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={s.border}>
      <li className={s.items}><span className={s.status} style={{ backgroundColor: '#0db30d'}}></span>Good: {good}</li>
      <li className={s.items}><span className={s.status} style={{ backgroundColor: 'rgb(81, 133, 253)'}}></span>Neutral: {neutral}</li>
      <li className={s.items}><span className={s.status} style={{ backgroundColor: 'rgb(249 73 73)'}}></span>Bad: {bad}</li>
      <li className={s.items}><span className={s.status} style={{ backgroundColor: 'rgb(240 250 9 / 84%)'}}></span>Total: {total}</li>
      <li className={s.items}><span className={s.status} style={{ backgroundColor: 'rgb(21, 250, 9)'}}></span>Positive Feedback: {positivePercentage}%</li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
};

export default Statistics;