import { Component } from 'react';

import { Box } from '../Box';
import { FeedbackOptions, Notification, Statistics, Title } from 'components';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return good + bad + neutral;
  };

  countPositiveFeedbackPercentage = () => {
    const { good, bad, neutral } = this.state;
    const number = (100 * good) / (bad + good + neutral);
    return good ? `${Math.round(number)}%` : 0;
  };

  onLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  render() {
    const options = Object.keys(this.state);
    const { bad, good, neutral } = this.state;

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

          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Box>

        <Box mt={3}>
          <Title text="statistics" />

          {good || neutral || bad ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="there is no feedback." />
          )}
        </Box>
      </Box>
    );
  }
}
