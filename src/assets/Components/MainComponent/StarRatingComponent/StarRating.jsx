import React from 'react'
import './style.scss'
const StarRating = (props) => {
  return <>
    <div className={"Stars"} style = {{"--rating" : props.ratingNumber ?? 5}}  aria-label="Rating of this product is 2.3 out of 5.">
        <span>{props.content ?? ''}</span>
    </div>
  </>
}

export default StarRating