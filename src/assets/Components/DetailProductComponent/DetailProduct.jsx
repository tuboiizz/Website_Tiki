import React from 'react'
import DetailProductBuyInfor from './DetailProductBuyInforComponent/DetailProductBuyInfor'
import DetailProductThumbnail from './DetailProductThumbnailComponent/DetailProductThumbnail'
import DetailProductContent from './DetailProductContentComponent/DetailProductContent'
import "./style.css"
const DetailProduct = (props) => {
  return <>
    {/* <div className='grid grid-cols-12 gap-[25px] w-[1240px] mx-auto mt-[40px]'>
        <DetailProductThumbnail className='col-span-3' data={props.data}/>
        <DetailProductContent className='col-span-6' data = {props.data}/>
        <DetailProductBuyInfor className='col-span-3' data = {props.data}/>
    </div> */}

    <div className='grid grid-cols-12 gap-[25px] xl:w-[1240px]  mx-auto mt-[20px]'>
        <DetailProductThumbnail className='col-span-12 md:col-span-12 xl:col-span-3' data={props.data}/>
        <DetailProductContent className='col-span-12 md:col-span-12 xl:col-span-6' data = {props.data}/>
        <DetailProductBuyInfor className='col-span-12 md:col-span-12 xl:col-span-3' data = {props.data}/>
    </div>
  </>
}

export default DetailProduct