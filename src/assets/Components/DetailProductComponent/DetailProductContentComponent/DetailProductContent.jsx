import React from 'react'
import StarRating from '../../MainComponent/StarRatingComponent/StarRating'
import './style.css'
const DetailProductContent = (props) =>{
  return <>
    <div className= {props.className}>
        <div className="detail-product-content p-[16px] bg-white rounded-[8px]">
          <ProductDetailInformation className ='' data = {props.data}/>
          <ProductDetailDescription className ='' data = {props.data} />
        </div>

        <div>
          <ProductDetailContent className='' data ={props.data}/>
        </div>
    </div>
  </>
}

function ProductDetailContent(props){
  return <>
    <div className={props.className}>
      <div className="bg-white p-[20px] my-[20px] rounded-[8px]">
        <div className="pd-content-title">
          Mô tả sản phẩm
        </div>

        <div dangerouslySetInnerHTML={{ __html: props.data.description }} />
      </div>
    </div>
  </>
}

function ProductDetailInformation(props){
  const authors = props.data.authors == null ? null : props.data.authors;
  const ratingAverage = props.data.rating_average == 0 || props.data.rating_average == null ? "" : props.data.rating_average;
  const isVisibleRating = ratingAverage != "";
  const quantitySold = props.data.quantity_sold;
  const sellPrice = props.data.current_seller.price ?? 0;
  const originPrice = props.data.original_price ?? 0;
  const discountNumber = Math.floor((originPrice - sellPrice) * 100 / originPrice);

  return <>
    <div className={props.className}>
      <div className='pd-information-wrapper'>
        <div className="pd-information-first">

          <div className ='flex gap-[10px] items-center'>
            <img src='https://s3-alpha-sig.figma.com/img/3787/ee15/f5fc9524f060e2540605302d3aa5a90f?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HWOhU05VlOFOu40ZVQ79rH20uJBSAi~0TsWoLqMGZRfReQRV1Dv9TTsN8hIh4Xb-5thTSPgf58Lced-pRPcFRQ8mVLp16R2MM6DWXEQKjaQoSHNwhoMBZ2rxI0kPkYkAaCR9ND6we3367P8ri~yAiNRxDHZ5gn7deeR8l-vnprZYGDDLO2~zfXRtz6rc3AvSEekCAWk~CILWPLNplXs4DaJbvhcY2lx~cnEXob9u9dkK1R2D~kLqlPWOGPGRUHvG9You7~2zEahWmfw2SggxHUblvMlI4fnHsk6k7tRsmRePQW4AYnP4PcVM0yO2ChSBX996SUNYFDmQTb5XH8hq~w__' className='pd-authentic__icon'/>
            <div className='flex items-center'>
              <span className='pd-author-title'>{authors == null ? "" : "Tác giả"}</span>
              <ul className="pd-author-list">
                {authors == null ? "" : props.data.authors.map( (author, index) => {
                  return <li key ={index}>
                    <a href={"/authorInfor/" + author.slug}>{author.name}</a>
                  </li>
                })}
              </ul>
            </div>
          </div>

          <div className="pd-infor__name">{props.data.name}</div>

          <div className='flex items-center gap-x-[15px]'>
            <div className='flex items-center gap-x-[5px]'>
              <div className={`pd-infor__rating-average ${ isVisibleRating ? "" : " hidden" }`}>{ratingAverage}</div>
              <div className={`pd-infor__rating-star ${ isVisibleRating ? "" : " hidden" }`}>
                <StarRating ratingNumber = {ratingAverage}></StarRating>
              </div>
              <div className={`pd-infor__number-rating ${quantitySold != null ? "" : " hidden"}`}>
                {quantitySold == null ? "" : quantitySold.value}
              </div>
            </div>
            <div className={`pd-infor__number-sold ${quantitySold != null ? "" : " hidden"}`}>
              {quantitySold == null ? "" : quantitySold.text}
            </div>
          </div>

          <div className='flex items-center gap-[25px]'>
            <div className='pd-infor__price'>{numberWithCommas(sellPrice)}</div>
            <div className= {`pd-infor__discount ${discountNumber == 0 ? " hidden" : ""}`} >
              {`-${discountNumber}%`}
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
}

function ProductDetailDescription(props){
  const specifications = props.data.specifications;

  return <>
    <div className={props.className}>
      {
        specifications == null ? "" : specifications.map((spec, index) =>{
          let attributes = spec.attributes;
          
          return <div key = {index} className='pd-description-wrapper mt-[20px]'>
              <div className='pd-des__title'>
                {spec.name}
              </div>
      
              <div className='flex flex-col'>
                {
                  attributes == null? "" : attributes.map((attribute, index) =>{
                    return <DescriptionItem key ={index} desName={attribute.name} desValue={attribute.value}></DescriptionItem>
                  })
                }
              </div>
            </div>
        })
      }
    </div>
  </>
}

function DescriptionItem(props){
  return <>
    <div className="pd-des__item grid grid-cols-2 ">
      <div className="pd-des__item-name">{props.desName}</div>
      <div className="pd-des__item-value" dangerouslySetInnerHTML={{  __html: props.desValue,}}></div>
    </div>
  </>
}

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export default DetailProductContent