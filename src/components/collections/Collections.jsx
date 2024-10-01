import React from 'react'
import { useState } from 'react'
import Navbar from '../navbar/Navbar'


const data = [
  {
    img: "https://bambooworld.onrender.com/assets/img5-DM9UEI3n.jpeg",
    title: "card1",
    price: "$110",
  },
  {
    img: "https://bambooworld.onrender.com/assets/img2-C1F92Urx.jpeg",
    title: "card2",
    price: "$210",
  },
  {
    img: "https://bambooworld.onrender.com/assets/img3-C2MgUUe1.jpeg",
    title: "card3",
    price: "$310",
  },
  {
    img: "https://bambooworld.onrender.com/assets/img4-DXhUsH-P.jpeg",
    title: "card4",
    price: "$410",
  },
  {
    img: "https://bambooworld.onrender.com/assets/img6-D9lCC_Un.jpeg",
    title: "card5",
    price: "$510",
  },
];

const Collections = function() {
  return (
    <div id="body" className="gap-4 grid sm:grid-cols-12 py-5 px-40">
      <div
        id="collections"
        className="grid grid-cols-10 grid-rows-3 gap-4 border-[3.3px] shadow-2xl rounded-lg col-span-12 min-h-[60vh] p-6"
      >
        <div id="heading" className="col-span-10 row-span-1 flex-col text-center">
          <span className="flex gap-2 justify-center items-center h-[50%] w-full">
            <p className="text-4xl font-semibold">LATEST COLLECTION</p>
            <p className="bg-black h-[3px] w-12"></p>
          </span>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, vel!</p>
        </div>

        {/* Mapping through the data to generate cards */}
        {data.map((item, index) => (
          <div key={index} className="grid grid-rows-12 col-span-2 row-span-2 text-center">
            <a href="#" id="img" className="row-span-9">
              <img src={item.img} alt={item.title} className="h-full w-full object-cover" />
            </a>
            <a href="#" id="title" className="row-span-2 h-full w-full flex justify-center items-center">
              <p>{item.title}</p>
            </a>
            <a href="#" id="price" className="row-span-1 h-full w-full">
              <p>{item.price}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections