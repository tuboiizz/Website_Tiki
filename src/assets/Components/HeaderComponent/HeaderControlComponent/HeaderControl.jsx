import React, { useState } from 'react'
import "./style.css"
const HeaderControl = (props) => {
    const [numberProducts, setNumberProducts] = useState(()=>{
        return localStorage.getItem("numberProducts");
    });
    return (
        <>
            <div className={props.className}>
                <div className='header-control-wrapper flex justify-between items-center gap-x-8'>
                    <div className='header-control-nav flex justify-between items-center gap-x-2'>
                        <a href='' className='header-control-item'>
                            <img className='control-item__icon object-cover' src='https://s3-alpha-sig.figma.com/img/428e/3a18/014835c48fc3848c37a8147a0b848e40?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f7W7IKN9efsHFQPo-kewEWMQZyPnVwHaFB-VY52e3GorZcFZJ57mqT1HCCTVvuCNgKSlsvdqWIbwwM3BClOAiNvPoaMbxmKkT7kBaIyi1iIZC6BOh1KDmNiwi9zRxPViV8myQZGSoC3TZCcDscttFS3zOxNlAamYCkYyrqyDa8rr1VDZVsu33tZAIZHBBfgOpR~V3pcFeomYPZ4UiLXy1BY3Do9EXd1ADlrr-j2YpcJCIuHw9PfbZThODyuhAG8~DCPavNGvUL1X11Ig0iOmoB7vZ1PBiBJUe~V1KJO2pALkQyiTEmaPTIwsPmPgTB6-htLNIcpBh4iY178pZZAtjw__'></img>
                            <div className='control-item__text'>Trang chủ</div>
                        </a>

                        <a href='' className='header-control-item'>
                            <img className='control-item__icon object-cover' src='https://s3-alpha-sig.figma.com/img/4b75/ae06/c1ed80deda31d49b91763474ad6f4e8b?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=d14zTD6Dw8Q1g~nIk1goCT2V6h62cNLLv~s6yJv~6sMklFeOUKtDrYgfbsx7lwxMkh3gIk8eTDmO41H03v968zDTcPwmM30qGL8ibsiztNhIANPpe52rwgyzvDes5J84rQ~HEPtRU-6NiDq1t2FoKQkkbkMo1h-E0yMe2quPMgkLjpUgUWx~YT8sD2U7S4epm~IsE7r06hM8VauYvwREEkeITubRwoDzHzwaYKk0j7LxarfhxepPmNKdC-~0NPYPqlq363tRDGP~nXi9ArKefwpcXwEDwYElBi8dWQHoUwJbqs4i-rmyKi~qMRg5lG9lvyiHt~eEF50~pXlt9tqQ1w__'></img>
                            <div className='control-item__text'>Tài khoản</div>
                        </a>
                    </div>

                    <div className='header-control-cart'>
                        <a href='/shopping-cart' className='control-cart-icon header-control-item'>
                            <img className='control-item-cart-icon object-cover' src='https://s3-alpha-sig.figma.com/img/a084/d2e6/defd412e1477724456bfb6c09607f2de?Expires=1709510400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=G~gDX7UAHJsl1J-kcUj0mOG859WtGiDeD0Wc3W3M-rI8nZLIXP6jViOw~X~xXMtGU~mqh1SCFceNTHD2wXnRloeQpv6UQ1E9UOauE~IYXmK-YcyE~9s4REl6yLMBD0td1rknIY18kP8US0W73DTZfNwHE7TkiEbO~L40e3HsjwyQDGSH1-A4qpdQngtA8Qj48s-AUwPhWgfPHssjmf5trXdpHzqBMURROKupwaTBvLKWeQx0hU8m1gWZk3Jy7FYsQkDO9g4kQ4wgelRv~HxJOPtovl~ThyCxeUKod-ibXghJIAQWsZUxGyvzdtHuW5onz4qo-XzjWgbdrz~LxfXHgg__'></img>
                        
                            <span className='control-item-cart-quantity' id ='control-icon-cart'>{numberProducts == null ? 0 : numberProducts}</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
  )
}

export default HeaderControl