import React from 'react'
import SearchMenu from './SearchMenu/SearchMenu'
import "./middlestyle.css"
import 'antd/dist/antd.css';
// import Hero from './Hero/Hero'
// import MainCom from '../MainCom/MainCom'
import MainHero from './Hero/MainHero'
import MainCarousel from './CarouselBody/MainCarousel';
import AllFoodCom from './FoodCom/AllFoodCom';

function Middlle() {
  return (
    <div className="allmiddle">
      <SearchMenu />
      <br />
      <br />
      <div
        className="maincaro"
      >
        <MainCarousel />

      </div>
      <br />
      <div>
        <AllFoodCom />

      </div>




    </div>
  )
}

export default Middlle
