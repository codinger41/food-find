import React from 'react';

export default props => {
  const { loading } = props;
  return loading ? (
    <div className="spinner"></div>
  ) : null;
};
