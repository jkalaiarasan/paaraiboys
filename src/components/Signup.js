import React from 'react';

const Signup = () => {
  const divStyle = {
    minHeight: '78vh', // Set minimum height to 100% of the viewport height
    marginTop: '100px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };

  const buttonStyle = {
    padding: '12px 24px',
    backgroundColor: '#ff5722',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '4px',
    fontSize: '16px',
    fontWeight: 'bold'
  };

  return (
    <div style={divStyle}>
      <a href="https://account-dev-ed.develop.my.site.com/paaraiboys/s/" target='blank' style={buttonStyle}>உறுப்பினராக சேர்</a>
    </div>
  );
};

export default Signup;