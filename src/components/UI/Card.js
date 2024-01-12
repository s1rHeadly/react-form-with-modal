import React from 'react';
import PropTypes from 'prop-types'

import styles from './Card.module.css';

const Card = ({children, addedClass}) => {
  return (
    <div className={`${styles.card} ${addedClass}`}>{children}</div>
  )
};



Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
]).isRequired,
addedClass: PropTypes.string,
}

Card.defaultProps = {
  children: 'Default child content',
  addedClass: '',
}

export default Card;
