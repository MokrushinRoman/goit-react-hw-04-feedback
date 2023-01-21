import { useState } from 'react';

import { Box } from '../Box';
import { FeedbackOptions, Notification, Statistics, Title } from 'components';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + bad + neutral;
  };

  const countPositiveFeedbackPercentage = () => {
    const number = (100 * good) / (bad + good + neutral);
    return good ? `${Math.round(number)}%` : 0;
  };

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;

      default:
        return new Error(`Unknown option - ${option}`);
    }
  };

  const options = ['good', 'neutral', 'bad'];

  return (
    <Box
      mx="auto"
      my="100px"
      p={3}
      width="500px"
      border="1px solid rgba(0, 0, 0, 0.2)"
      borderRadius="5px"
      boxShadow="0 3px 7px rgba(0, 0, 0, 0.3)"
    >
      <Box>
        <Title text="please leave feedback" />

        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback} />
      </Box>

      <Box mt={3}>
        <Title text="statistics" />

        {good || neutral || bad ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="there is no feedback." />
        )}
      </Box>
    </Box>
  );
};
