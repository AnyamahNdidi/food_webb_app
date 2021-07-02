import React from 'react'
import { Carousel } from "antd";
import Hero from './Hero';
import img from "./img/3.jpg"
import 'antd/dist/antd.css';





function MainHero({ pic }) {

  const contentStyle = {
    // height: "500px",
    // color: "#fff",
    // lineHeight: "10px",
    // textAlign: "center",
    background: "#364d79",
  }
  return (
    <>
      <Carousel autoplay effect="fade">
        <div>
          <h3 style={contentStyle}>
            <Hero pic={img} />
          </h3>
        </div>

      </Carousel>

    </ >
  )
}

export default MainHero
