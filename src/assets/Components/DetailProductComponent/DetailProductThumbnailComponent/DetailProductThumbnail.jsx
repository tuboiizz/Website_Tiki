import React from 'react'
import { useState , useEffect } from 'react'

const DetailProductThumbnail = (props) => {
    return <>
      <div className={props.className}>
        <div className='flex flex-col bg-white rounded-[8px]'>
          <ProductImageSlider product ={props.data}/>
          <ProductSpecialDetail/>
          <hr></hr>
          <ProductMoreSpecialDetail/>
        </div>
      </div>
    </>
}

function ProductSpecialDetail(){
  return <>
    <div className =' px-[12px] pb-[12px]'>
      <div className='pd-special-title'>
        Đặc điểm nổi bật
      </div>

      <ul className='pd-special-list'>
          <li>
            <div className="pd-special-item">
              <img className='pd-special-item__icon' src='https://s3-alpha-sig.figma.com/img/2d68/b606/0e0f398bf7622c2a1da0c832fdec6f19?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f2ih-JBn-2juZg98YvFlTnnlSy2rVlcyoOm8j02yYxP6SZrLlf7JveDUh87Ae6npllEoAuaszDBGgMgMiC7Yw-gZMJGpaMWKQRABS2JkmixYk10lUlHDlH2lIBedF~qxBJhXZLTBHRUXI7gs3-jfARonBo5pxuVmY~8Ds33F~IxJMbiQlEOTyqz0fIfECk6vqU18ig0WbaUy2KrB09MYpnoywwgaM57LuvxuKxoqk67jZmr-2FJVE78EFqqRRkmEOUd~9zWJh5C579lBsjKv5xOM6DuqRB6ewncrbbUX0eS9vj7Zl8HNBf~YATjqPUbrLL2veMcilLYsf~TsfnS2cw__'/>
              <div className='pd-special-item__content'> Kích thước lớn và bìa cứng, tạo cảm giác sang trọng và bền bỉ.</div>
            </div>
          </li>
          <li>
            <div className="pd-special-item">
              <img className='pd-special-item__icon' src='https://s3-alpha-sig.figma.com/img/2d68/b606/0e0f398bf7622c2a1da0c832fdec6f19?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f2ih-JBn-2juZg98YvFlTnnlSy2rVlcyoOm8j02yYxP6SZrLlf7JveDUh87Ae6npllEoAuaszDBGgMgMiC7Yw-gZMJGpaMWKQRABS2JkmixYk10lUlHDlH2lIBedF~qxBJhXZLTBHRUXI7gs3-jfARonBo5pxuVmY~8Ds33F~IxJMbiQlEOTyqz0fIfECk6vqU18ig0WbaUy2KrB09MYpnoywwgaM57LuvxuKxoqk67jZmr-2FJVE78EFqqRRkmEOUd~9zWJh5C579lBsjKv5xOM6DuqRB6ewncrbbUX0eS9vj7Zl8HNBf~YATjqPUbrLL2veMcilLYsf~TsfnS2cw__'/>
              <div className='pd-special-item__content'>Hình vẽ ngộ nghĩnh và màu sắc sống động, thu hút sự chú ý của trẻ em.</div>
            </div>
          </li>
          <li>
          <div className="pd-special-item">
              <img className='pd-special-item__icon' src='https://s3-alpha-sig.figma.com/img/2d68/b606/0e0f398bf7622c2a1da0c832fdec6f19?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=f2ih-JBn-2juZg98YvFlTnnlSy2rVlcyoOm8j02yYxP6SZrLlf7JveDUh87Ae6npllEoAuaszDBGgMgMiC7Yw-gZMJGpaMWKQRABS2JkmixYk10lUlHDlH2lIBedF~qxBJhXZLTBHRUXI7gs3-jfARonBo5pxuVmY~8Ds33F~IxJMbiQlEOTyqz0fIfECk6vqU18ig0WbaUy2KrB09MYpnoywwgaM57LuvxuKxoqk67jZmr-2FJVE78EFqqRRkmEOUd~9zWJh5C579lBsjKv5xOM6DuqRB6ewncrbbUX0eS9vj7Zl8HNBf~YATjqPUbrLL2veMcilLYsf~TsfnS2cw__'/>
              <div className='pd-special-item__content'>Cung cấp thông tin tổng quát về diện tích, dân số và ngôn ngữ của các quốc gia.</div>
            </div>
          </li>
        </ul>
    </div>
  </>
}

