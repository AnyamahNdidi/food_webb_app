import React from 'react'
import { Button } from "antd"

function ButtomOrder() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column"
    }}>
      <div style={{
        display: "flex",
        justifyContent: "space-between",


      }}>
        <div>
          Total Price
          </div>
        <div style={{
          fontWeight: "bold",
        }}>
          #500
          </div>


      </div>
      <div>
        <Button style={{
          width: "370px",
          background: "#FF8120",
          color: "white",
          fontWeight: "bold",
          fontSize: "20px",
          height: "50px"
        }}>
          Check Out
        </Button>
      </div>
    </div>
  )
}

export default ButtomOrder
