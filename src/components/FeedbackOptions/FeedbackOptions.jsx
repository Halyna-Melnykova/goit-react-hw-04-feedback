import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import s from './FeebackOptions.module.css';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div className={s.btnList}>
      {options.map(item => (
        <button
          key={nanoid()}
          type="button"
          className={s.button}
          onClick={() => onLeaveFeedback(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func,
};
