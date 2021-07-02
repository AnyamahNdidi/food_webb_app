import React, { useEffect } from 'react'
import FoodCom from './FoodCom'
import pix from "./img/1.jfif"
import pix2 from "./img/2.jfif"
import pix3 from "./img/3.jpg"
import axios from "axios"
import { useDispatch, useSelector, connect } from "react-redux"

import { addOrder } from "../../state/actionState"

function AllFoodCom({ view }) {

  const dispatch = useDispatch()
  const data = useSelector(r => r.shop)
  console.log(data)

  const getFoodProductData = async () => {
    const res = await axios.get("https://myfoodapi1.herokuapp.com/api/all")

    if (res) {
      dispatch(addOrder(res.data))
    }
  }

  useEffect(() => {
    getFoodProductData()
  }, [])




  return (
    <div>
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        marginRight: "20px"

      }}>
        {
          view.map((item) => (
            <FoodCom key={item.id} t={item} img={pix3} />
          ))
        }
        {/* <FoodCom img={pix3} />
        <FoodCom /> */}





      </div>
    </div>
  )
}

const mapState = (state) => {
  return {
    view: state.shop.foodDataBase
  }
}
export default connect(mapState)(AllFoodCom)
