import React from 'react'

function Address() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",

    }}>
      <br />
      <div>
        Delivery Address
      </div>
      <div style={{
        display: "flex",
        justifyContent: "space-between"
      }}>
        <div style={{
          fontWeight: "bold",
          fontSize: "20px"
        }}>
          873 miles Ring Road
        </div>
        <div>
          icon
        </div>

      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "150px"
        }}
      >
        <div>
          656 Miles
        </div>
        <div>
          30 mins
        </div>

      </div>


    </div >
  )
}

export default Address
