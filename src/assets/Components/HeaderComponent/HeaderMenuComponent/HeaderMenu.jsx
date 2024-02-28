import React from 'react'
import "./style.css"
const HeaderControl = (props) => {
  return (
    <>
        <div className={props.className}>
            <a href="" className="hover:bg-[#949eaf33] p-[5px] ">
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.2625 9.2625L17.5 7.5L10 15L17.5 22.5L19.2625 20.7375L13.5375 15L19.2625 9.2625Z" fill="white"/>
                </svg>
            </a>

            <a href="" className='hover:bg-[#949eaf33]'>
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="10" y="13" width="20" height="2" fill="white"/>
                    <rect x="10" y="19" width="20" height="2" fill="white"/>
                    <rect x="10" y="25" width="20" height="2" fill="white"/>
                </svg>
            </a>

        </div>
    </>
  )
}

export default HeaderControl