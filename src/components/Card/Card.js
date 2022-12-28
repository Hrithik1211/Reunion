import React from 'react'
import './Card.css'
import { FaBath, FaBed, FaChartArea } from 'react-icons/fa'
function Card({data}) {
  return (
    <div className={`card-container`}>
        <img className={`card-image`}  src={data.image} />
        <div className={`card-text`} >
            <span className={`card-price-text`} ><span className={`card-price`} >${data.price} </span> /month </span>
            <p className={`card-title`} >{data.title} </p>
            <p className={`card-description`} >{data.description} </p>
            <span className={`card-details`} ><span><FaBed color='blueviolet' /> {data.details.beds}Beds </span> <span><FaBath color='blueviolet' /> {data.details.bathrooms}Bathrooms </span> <span><FaChartArea color='blueviolet' /> {data.details.area}m2 </span></span>
        </div>
    </div>
  )
}

export default Card