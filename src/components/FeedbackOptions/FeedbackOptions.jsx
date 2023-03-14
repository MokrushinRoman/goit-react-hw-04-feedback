import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import { FeedbackButton } from './FeedbackOptions.styled';
import { Box } from 'components/Box';
import { capitalLetter } from 'helpers';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <Box display="flex" justifyContent="center" mt={2}>
      {options.map(option => (
        <FeedbackButton
          key={nanoid()}
          type="button"
          onClick={() => {
            onLeaveFeedback(option);
          }}
        >
          {capitalLetter(option)}
        </FeedbackButton>
      ))}
    </Box>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
