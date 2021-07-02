import React from 'react'
import TheOrder from './TheOrder'
import img1 from "../../Middle/FoodCom/img/1.jfif"
import img2 from "../../Middle/FoodCom/img/3.jpg"
import img3 from "../../Middle/FoodCom/img/2.jfif"
import { connect, useDispatch, useSelector } from 'react-redux'
import "./MainOderstyle.css"

function MainOrder({ order }) {
  return (
    <>
      <div


        className="mainorderCon"



      >

        {
          order.map((item) => (
            <TheOrder pix={img3} key={item._id} r={item} />
          ))
        }


      </div>
    </ >
  )
}

const mapStateOrderList = (state) => {
  return {
    order: state.shop.orderList
  }
}

export default connect(mapStateOrderList)(MainOrder)
