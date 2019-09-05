import React, { useState } from 'react';

export default const RegistrationForm = props => {

  const [email, setEmail] = useState('');


  return (
    <React.Fragment>
      <form onSubmit={props.handleSubmit}>

      </form>

    </React.Fragment>
  );
};