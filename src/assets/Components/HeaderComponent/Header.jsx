import React from 'react'
import HeaderLogo from './HeaderLogoComponent/HeaderLogo'
import HeaderSearch from './HeaderSearchComponent/HeaderSearch'
import HeaderControl from './HeaderControlComponent/HeaderControl'
import HeaderMenu from './HeaderMenuComponent/HeaderMenu'
import HeaderCart from './HeaderCartComponent/HeaderCart'


function Header(){
  return <>
    <div className='flex flex-row gap-x-10 items-center bg-[#1BA8FF] px-[20px] py-[5px] md:bg-white'>
      <HeaderLogo className="hidden md:block"/>
      <HeaderMenu className="flex justify-center items-center md:hidden"/>
      <HeaderSearch />
      <HeaderControl className="hidden md:block"/>
      <HeaderCart className="block  md:hidden"/>
    </div>
  </>
}



export default Header