import React from 'react';
import propTypes from 'prop-types';

const Post = ({ title, body, onLoad }) => {
  return (
    <div>
      <h2>{title}</h2>,
      <p>{body}</p>
      <button onClick={onLoad}>LoadMe</button>
    </div>
  );
}

Post.defaultProps = {
  title: 'hello',
  body: 'world',
  onLoad: () => console.warn('onLoad not defined')
};

Post.propTypes = {
  title: propTypes.string.isRequired,
  body: propTypes.string.isRequired,
  onLoad: propTypes.func.isRequired
};

export default Post;