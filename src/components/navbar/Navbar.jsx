import React from 'react'

function Navbar() {
  return (
    <div id="body" className=" gap-4 grid sm:grid-cols-12  py-5 px-40">
      
            {/* --------------------------------------------------------------------- */}
            <nav className="grid sm:grid-cols-12 gap-4 border-[3.3px] shadow-2xl rounded-lg  col-span-12 min-h-[100px] items-center ">
                <div id="logo" className="col-span-3" ><a className=" bg-yellow-200 text-4xl font-bold  grid h-32 rounded-l-md justify-center iteams-center pt-[45px]" href="">BomBooWorlds</a></div>
                <div id="nav" className="col-span-6 min-h-[100px] grid grid-cols-12 gap-4 items-center pl-[10%]">
                  <a href="#" className="col-span-3 h-10 w-28 p flex justify-center text-zinc-800 rounded-full hover:bg-zinc-500 hover:text-white items-center">Home</a>
                  <a href="#" className="col-span-3 h-10 w-28 p flex justify-center text-zinc-800 rounded-full hover:bg-zinc-500 hover:text-white items-center">Collection</a>
                  <a href="#" className="col-span-3 h-10 w-28 p flex justify-center text-zinc-800 rounded-full hover:bg-zinc-500 hover:text-white items-center">About</a>
                  <a href="#" className="col-span-3 h-10 w-28 p flex justify-center text-zinc-800 rounded-full hover:bg-zinc-500 hover:text-white items-center">Contact</a>
                </div>
                <div id="right" className="grid grid-cols-3 p-12 col-span-3 min-h-[100px] items-center">
                  <div id="search" className=""><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="black"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg></a></div>
                  <div id="profile" className=""><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="black"><path d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Zm80-80h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"/></svg></a></div>
                  <div id="cart" className=""><a href="#"><svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="black"><path d="M286.79-81Q257-81 236-102.21t-21-51Q215-183 236.21-204t51-21Q317-225 338-203.79t21 51Q359-123 337.79-102t-51 21Zm400 0Q657-81 636-102.21t-21-51Q615-183 636.21-204t51-21Q717-225 738-203.79t21 51Q759-123 737.79-102t-51 21ZM235-741l110 228h288l125-228H235Zm-30-60h589.07q22.97 0 34.95 21 11.98 21-.02 42L694-495q-11 19-28.56 30.5T627-453H324l-56 104h491v60H277q-42 0-60.5-28t.5-63l64-118-152-322H51v-60h117l37 79Zm140 288h288-288Z"/></svg></a></div>
                </div>
            </nav>
            </div>
  )
}

export default Navbar