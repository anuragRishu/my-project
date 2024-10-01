import React from 'react'


function Herosection() {
  function handleClick(){
    alert('You fucked Me')
  }

  return (
    <div id="body" className=" gap-4 grid sm:grid-cols-12  py-5 px-40">
            <div id="hero-section" className="grid grid-cols-12 gap-4 border-[3.3px] shadow-2xl rounded-lg col-span-12 min-h-[60vh] ">
                <div id="left" className=" px-32 col-span-7 flex flex-col items-start justify-center">
                  <span className="flex gap-2 items-center">
                    <p className="h-[1px] w-12 bg-zinc-800"></p>
                    <h1 className="text-2xl font-thin">#BombooWorld</h1>
                  </span>
                  <span className="">
                    <h1 className="  text-3xl font-bold">ONE STEP TO NATURE TODAY,<br /> WILL LEAD US TO A BETTER <br /> TOMMOROW</h1>
                  </span>
                  <span className="flex items-center gap-2 font-bold">
                    <a href="#" className=" rotate-[-8deg] h-10 w-28 p flex justify-center text-zinc-800 rounded-full hover:bg-zinc-500 hover:text-white items-center bg-yellow-300"><p>Shop Now</p></a>
                    <p className="h-[2px] w-[340px] bg-black"></p>
                  </span>
                </div>
                <div id="right" className="col-span-5 flex justify-center item">
                  <img className="h-[60vh]" src="https://bambooworld.onrender.com/assets/heroimg-4wCDT2Si.png" alt="photo" />
                </div>
            </div>

            
            </div>
  )
}

export default Herosection