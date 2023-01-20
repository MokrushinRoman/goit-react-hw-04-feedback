import PropTypes from 'prop-types';

import { capitalLetter } from 'helpers';
import {
  StatisticsItem,
  StatisticsItemValue,
  StatisticsList,
} from './Statistics.styled';

export const Statistics = ({
  bad = 0,
  neutral = 0,
  good = 0,
  total = 0,
  positivePercentage: positive = 0,
}) => {
  return (
    <StatisticsList>
      <StatisticsItem>
        {capitalLetter('good')}:
        <StatisticsItemValue>{good}</StatisticsItemValue>
      </StatisticsItem>

      <StatisticsItem>
        {capitalLetter('neutral')}:
        <StatisticsItemValue>{neutral}</StatisticsItemValue>
      </StatisticsItem>

      <StatisticsItem>
        {capitalLetter('bad')}:<StatisticsItemValue>{bad}</StatisticsItemValue>
      </StatisticsItem>

      <StatisticsItem>
        {capitalLetter('total')}:
        <StatisticsItemValue>{total}</StatisticsItemValue>
      </StatisticsItem>

      <StatisticsItem>
        {capitalLetter('positive feedback')}:
        <StatisticsItemValue>{positive}</StatisticsItemValue>
      </StatisticsItem>
    </StatisticsList>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
};
