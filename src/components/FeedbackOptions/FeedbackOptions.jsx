import PropTypes from 'prop-types';

import { FeedbackButton } from './FeedbackOptions.styled';
import { Box } from 'components/Box';
import { capitalLetter } from 'helpers';

export const FeedbackOptions = ({
  onLeaveFeedback,
  options: [good, neutral, bad],
}) => {
  return (
    <Box display="flex" justifyContent="center" mt={2}>
      <FeedbackButton
        type="button"
        onClick={() => {
          onLeaveFeedback(good);
        }}
      >
        {capitalLetter('good')}
      </FeedbackButton>

      <FeedbackButton
        type="button"
        onClick={() => {
          onLeaveFeedback(neutral);
        }}
      >
        {capitalLetter('neutral')}
      </FeedbackButton>

      <FeedbackButton
        type="button"
        onClick={() => {
          onLeaveFeedback(bad);
        }}
      >
        {capitalLetter('bad')}
      </FeedbackButton>
    </Box>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};
