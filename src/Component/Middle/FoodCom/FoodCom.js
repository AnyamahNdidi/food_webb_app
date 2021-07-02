import React from 'react'
import "./Allstyle.css"

import { Button } from "antd"
import { connect } from "react-redux"
import { HeartFilled } from "@ant-design/icons"
import { addToOrder, addOrder } from "../../state/actionState"

function FoodCom({ img, t, addOrder }) {
  return (
    <div>
      <div className="allconfood">
        <div className="imgFav">
          <div className="imgCon">
            <img src={t.img} style={{ width: "100%", height: "100%", borderRadius: "15px ", objectFit: "cover" }} />

          </div>
          <div className="conFav">
            <HeartFilled style={{
              color: "grey",
              cursor: "pointer",
              fontSize: "20px"
            }} />
          </div>
        </div>
        <div className="Buprice">
          <div style={{
            fontWeight: "bold"
          }}>
            {t.foodtitle}
          </div>
          <div
            style={{
              fontWeight: "bold"
            }}
          >
            {t.price}
          </div>

        </div>
        <div
          style={{
            marginTop: "10px"
          }}
        >
          <Button
            style={{
              background: "#FF8120",
              color: "white",
              borderRadius: "5px"
            }}

            onClick={() => {
              addOrder(t._id)
            }}
          >
            Add To Order
          </Button>


        </div>
      </div>
    </div>
  )
}

const mapDispatch = (dispatch) => {
  return {
    addOrder: (id) => {
      dispatch(addToOrder(id))
    }
  }
}

export default connect(null, mapDispatch)(FoodCom)
