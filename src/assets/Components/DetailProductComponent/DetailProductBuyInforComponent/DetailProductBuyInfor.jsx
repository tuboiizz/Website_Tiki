import { stringify } from 'postcss';
import React from 'react'

const DetailProductBuyInfor = (props) => {
  const sellPrice = props.data.current_seller.price ?? 0;

  return <>
    <div className = {props.className}>
      <div className="p-[20px] bg-white rounded-[8px] flex flex-col gap-[8px] justify-start">
        <div className="pd-buy-infor__title">
          Số lượng
        </div>

        <div className="pd-buy-infor__quantity">
          <button id="btn-decrease-id" className="btn-decrease-quantity btn-quantity" type='button' onClick={(e) => {onClickDecreaseQuantity(e, sellPrice)}} > 
            <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.834 1.83399H6.83899H5.16099H0.166992V0.166992H5.16099H11.834V1.83399Z" fill="#787878"/>
            </svg>
          </button>
          <input id="input-quantity" className="input-buy-quantity" type="text" value={1} onChange={() =>{}}/>
          <button id = "btn-increase-id" className="btn-inscrease-quantity btn-quantity"type='button' onClick ={(e)=>{onClickIncreaseQuantity(e, sellPrice)}}>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.834 6.82199H6.83899V11.834H5.16099V6.82199H0.166992V5.17799H5.16099V0.166992H6.83899V5.17799H11.834V6.82199Z" fill="#787878"/>
            </svg>
          </button>
        </div>

        <div className="pd-buy-infor__temporary">
          Tạm tính
        </div>

        <div className='pd-buy-infor__price'>
          <span id="total-price-id">{numberWithCommas(sellPrice)}</span>
        </div>

        <div className='pd-buy-infor__func-wrapper'>
          <button className="btn-buy btn-quantity-func"type='button'> Mua ngay </button>
          <button className="btn-add-cart btn-quantity-func"type='button' onClick={(e) =>{onClickAddToCart(e, props)}}> Thêm vào giỏ hàng </button>
          <button className="btn-buy-first-pay-later btn-quantity-func"type='button'> Mua trước trả sau </button>
        </div>  
      </div>
    </div>   
  </>
}

function onClickAddToCart(e , props){
  var currentCart = localStorage.getItem("currentCart");
  const inputQuantity = document.getElementById("input-quantity");

  const data = {...props.data, quantityBuy: parseInt(inputQuantity.value)}

  if(currentCart == null){
    let listCurrentCart = [data];

    localStorage.setItem("currentCart", JSON.stringify(listCurrentCart));

    onSetForIconCart(1);
  }
  else{
    const listCurrentCart = JSON.parse(currentCart);

    var existProduct = listCurrentCart.find(item => item.id == data.id);
    
    if(existProduct != null){
      existProduct.quantityBuy = existProduct.quantityBuy + parseInt(inputQuantity.value);

      const listItemWithoutExistProduct = listCurrentCart.filter(product => product.id != existProduct.id);

      const newListCurrentCart = [...listItemWithoutExistProduct, existProduct];

      localStorage.setItem("currentCart", JSON.stringify(newListCurrentCart));

      onSetForIconCart(listCurrentCart.length)
    }
    else{
      localStorage.setItem("currentCart", JSON.stringify([...listCurrentCart, data]));

      onSetForIconCart(listCurrentCart.length + 1)
    }

    
  }

}

function onSetForIconCart(number){
  const cartIconElement = document.getElementById("control-icon-cart");

  if(number >= 9){
    localStorage.setItem("numberProducts", "9+")
    cartIconElement.innerHTML = "9+"
  }
  else{
    localStorage.setItem("numberProducts", number)
    cartIconElement.innerHTML = number;
  }
  
}

function onClickDecreaseQuantity(e, price){

  let inputQuantity = document.querySelector("#input-quantity");
  let buttonDecrease = e.target;
  let currentValue = parseInt(inputQuantity.value);
  let totalPrice = document.querySelector("#total-price-id");

  if(currentValue <= 1){
    var classListOfButtonDecrease = buttonDecrease.classList;

    if(!classListOfButtonDecrease.contains("disabled")){
      buttonDecrease.classList.add("disabled");
    }

    return;
  }
  inputQuantity.value = currentValue - 1;
  totalPrice.innerHTML = numberWithCommas(price * inputQuantity.value);
}

function onClickIncreaseQuantity(e, price){
  let inputQuantity = document.querySelector("#input-quantity");
  let buttonDecrease = document.querySelector("#btn-decrease-id");
  let currentValue = parseInt(inputQuantity.value);
  let totalPrice = document.querySelector("#total-price-id");

  if(buttonDecrease.classList.contains("disabled")) {
    buttonDecrease.classList.remove("disabled");
  }

  inputQuantity.value = currentValue + 1;
  totalPrice.innerHTML = numberWithCommas(price * inputQuantity.value);
}


function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

export default DetailProductBuyInfor