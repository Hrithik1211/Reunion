import React from 'react'
import './Button.css'

function Button({title="Click Me",dark,...props}) {
  return (
    <div {...props} className={`button-container ${dark?`button-container-dark`:``}`} >
        {title}
    </div>
  )
}

export default Button