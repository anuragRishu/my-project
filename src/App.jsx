import { useState } from 'react'
import Spline from '@splinetool/react-spline';
import Navbar from './components/navbar/Navbar'
import HeroSection from './components/heroSection/HeroSection';
import Collections from './components/collections/Collections';



function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="">
    
            
        <Navbar/>  {/* -----------navbar------------ */}
{/*         <Spline className="h-10 w-12" scene="https://prod.spline.design/cfeQ2qffB9GGFHBb/scene.splinecode" /> */}
            
        <HeroSection/>   {/* ----------heroSection ------------ */}
            
        <Collections/>    {/* ------------collections------------ */}

            <div id="body" className=" gap-4 grid sm:grid-cols-12  py-5 px-40">
            <div id="cards" className="grid grid-cols-12 gap-2 border-[3.3px] shadow-2xl rounded-lg col-span-12 min-h-[70vh] ">
                <div id="top" className="grid grid-cols-12 gap-4 col-span-12 min-h-[60%] bg-red-500 ">
                    <div id="card1" className="col-span-4 bg-red-800"></div>
                    <div id="card2" className="col-span-4 bg-red-800"></div>
                    <div id="card3" className="col-span-4 bg-red-800"></div>
                </div>
                <div id="bottom" className="flex flex-col gap-4 col-span-12 min-h-[40%] items-center ">
                    <h1 className=" p-10 bg-green-500 w-full text-center">buy now & get 10% off</h1>
                    <p className="bg-red-500 w-full text-center p-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci enim nemo dolore fuga aliquid inventore a dolorum. Ipsa natus ipsum, totam hic repellendus sit repellat?</p>
                    <input type="text" className="col-span-12 p-8 w-[60%] max-h-[1%] border-2 rounded-[50px] text-[20px]" placeholder="search here"/>
                </div>
            </div>
            </div>
            {/* -------------------------------------------------------------------- */}
            <div id="body" className=" gap-4 grid sm:grid-cols-12  py-5 px-40">
            <div id="footer" className="bg-green-600 grid grid-cols-12 gap-4 border-[3.3px] shadow-2xl rounded-lg col-span-12 min-h-[40vh] ">
                  <div id="left" className=" col-span-4  bg-red-500"></div>
                  <div id="center" className=" col-span-4  bg-red-500"></div>
                  <div id="right" className=" col-span-4  bg-red-500"></div>
                  
            </div>
            </div>
            {/* -------------------------------------------------------------------- */}
            <div id="body" className=" gap-4 grid sm:grid-cols-12  py-5 px-40">
            <div className="h-[5vh] col-span-12 bg-red-400"></div>
            </div>
    </div>
  )
}

export default App
