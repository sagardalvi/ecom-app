import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({children, isSecondary, inverted, ...otherProps}) => (
  <button className={`${inverted ? 'inverted' : ''} ${isSecondary ? 'secondary-btn' : ''} custom-button`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
