import React from 'react';
import propTypes from 'prop-types';

const NameForm = ({ onSubmit, onChange, value }) => {
  return (
    <form onSubmit={onSubmit}>
      <label>이름</label>
      <input type="text" value={value} onChange={onChange} />
      <button type="submit">등록</button>
    </form>
  );
}

NameForm.propTypes = {
  onSubmit: propTypes.func.isRequired,
  onChange: propTypes.func.isRequired,
  value: propTypes.string.isRequired,
};

NameForm.defaultProps = {
  onSubmit: () => console.warn('onSubmit not defined'),
  onChange: () => console.warn('onChange not defined'),
  value: ''
};


export default NameForm;