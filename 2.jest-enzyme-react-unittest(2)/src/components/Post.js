import React from 'react';
import propTypes from 'prop-types';

const Post = ({ title, body, onLoad, loading, error }) => {
  return (
    <div>
      {
        loading
         ? (<h2>로딩중...</h2>)
         : (
           error
            ? (<h2>에러 발생</h2>)
            : (
                <h2>{title}</h2>,
                <p>{body}</p>
              )
           )
      }
      <button onClick={onLoad}>LoadMe</button>
    </div>
  );
}

Post.defaultProps = {
  title: 'hello',
  body: 'world',
  loading: false,
  error: false,
  onLoad: () => console.warn('onLoad not defined')
};

Post.propTypes = {
  title: propTypes.string.isRequired,
  body: propTypes.string.isRequired,
  loading: propTypes.bool.isRequired,
  error: propTypes.bool.isRequired,
  onLoad: propTypes.func.isRequired
};

export default Post;