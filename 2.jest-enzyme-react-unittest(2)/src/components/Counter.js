import React from 'react';
import propTypes from 'prop-types';

const Counter = ({ value, onIncrease, onDecrease }) => {
  return (
    <div>
      <h1>카운터</h1>
      <h2>{value}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
    </div>
  );
}

Counter.defaultProps = {
  value: 0,
  onIncrease: () => console.warn('onIncrease not defined'),
  onDecrease: () => console.warn('onDecrease not defined')
}
Counter.propTypes = {
  value: propTypes.number.isRequired,
  onIncrease: propTypes.func.isRequired,
  onDecrease: propTypes.func.isRequired
}

export default Counter;