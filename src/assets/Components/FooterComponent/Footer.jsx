import React from 'react'
import FooterSupport from './FooterSupportComponent/FooterSupport'
import FooterAbout from './FooterAboutComponent/FooterAbout'
import FooterCooperation from './FooterCooperationComponent/FooterCooperation'
import FooterPayment from './FooterPaymentComponent/FooterPayment'
import FooterContact from './FooterContactComponent/FooterContact'
import FooterAddress from './FooterAddressComponent/FooterAddress'
import './style.css'

const Footer = (props) => {
  return <>
    <div className='flex flex-col mt-[20px]'>
      <div className='flex flex-col m-[20px] justify-center md:mx-auto '>
        <div className= 'grid grid-cols-2 gap-[20px] md:flex md:justify-between md:w-[100%] md:px-[10px] xl:w-[1240px]'>
          <FooterSupport className = '' />
          <FooterAbout className =''/>
          <FooterCooperation className =''/>
          <FooterPayment className=''/>
          <FooterContact className =''/>
        </div>
      </div>
      <div className='flex m-[20px] justify-center'>
        <div className= 'flex justify-between w-[1240px] gap-[20px] border-t-[1px] border-b-[1px] py-[20px]'>
          <FooterAddress/>
        </div>
      </div>
    </div>
  </>
}

export default Footer