import React from "react";
import './menu-items.styles.scss'

const MenuItems = ({title}) => {
  return (
    <div className='menu-item'>
      <div className='content'>
        <div className='title'>{title}</div>
        <span className='subtitle'>SHOP NOW</span>
      </div>
    </div>
  )
}

export default MenuItems;