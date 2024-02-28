import React from 'react'
import './style.css';
const NavigationPath = (props) => {
  return (
    <>
      <div className={props.className}>
        <ul className='flex items-center gap-[30px] list-navigation'>
          <li><a href="" className='nav-item'>Trang chủ</a></li>
          <li><a href="" className='nav-item'>Nhà sách Tiki</a></li>
        </ul>
      </div>
    </>
  )
}

export default NavigationPath