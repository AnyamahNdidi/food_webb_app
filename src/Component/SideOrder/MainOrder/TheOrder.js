import React, { useState } from 'react'
import "./Orderstyle.css"
import img from "../../Middle/FoodCom/img/3.jpg"
import { Button, Input } from "antd"
import { removeFromOrder, adjustOrder } from "../../state/actionState"
import { connect } from 'react-redux'

function TheOrder({ pix, r, remove, chng }) {
  const [myQTY, setMyQTY] = useState(r.qty)
  const [count, setCount] = useState(0)

  // React.useEffect(()=>{
  //     const counter = 0;
      
  //     r.forEach(el => {
  //       counter += el.payload
  //     })
  //     setMyQTY(counter)

  // }, [r, myQTY] )

  return (
    <div>
      <div className="orderCon">
        <div className="imgdivcon">
          <img src={r.img} style={{ width: "100%", height: "100%", borderRadius: "10px" }} />
        </div>
        <div style={{
          display: "flex",
          flexDirection: "column",
          height: "80px",
          width: "240px",


        }}>
          <div style={{
            display: "flex",
            justifyContent: "space-between"
          }} >
            <div style={{
              fontWeight: "bold"
            }}>
              {r.foodtitle}
            </div>
            <div>
              {r.price}
            </div>

          </div>
          <div>
            Extra Butter

          </div>
          <div
            style={{
              display: "flex",
              width: "245px",

              justifyContent: "space-between",
            }}

          >
            <div style={{
              display: "flex",
              justifyContent: "space-between",
              width: "40px"
            }}>

              <div>
                QTY
              
              </div>

              <div>
                <Input
                  min="1"
                  type="number"
                  value={r.qty}
                  style={{
                    width: "70px",
                    marginRight: "20px",
                  }}
                  onChange={(e) => {
                    setMyQTY(e.target.value)
                    chng(r._id, e.target.value)
                  }}
                />
              </div>


            </div>
            <div>
              <Button

                style={{

                  background: "#FF8120",
                  color: "white",
                  fontWeight: "bold",
                  borderRadius: "5px"


                }}
                onClick={
                  () => {
                    remove(r._id)
                  }
                }
              >
                Remove Order
              </Button>

            </div>

          </div>


        </div>
      </div>
    </div>
  )
}

const mapDis = (dispatch) => {
  return {
    chng: (id, value) => {
      dispatch(adjustOrder(id, value))
    }
    ,
    remove: (id) => {
      dispatch(removeFromOrder(id))
    }
  }
}



export default connect(null, mapDis)(TheOrder)
