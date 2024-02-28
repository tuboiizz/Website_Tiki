import React from 'react'
import FooterSupport from './FooterSupportComponent/FooterSupport'
import FooterAbout from './FooterAboutComponent/FooterAbout'
import FooterCooperation from './FooterCooperationComponent/FooterCooperation'
import FooterPayment from './FooterPaymentComponent/FooterPayment'
import FooterContact from './FooterContactComponent/FooterContact'
import './style.css'

const FooterInfor = (props) => {
  return <>
    <div className='flex justify-center p-[20px]'>
        <div className= 'flex justify-between w-[1240px] gap-[20px]'>
          <FooterSupport className = '' />
          <FooterAbout className =''/>
          <FooterCooperation className =''/>
          <FooterPayment className=''/>
          <FooterContact className =''/>
        </div>
    </div>
  </>
}

export default FooterInfor