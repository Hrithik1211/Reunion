import React from 'react'
import { FaArrowDown, FaEnvelope, FaHome } from 'react-icons/fa'
import Button from '../Button/Button'
import './TitleBar.css'
function TitleBar({page, setPage}) {
  return (
    <div className={`title-bar-container`} >
        <p className={`company-name`} ><FaHome color='blueviolet' /> Estatery </p>
        <div className={`title-bar-contents`} >
            <p onClick={()=>{setPage("Rent")}} className={`title-options ${page=="Rent"?'title-options-active':''}`} >Rent </p>
            <p onClick={()=>{setPage("Buy")}} className={`title-options ${page=="Buy"?'title-options-active':''}`} >Buy </p>
            <p onClick={()=>{setPage("Sell")}} className={`title-options ${page=="Sell"?'title-options-active':''}`} >Sell </p>
            <p onClick={()=>{setPage("Manage Property")}} className={`title-options ${page=="Manage Property"?'title-options-active':''}`} >Manage Property <FaArrowDown/> </p>
            <p onClick={()=>{setPage("Resources")}} className={`title-options ${page=="Resources"?'title-options-active':''}`} >Resources <FaArrowDown/> </p>
            <div className={`title-bar-buttons`} >
                <Button title='Login' />
                <Button title='Sign up' dark />
            </div>
        </div>
    </div>
  )
}

export default TitleBar