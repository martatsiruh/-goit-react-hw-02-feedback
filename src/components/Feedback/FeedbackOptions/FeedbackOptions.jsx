//import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';


const FeedbackOptions = ({ options, onLeaveFeedback }) => {

    return (
      <ul className={s.buttons}>
      {options.map(option => {
        return (
          <button
            key={option}
            id={option}
            data={option}
            className={s.button}
            type="button"
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        );
      })}
    </ul>
    );
    
};

export default FeedbackOptions;