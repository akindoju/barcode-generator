import React from 'react';
import { useHistory } from 'react-router';

const BackBtn = () => {
  const history = useHistory();

  return (
    <button
      className="backBtn"
      onClick={(e) => {
        e.preventDefault();
        history.push('/');
      }}
    >
      <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
    </button>
  );
};

export default BackBtn;
