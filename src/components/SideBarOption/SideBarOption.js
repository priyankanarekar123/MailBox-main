import React from 'react'
import './sidebaroption.css'

const SideBarOption = ({Icon,title,number,isactive}) => {
  return (
    <div className={`sidebaroption ${isactive && 'sidebaroption--active'}`}>
       <Icon/>
       <h4>{title}</h4>
      <b><p>{number}</p></b>
    </div>
  )
}

export default SideBarOption
