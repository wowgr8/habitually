import React from 'react';
import image from '../img/gardenV1.jpeg'

//const gardenPic = new URL('../img/gardenV1.jpeg', import.meta.url)

function Garden() {
  return (
  <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] rounded">
    <div className="px-6 pt-6 2xl:container rounded">
      <div className="">
        <div className="hero min-h-screen " style={{ backgroundImage:`url(${image})`}}>

        </div>
      </div>
    </div>
  </div>





  )
}

export default Garden