import PropTypes from 'prop-types';

import { capitalLetter } from 'helpers';
import { Message } from './Notification.styled';

export const Notification = ({ message }) => {
  return <Message>{capitalLetter(message)}</Message>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
