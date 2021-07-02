import React from 'react'
import LeftBar from '../LeftBar/LeftBar'
import Middlle from '../Middle/Middlle'
import SideOrder from '../SideOrder/SideOrder'
import "./MainStyle.css"

function MainCom() {
  return (
    <div className="allCom">
      <div className="sideManu">
        <LeftBar />

      </div>
      <div className="middleCon">
        <Middlle />

      </div>
      <div className="sideCom">
        <SideOrder />


      </div>
    </div>
  )
}

export default MainCom
