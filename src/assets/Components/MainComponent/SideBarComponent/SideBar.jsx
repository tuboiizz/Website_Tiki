import React from 'react'
import { useState, useEffect } from 'react'
import './style.css';
import StarRating from '../StarRatingComponent/StarRating';

const SideBar = (props) => {
  
  const [suppliers , setSuppliers] = useState([]);

  useEffect( () => {
    (async () => {
      try {
        const data = await GetProductsList();
        let nameSuppliers = data.map( item => item.current_seller.name);

        var name = nameSuppliers.reduce( (arrName, currentItem) =>{
          if(!arrName.includes(currentItem)){
            arrName.push(currentItem);
          }
          return arrName;
        }, [])

        setSuppliers(name);
      } catch (error) {
        alert('An error occurred:', error);
      }
    })();
  }, [])

  return (
    <>
      <div className={props.className}>
        <div className='sidebar-container'>
          <div className='sidebar-product-wrapper'>
            <span className='sidebar-item-title'>Danh mục sản phẩm</span>
            <ul>
              <li><a href='' className = 'sb-product-item' onClick={(e) =>{onClickCategorySearch(e)}}>English Books</a></li>
              <li><a href='' className = 'sb-product-item' onClick={(e) =>{onClickCategorySearch(e)}}>Sách tiếng Việt</a></li>
              <li><a href='' className = 'sb-product-item' onClick={(e) =>{onClickCategorySearch(e)}}>Văn phòng phẩm</a></li>
              <li><a href='' className = 'sb-product-item' onClick={(e) =>{onClickCategorySearch(e)}}>Quà lưu niệm</a></li>
            </ul>
          </div>

          <div className='sidebar-supplier-wrapper'>
            <span className='sidebar-item-title'>Nhà cung cấp</span>
            
            <SupplierItems numberItem = {4} listSupplierName = {suppliers}/>

            <div className='flex items-center gap-[5px] mt-[5px]'>
              <a href="" className='sb-supplier-more'>Xem thêm</a>
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.86389 7.70957L9.84045 4.73066C10.0608 4.51035 10.417 4.51035 10.635 4.73066C10.853 4.95098 10.853 5.30723 10.635 5.52754L7.26233 8.90254C7.04905 9.11582 6.70686 9.12051 6.48655 8.91895L3.09045 5.52988C2.9803 5.41973 2.92639 5.27441 2.92639 5.13145C2.92639 4.98848 2.9803 4.84316 3.09045 4.73301C3.31077 4.5127 3.66702 4.5127 3.88499 4.73301L6.86389 7.70957Z" fill="#0B74E5"/>
              </svg>
            </div>

          </div>

          <div className='sidebar-rating-wrapper'>
            <span className='sidebar-item-title'>Đánh giá</span>
            <div className='flex flex-column gap-[10px] mt-[10px]'>
              <StarRating ratingNumber = {5} content ='từ 5 sao'/>
              <StarRating ratingNumber = {4} content ='từ 4 sao'/>
              <StarRating ratingNumber = {3} content ='từ 3 sao'/>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}


function SupplierItems(props){
  const listSuppliers = props.listSupplierName.slice(0, props.numberItem);

return <>
    <ul>
      {listSuppliers.map( (supplier, index) => {
        return <li key = {index} className='flex items-center gap-[10px] mt-[5px]'>
          <input className='sb-ckb-supplier' onClick={(e) => {onClickCheckBoxSupplier(e)}} type="checkbox" id={"supplier" + index + 1} name= {"supplier" + index + 1} value={supplier}/>
          <label htmlFor = {"supplier" + index + 1} className='sb-supplier-item'> {supplier} </label>
      </li>
      })}
    </ul>
  </>
}

function GetProductsList(){
  const apiPath = "https://86yfl7-8080.csb.app/books";

  var products = fetch(apiPath)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch JSON: ${response.statusText}`);
      }
      return response.json();
    })

  return products;
}

function onClickCategorySearch(e){
  e.preventDefault();
  const searchInput = document.querySelector("#input_value_search");

  let urlSearch = window.location.href;
  let urlParams = new URLSearchParams(window.location.search);

  urlParams.set("searchCategory", e.target.innerHTML);

  const newURL = urlSearch.split('?')[0] + '?' + urlParams.toString();

  history.pushState(null, null, newURL);

  searchInput.click();
}

function onClickCheckBoxSupplier(e){
  const searchInput = document.querySelector("#input_value_search");
  const listCheckBoxSupplier = document.querySelectorAll(".sb-ckb-supplier");
  const listSupplierValue = [];

  listCheckBoxSupplier.forEach(function(item){
    if(item.checked){
      listSupplierValue.push(item.value);
    }
  })

  let urlSearch = window.location.href;
  let urlParams = new URLSearchParams(window.location.search);

  urlParams.set('searchSupplier', JSON.stringify(listSupplierValue));

  const newURL = urlSearch.split('?')[0] + '?' + urlParams.toString();

  history.pushState(null, null, newURL);

  searchInput.click();
}
export default SideBar