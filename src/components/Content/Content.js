import React from 'react'
import Card from '../Card/Card'
import './Content.css'

function Content({data}) {
  return (
    <div className={`content-container col-12`} >
        {
            data.map((val,key) => (
                <div key={key} className={`col-lg-4 col-md-6 content-data `} >
                        <Card data={val} />
            
                    </div>
            ))
        }
    </div>
  )
}

export default Content