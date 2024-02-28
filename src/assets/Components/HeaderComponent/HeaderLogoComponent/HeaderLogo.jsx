import React from 'react'
import './style.css'
const HeaderLogo = (props) => {
  return (
    <div className={props.className}>
      <a href="/">
        <img 
          className='object-contain header-logo'
          src = 'https://s3-alpha-sig.figma.com/img/0fc4/c1bd/682eccf8d6c5e3ed3e5df02dab272608?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mBaGYclduUoVeQ1sJ-Eo~GxzCUW5wL0UeUhTDPboU~uC6Vupbho9pLWUb7mX4lBGHgzWBjF8gKV-r-yLEycuNdV9g7AWSgrSkYWgI97ZGuXG7T-sQGhOGX5vTU-JahDB7J~DzSYw43K0hvh1iww8RHncnXhTfctM1ZwzXmQYCddCrfBDS-tmixrkVxuuUpcV2UhP2wHBAL9blAEzhG9uv3-7bB19mI3PSdhBFFLm-MoZgqmYO-iA6YjM4BXHRELEZedB6UffItoSdjyJCGx3TOGBImncpeJM73pviS5aVzbICF-UnBGPOa6KBaDWBFPh828ewKJjG0vAHsaazfB-zg__'
        />
      </a>
    </div>
  )
}



export default HeaderLogo