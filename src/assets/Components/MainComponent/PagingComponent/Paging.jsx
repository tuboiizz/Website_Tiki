import React from 'react'
import './style.css'
const Paging = (props) => {
  return <>
    <div className={props.className}>
    <div className="flex items-center justify-center">
        <div>
          <nav className="isolate inline-flex -space-x-px rounded-md gap-x-[20px] paging-wrapper" aria-label="Pagination">
            <a href="#"
              aria-current="page"
              className="relative z-10 inline-flex items-center text-sm font-semibold paging-item paging-active"
              onClick={ (e) =>{ onPagingClick(e);}}              
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center text-sm font-semibold text-gray-900 paging-item"
              onClick={ (e) =>{ onPagingClick(e);}}   
            >
              2
            </a>
            <a
              href="#"
              className="relative items-center text-sm font-semibold text-gray-900 inline-flex paging-item"
              onClick={ (e) =>{ onPagingClick(e);}}   
            >
              3
            </a>

            <a
              href="#"
              className="relative hidden items-center text-sm font-semibold text-gray-900 md:inline-flex paging-item"
              onClick={ (e) =>{ onPagingClick(e);}}  
              aria-disabled ="false" 
            >
              4
            </a>

            <a
              href="#"
              className="relative hidden items-center text-sm font-semibold text-gray-900 md:inline-flex paging-item"
              onClick={ (e) =>{ onPagingClick(e);}}   
            >
              5
            </a>

            <span className="relative inline-flex items-center text-sm font-semibold text-gray-700 paging-item paging-more">
              ...
            </span>
            <a
              href="#"
              className="relative  items-center text-sm font-semibold text-gray-900 inline-flex paging-item"
              onClick={ (e) =>{ onPagingClick(e);}}   
            >
              50
            </a>
          </nav>
        </div>
      </div>
    </div>
  </>
}

function onPagingClick(e){
  const pagingItems = document.querySelectorAll(".paging-item");

  for (let i = 0 ; i < pagingItems.length ; i++) {
    let item = pagingItems[i];

    if(item.classList.contains("paging-active")){
      item.classList.remove("paging-active");
    }
  }

  const currentPage = e.target;

  currentPage.classList.add("paging-active");
}

export default Paging