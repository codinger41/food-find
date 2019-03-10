import React from 'react';

export default props => {
  const { loading } = props;
  return loading ? (
    <div class="spinner"></div>
  ) : null;
};
