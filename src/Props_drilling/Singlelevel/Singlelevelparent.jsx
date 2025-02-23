
import React from 'react';
import Singlelevelchild from './Singlelevelchild';

const SinglelevelParent = () => {
  const message = "Hello from Parent!";

  return (
    <div>
      <h1>Parent Component</h1>
      <Singlelevelchild message={message} />
    </div>
  );
};

export default SinglelevelParent;
