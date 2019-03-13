import React from 'react';
import propTypes from 'prop-types';

const renderList = (names) => {
  const nameList = names.map(
    (name, i) => (<li key={i}>{name}</li>)
  );
  return nameList;
}

const NameList = ({ names }) => {
  return (
    <ul>
      {renderList(names)}
    </ul>
  );
}

NameList.defaultProps = {
  names: []
};

NameList.propTypes = {
  names: propTypes.array.isRequired
}

export default NameList