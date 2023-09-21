import React from 'react';

const BoxContainer = ({ children }) => {
  const boxContainerStyles = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '10px'
  };

  return <div style={boxContainerStyles}>{children}</div>;
};

const FormContainer = ({ children }) => {
  const formContainerStyles = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column'
  };

  return <form style={formContainerStyles}>{children}</form>;
};

const MutedLink = ({ children }) => {
  const mutedLinkStyles = {
    fontSize: '12px',
    color: 'rgba(200, 200, 200, 0.8)',
    fontWeight: '500',
    textDecoration: 'none',
    borderBottom: '1px dashed rgba(200, 200, 200, 0.8)'
  };

  return <a style={mutedLinkStyles}>{children}</a>;
};

const BoldLink = ({ children }) => {
  const boldLinkStyles = {
    fontSize: '12px',
    color: 'rgba(241, 196, 15, 1)',
    fontWeight: '500',
    textDecoration: 'none',
    borderBottom: '1px dashed rgba(241, 196, 15, 1)'
  };

  return <a style={boldLinkStyles}>{children}</a>;
};

const Input = (props) => {
  const inputStyles = {
    width: '100%',
    height: '42px',
    outline: 'none',
    border: '1px solid rgba(200, 200, 200, 0.3)',
    borderRadius: '5px',
    padding: '0px 10px',
    transition: 'all 200ms ease-in-out',
    marginBottom: '5px'
  };

  return <input style={inputStyles} {...props} />;
};

const SubmitButton = ({ children }) => {
  const submitButtonStyles = {
    width: '100%',
    maxWidth: '150px',
    padding: '10px',
    color: '#fff',
    fontSize: '15px',
    fontWeight: '600',
    border: 'none',
    borderRadius: '100px',
    cursor: 'pointer',
    transition: 'all 240ms ease-in-out',
    background:
      'linear-gradient(58deg, rgba(243, 172, 18, 1) 20%, rgba(241, 196, 15, 1) 100%)'
  };

  return <button style={submitButtonStyles}>{children}</button>;
};

const LineText = ({ children }) => {
  const lineTextStyles = {
    fontSize: '12px',
    color: 'rgba(200, 200, 200, 0.8)',
    fontWeight: '500'
  };

  return <p style={lineTextStyles}>{children}</p>;
};

export {
  BoxContainer,
  FormContainer,
  MutedLink,
  BoldLink,
  Input,
  SubmitButton,
  LineText
};
