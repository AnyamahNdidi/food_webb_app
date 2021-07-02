import React from 'react'
import Address from './Address'
import ButtomOrder from './MainOrder/ButtomOrder'
import MainOrder from './MainOrder/MainOrder'
import OrderTotal from './MainOrder/OrderTotal'

function SideOrder() {
  return (
    <div>
      <div style={{
        display: "flex",
        flexDirection: "column"

      }}>
        <div style={{
          fontWeight: "bold",
          fontSize: "18px"
        }}>
          My Order
         </div>
        <div>
          <Address />

        </div>
        <br />

        <div>
          <MainOrder />
        </div>
        <br />
        <div>
          <OrderTotal />
        </div>



        <div>

        </div>
      </div>
    </div >
  )
}

export default SideOrder
