import React from 'react';

import './Logo.css';

function Logo({ country = 'in' }) {
  return (
    <div className="header">
      <img
        alt="amzon"
        className="header_logo"
        src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
      />
      <span className="logo__country">{country}</span>
    </div>
  );
}

export default Logo;