function ProductMoreSpecialDetail(){
  return <>
    <div className='flex justify-between items-center mt-[10px] px-[12px] pb-[12px]'>
      <div className='pd-special-more'>
        <img className='pd-special-more__icon' src='https://s3-alpha-sig.figma.com/img/9c38/d62c/74de8a849faa243a350a9eff83ad1ef6?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pKukFnwAIptYKGe3~ApinLNoPOmhyo2i-VSAnav6xhAh8HRIGCeOTqw8NiqpSE4xQgMDPxQRdwn9D6XR0bwwuhuxqYtaq7qTt06Y3E0dLtAwebdGxp9TUSBnOO20Yn9WnxCglMQskHNiEx-ZrhfxiQQKYT-oMiMmthzwpgDHn6NtJps5dB8-KwHqo-pEickaVXoFHvJdh8keVn-kSDcs2CkiqK2Mlsown2CReyb5fsV2kdGT8fm1jZ6qmwk6e10Lq8ynHpOfYBrShZzZDH0U7kqmjm49uaC0IQVz3LUAJv8C3Buz8fDOY9ChJ1cRoMOjfXEVNJg6CVyFyBkYbXjOrw__'/>

        <div className='pd-special-more__text'>
          <span>Xem thêm</span> Tóm tắt nội dung sách
        </div>
      </div>

      <img className='pd-special-more__arrow' src='https://s3-alpha-sig.figma.com/img/b105/72b4/2a2e3f80b524d365000d30c717ec9e9b?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nDZuBtuI~3oUZI5aSHo2oz~pIjwbqzfFtq6wIHJRW73w7-c828HVAVwvmO11xLApTzuxD3s83M5PwKXGHUQtadNifcl8Qyot9fWk3HOG2to1Rzir2mJmwRAGJMbcZY2UfRcwZqTz4lcsRpGo0VMTw~TZsshPxwSC7GhDdBoKLdvKBUun152LgfMmA7O745MgT59TFSi71WQvtM0Lz1j-0Jk1WEh7Gk6hyCYemmUhhedfbryqmKTuVrOYrUs8pD95GilBy38ARTm1JLsbQIllTLp0GV2L-3heo6UcSJLR0vag4R6geVBCQPZY7SOwc9Irxj-M7SqUdtDlXRgjFI5H5A__'/>
    </div>
  </>
}

function ProductImageSlider(props){
  const imagesLarge = props.product.images.map(image =>{
    return image.large_url;
  })

  const imagesSmall = props.product.images.map(image =>{
    return image.small_url;
  })
    return <>
      <div className='carousel slide carousel-wrapper' id ='carousel_product_detail' data-bs-wrap="false">
        <div className='carousel-inner md:!h-[100%] xl:!h-[370px]'>
          {
            imagesLarge.map((image, index) => {
              return <ProductImageSliderItem className={index == 0 ? "carousel-item active" : "carousel-item"} imagePath = {image} imageAlt ='' key = {index}/>
            })
          }

          <button className='carousel-control-prev' type='button' data-bs-target = "#carousel_product_detail" data-bs-slide='prev'>
            <span className="carousel-control-prev-icon"></span>
          </button>

          <button className="carousel-control-next" type="button" data-bs-target = "#carousel_product_detail" data-bs-slide='next'>
          <span className="carousel-control-next-icon"></span>
          </button>
        </div>

        <div className='carousel-indicators carousel-sub-img-wrapper'>
          {
            imagesSmall.map((image, index) => {
              return <ProductSubImageSliderItem className="" imagePath = {image} imageAlt ='' key = {index} isActive = {index == 0 ? true: false} slideTo = {index} />
            })
          }
      </div>
        </div>
      
    </>
}

function ProductImageSliderItem(props){
  return <>
    <div className={props.className}>
      
      <img src={props.imagePath} alt ={props.imageAlt} className='carousel-item-img'/>
      
    </div>
  </>
}

function ProductSubImageSliderItem(props){
  return <>
    <div className={props.className}>
      <button 
        type='button' 
        className={props.isActive ? 'active btn-sub-image-slider': 'btn-sub-image-slider'} 
        data-bs-target="#carousel_product_detail" 
        data-bs-slide-to= {props.slideTo}
        >
          <img src={props.imagePath} alt ={props.imageAlt} className='carousel-sub-item-img'/>
      </button>
    </div>
  </>
}

export default DetailProductThumbnail