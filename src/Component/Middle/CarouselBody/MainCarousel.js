import React from "react";
import { Carousel } from "antd";

import "antd/dist/antd.css";
// import Caousel from "./Caouselstyle";
import pic from '../Hero/img/3.jpg'
import pic1 from '../Hero/img/4.jpg'
import pic2 from '../Hero/img/1.jpg'
import CarouselStyle from "./CarouselStyle";


function MainCarousel() {
  const contentStyle = {
    // height: "500px",
    // color: "#fff",
    // lineHeight: "10px",
    // textAlign: "center",
    background: "#364d79",
  };

  return (
    <div>
      <Carousel autoplay effect="fade">
        <div>
          <h3 style={contentStyle}>
            <CarouselStyle
              pic={pic}
              direction="center"
              BG="#E5D304"
              title="Quench Your Hunger"
              desc="“We see an Africa where every child’s is fed and educated. An Africa where talent is nurtured and mentorship is paramount”"
              btn="GET STARTED" s
              MT="50PX"
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <CarouselStyle
              pic={pic1}
              direction="center"
              BG=""
              title="40% Fitness Meal"
              desc="“We see an Africa where every child’s is fed and educated. An Africa where talent is nurtured and mentorship is paramount”."
              btn="GET STARTED"
              MT="50PX"
            />
          </h3>
        </div>
        <div>
          <h3 style={contentStyle}>
            <CarouselStyle
              pic={pic2}
              direction="center"
              BG="#EF0303"
              title="Order One Click Away"
              desc="“We see an Africa where every child’s is fed and educated. An Africa where talent is nurtured and mentorship is paramount”"
              btn="GET STARTED"
              MT="50PX"
            />
          </h3>
        </div>
        {/* <div>
          <h3 style={contentStyle}>
            <CarouselStyle
              pic={pic3}
              direction="center"
              BG="#478E02"
              title="Pay To get your Favourite movie"
              desc="“We see an Africa where every child’s is fed and educated. An Africa where talent is nurtured and mentorship is paramount”."
              btn="GET STARTED"
              MT="50PX"
            />
          </h3>
        </div> */}
      </Carousel>
    </div>
  );
}

export default MainCarousel;