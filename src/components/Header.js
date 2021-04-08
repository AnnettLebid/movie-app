import React from 'react';

const Header = (props) => {
  return (
    <div className = 'col text-center mt-5 mb-5'>
      <h1>{props.header}</h1>      
    </div>
  );
};

export default Header;
