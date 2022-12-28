import React, { useEffect, useState } from 'react'
import Button from '../Button/Button'
import Calendar from 'react-calendar'
import './Filter.css'
import { FaArrowDown, FaCalendar } from 'react-icons/fa'
import {City} from 'country-state-city'

let locationList = [], priceList = ["ALL", "$500 - $2500", "$2500 - $5000"],priceValueList = [{"low":0,"high":111111111111111}, {"low":500,"high":2500},{"low":2500,"high":5000}], propertyTypeList = ['ALL', 'House','Apartment','Villa','Commercial','Mall','Tower','Hotel']

locationList = ['ALL', 'Agartala', 'Ahmedpur', 'Badvel', 'Bagar', 'Bagdogra', 'Chanasma', 'Daman District', 'Dandi', 'Darbhanga', 'Ettaiyapuram', 'Firozabad', 'Gandhidham', 'Gangakher', 'Gangawati', 'Hampi', 'Handia', 'Harangul', 'Harihar', 'Jalalabad', 'Kabeerdham', 'Kakdwip', 'Kalaburgi', 'Lalgarh', 'Lalgudi', 'Lalpur', 'Madikeri', 'Madugula', 'Madurai', 'Palamu', 'Palghar', 'Rajahmundry', 'Rajaldesar', 'Sairang', 'Talode', 'Unakoti', 'Unnao', 'V.S.K.Valasai (Dindigul-Dist.)', 'Valparai', 'Warangal', 'Wardha']
function Modal({data, setValue, setFilterModal, filterModal,setPriceValue,modalValue}){
    return(
        <div className={`custom-modal`} >
            <div onClick={(e) => {e.stopPropagation()}} className={`filter-modal`} >
            {modalValue!=="Calendar"?
                data.map((val,key) => (
                    <p key={key} onClick={() => {setFilterModal(!filterModal); setValue(val); setPriceValue(priceValueList[key])  } } className={`modal-options`} >{val} </p>
                )):<Calendar  />
            }
            </div>
        </div>
    )
}
function Filter({data,setFilterData,search}) {
    const [location, setLocation] =useState("ALL")
    const [calendar, setCalendar] =useState("ALL")
    const [price, setPrice] =useState("ALL")
    const [priceValue, setPriceValue] =useState({})
    const [propertyType, setPropertyType] =useState("ALL")
    const [filterModal, setFilterModal] = useState(0)
    const [modalData, setModalData] = useState(locationList)
    const [modalValue, setModalValue] = useState()
    useEffect(() => {
        let filter = []
        data.map((val,key) => {
            if( (location=="ALL" || val.location == location) && (price == "ALL"|| (priceValue.high >= parseInt(val.price) && priceValue.low <=parseInt(val.price)) ) && (propertyType=="ALL"||propertyType==val.type) && (calendar=="ALL"||calendar) && (val['title'].toUpperCase().startsWith(search.toUpperCase())) ){
                filter.push(val)
            }
        })
        setFilterData(filter)
    },[location,calendar,price,propertyType,search])
  return (
    <div onClick={(e) => {setFilterModal(0)}} className={`col-12 filter-container`} >
        <div onClick={(e) => {setFilterModal(!filterModal);e.stopPropagation(); setModalData(locationList);setModalValue("Location") }} className={`filter-options col-md-2 col-sm-4`} ><div className={`filter-heading`} >Location</div><div className={`filter-value`} >{location} <FaArrowDown color='blueviolet'/> </div> </div>
        <div onClick={(e) => {setFilterModal(!filterModal);e.stopPropagation(); setModalData(locationList);setModalValue("Calendar") }} className={`filter-options col-md-2 col-sm-4`} ><div className={`filter-heading`} >When</div><div className={`filter-value`} >{calendar} <FaCalendar color='blueviolet'/> </div> </div>
        <div onClick={(e) => {setFilterModal(!filterModal);e.stopPropagation(); setModalData(priceList);setModalValue("Price") }} className={`filter-options col-md-2 col-sm-4`} ><div className={`filter-heading`} >Price</div><div className={`filter-value`} >{price} <FaArrowDown color='blueviolet'/> </div> </div>
        <div onClick={(e) => {setFilterModal(!filterModal);e.stopPropagation(); setModalData(propertyTypeList);setModalValue("PropertyType") }} className={`filter-options col-md-2 col-sm-4`} ><div className={`filter-heading`} >Property Type</div><div className={`filter-value`} >{propertyType} <FaArrowDown color='blueviolet'/> </div> </div>
        <div className={`filter-button`} ><Button title='Search' dark/> </div>
        {filterModal==1 && 
        <Modal data={modalData} setValue={modalValue=="Location"?setLocation:modalValue=="Calendar"?setCalendar:modalValue=="Price"?setPrice:setPropertyType} filterModal={filterModal} setFilterModal={setFilterModal} setPriceValue={modalValue=="Price"?setPriceValue:()=>{}} modalValue={modalValue} />}
    </div>
  )
}

export default Filter