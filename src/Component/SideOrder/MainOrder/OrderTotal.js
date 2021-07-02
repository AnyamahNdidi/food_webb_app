import React, { useState, useEffect } from 'react'
import { connect } from "react-redux"
import ButtomOrder from './ButtomOrder'
import { Button } from "antd"
import Payment from '../../Payment/Payment'



function OrderTotal({ view }) {
  const [counter, setCounter] = useState(0)
  const [subTotal, setsubTotal] = useState(0)
  const [show, setShow] = useState(false)
  const [total, setTotal] = useState(0)
  const [delivery, setDeliver] = useState(1000)

  useEffect(() => {
    let newCount = 0
    let newPrice = 0
    let delivery = 0

    view.forEach(el => {
      newCount += el.qty
      newPrice += el.price * el.qty
      delivery += el.price * el.qty + 1000
    })

    setCounter(newCount)
    setsubTotal(newPrice)
    setTotal(delivery)
  }, [counter, view, setCounter, subTotal, total,])


  console.log(total)
  return (
    <div>
      <div style={{
        display: "flex",
        flexDirection: "column"
      }}>

        <div style={{
          display: "flex",
          justifyContent: "space-between",

        }}>
          <div>
            Total meal
          </div>
          <div style={{
            fontWeight: "bold",
          }}>
            {counter}
          </div>

        </div>
        <div style={{
          display: "flex",
          justifyContent: "space-between",

        }}>
          <div>
            Sub total
          </div>
          <div style={{
            fontWeight: "bold",
          }}>
            {subTotal}
          </div>

        </div>
        <div style={{
          display: "flex",
          justifyContent: "space-between",

        }}>
          <div>
            Delivery Fee
          </div>
          <div style={{
            fontWeight: "bold",
          }}>
            {delivery}
          </div>

        </div>


      </div>
      <div style={{
        height: "3px",
        background: "white",
        margin: "5px"
      }}>

      </div>
      <div style={{
        display: "flex",
        justifyContent: "space-between",

      }}>
        <div>
          Total Fee
          </div>
        <div style={{
          fontWeight: "bold",
        }}>
          {total}
        </div>

      </div>
      <div>
        {/* <Button style={{
          width: "370px",
          background: "#FF8120",
          color: "white",
          fontWeight: "bold",
          fontSize: "20px",
          height: "50px"
        }}>
          Check Out
        </Button> */}
        <Payment totalPrice={total} />
      </div>
    </div>
  )
}
const mapOrder = (state) => {
  return {
    view: state.shop.orderList
  }
}

export default connect(mapOrder)(OrderTotal)
