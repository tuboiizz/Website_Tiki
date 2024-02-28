import React, { useEffect, useState } from 'react'
import './style.css'


const ShoppingCart = (props) => {
  
  const [currentCart, setCurrentCart] = useState(()=>{
    const listCurrentCart = localStorage.getItem("currentCart");

    return JSON.parse(listCurrentCart);
  })

  useEffect(()=>{
    onSetPriceInfor(currentCart);
  },[])

  console.log(currentCart);
  return <>
    {
      currentCart == null ?
      <h1 className='flex shopping-cart-infor'>Không có sản phẩm nào trong giỏ hàng</h1> :

      <section className="h-100 h-custom">
        <div className="container h-100 py-5">
          <div className="grid grid-cols-12">
            <div className="table-responsive col-span-8 cart-infor-wrapper">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col" className="h5">Giỏ hàng của bạn</th>
                    <th scope="col" className='text-center'>Loại sản phẩm</th>
                    <th scope="col" className='text-center'>Số lượng</th>
                    <th scope="col" className='text-center'>Giá</th>
                  </tr>
                </thead>
                <tbody>
                  {currentCart.map((item,index)=>{
                    return <ShoppingCartItem data={item} key={index}/>
                  })}
                </tbody>
              </table>
            </div>
            <div className="col-span-4 ml-[20px] " style={{borderRadius: '16px'}}>
              <div className=" p-4" style={{border: "1px solid #cccccc", borderRadius: '10px'}}>
                
                  <div className="d-flex justify-content-between" style={{fontWeight: '500'}}>
                    <p className="mb-2">Subtotal</p>
                    <p className="mb-2" id = "subtotal">23.49</p>
                  </div>

                  <div className="d-flex justify-content-between" style={{fontWeight: '500'}}>
                    <p className="mb-0">Shipping</p>
                    <p className="mb-0" id ="shippingPrice">20.000 đ</p>
                  </div>

                  <hr className="my-4"/>

                  <div className="d-flex justify-content-between mb-4" style={{fontWeight: '500'}}>
                    <p className="mb-2">Total (tax included)</p>
                    <p className="mb-2" id='total'>26.48</p>
                  </div>

                  <button onClick={(e)=>{onCheckOutClick(e)}} type="button" className="btn btn-primary btn-block btn-lg flex justify-center " style={{backgroundColor: "#0d6efd", width: "100%", textAlign: "center"}}>
                    <div className="d-flex justify-content-between">
                      <span>Checkout</span>
                    </div>
                  </button>
              </div>
            </div>
          </div>
        </div>    
      </section>
    }
  </>
}

function onSetPriceInfor(currentCart){
  if(currentCart != null){
    let totalSubMoney = 0;
    const subtotal = document.getElementById("subtotal");
    const total = document.getElementById("total");
    const shippingPrice = document.getElementById("shippingPrice");

    currentCart.forEach(function(item){
      console.log(item.quantityBuy );
      console.log(item.current_seller.price);
      totalSubMoney += item.quantityBuy * item.current_seller.price;
      console.log(totalSubMoney);
    })

    subtotal.innerHTML = numberWithCommas(Math.floor(totalSubMoney))+ " đ";
    total.innerHTML = numberWithCommas(Math.floor(totalSubMoney+ parseInt(shippingPrice.innerHTML.replace(".","")))) + " đ";
  }
}


function onCheckOutClick(e){
  alert("Checkout was successful")
  localStorage.clear();
  window.location.reload();
}

