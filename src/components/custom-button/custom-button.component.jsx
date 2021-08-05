import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({children, isSecondary, ...otherProps}) => (
  <button className={`${isSecondary ? 'secondary-btn' : ''} custom-button`} {...otherProps}>
    {children}
  </button>
);

export default CustomButton;