function ShoppingCartItem({data}){
    return <>
    <tr>
        <th scope="row">
        <div className="d-flex align-items-center">
            <img src={data.images[0].medium_url} className="img-fluid rounded-3" style={{width: '120px'}} alt=""/>
            <div className="flex-column ms-4">
            <p className="mb-2 min-w-[200px]">{data.name}</p>
            </div>
        </div>
        </th>
        <td className="align-middle min-w-[150px] text-center">
            <p className="mb-0" style={{fontWeight: '500'}}>{data.categories.name}</p>
        </td>
        <td className="align-middle min-w-[150px]">
            <div className="d-flex flex-row justify-center">
                <button className="btn btn-link px-2 btn-decrease-cart "
                    onClick={(e) => {onDecreaseQuantityCart(e);}}
                >
                <svg width="12" height="2" viewBox="0 0 12 2" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.834 1.83399H6.83899H5.16099H0.166992V0.166992H5.16099H11.834V1.83399Z" fill="#787878"/>
                </svg>
                </button>

                <input id="quantity" min="0" name="quantity" type="number" value={data.quantityBuy} readOnly="readOnly"
                    className="form-control form-control-sm input-shopping-cart" style={{width: '50px', textAlign: "center"}} />

                <button className="btn btn-link px-2 btn-increase-cart"
                    onClick={(e) => {onIncreaseQuantityCart(e);}}
                >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.834 6.82199H6.83899V11.834H5.16099V6.82199H0.166992V5.17799H5.16099V0.166992H6.83899V5.17799H11.834V6.82199Z" fill="#787878"/>
                    </svg>
                </button>
            </div>
            <div className='price-per-product hidden'>{data.current_seller.price}</div>
        </td>
        <td className="align-middle min-w-[150px] text-center">
            <p className="mb-0 totalPriceProduct" style={{fontWeight: '500'}}>{numberWithCommas(data.current_seller.price*data.quantityBuy)}</p>
        </td>
    </tr>
    </>
}

function onDecreaseQuantityCart(e){
    let parentNode = null;
    let element = e.target;
    let inputQuantityElement = null;
    
    do{
        parentNode = element.parentNode;

        inputQuantityElement = parentNode.querySelector('input');

        element = parentNode;
    }
    while(inputQuantityElement == null);

    let inputValue = inputQuantityElement.value;

    if(inputValue <= 1){
        var classListOfButtonDecrease = e.target.classList;
    
        if(!classListOfButtonDecrease.contains("disabled")){
            e.target.classList.add("disabled");
        }
    
        return;
    }

    inputQuantityElement.value = parseInt(inputValue) - 1;

    let trElement = parentNode.closest("tr");
    let tdElement = trElement.lastElementChild;
    let pricePerProductElement = trElement.querySelector(".price-per-product");
    let totalPriceElement = tdElement.querySelector("p");
    
    totalPriceElement.innerHTML = numberWithCommas(parseFloat(pricePerProductElement.innerHTML) * inputQuantityElement.value);

    GetTotalInvoice();
}

function onIncreaseQuantityCart(e){
    let parentNode = null;
    let element = e.target;
    let inputQuantityElement = null;
    
    do{
        parentNode = element.parentNode;

        inputQuantityElement = parentNode.querySelector('input');

        element = parentNode;
    }
    while(inputQuantityElement == null);

    let btnDecrease = parentNode.querySelector(".btn-decrease-cart");
    let inputValue = inputQuantityElement.value;
  
    if(btnDecrease.classList.contains("disabled")) {
        btnDecrease.classList.remove("disabled");
    }
  
    inputQuantityElement.value = parseInt(inputValue) + 1;

    let trElement = parentNode.closest("tr");
    let tdElement = trElement.lastElementChild;
    let pricePerProductElement = trElement.querySelector(".price-per-product");
    let totalPriceElement = tdElement.querySelector("p");
    
    totalPriceElement.innerHTML = numberWithCommas(parseFloat(pricePerProductElement.innerHTML) * inputQuantityElement.value);
    GetTotalInvoice();
  }


function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function GetTotalInvoice(){
  const listTotalPrice = document.querySelectorAll(".totalPriceProduct");
  let totalPrices = 0;
  listTotalPrice.forEach(function(item){
    totalPrices += parseFloat(item.innerHTML);
  })

  const subTotal = document.getElementById("subtotal");
  const shippingPrice = document.getElementById("shippingPrice");
  const total = document.getElementById("total");

  const totalValue = totalPrices + parseFloat( shippingPrice.innerHTML)

  subTotal.innerHTML = numberWithCommas(totalPrices.toFixed(2)) + " đ";
 
  total.innerHTML = numberWithCommas(totalValue.toFixed(2)) + " đ";
}
export default ShoppingCart