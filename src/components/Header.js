import React from "react";
import { useNavigate } from "react-router-dom";

function Header(){

  let navigate = useNavigate(); 

  function toGarden(){
    navigate("/Garden");
  }

  return(
    <nav className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
      <div className="sticky top-0 z-10 h-16 border border-slate-800 bg-gray-900 lg:py-2.5">
        <div className="flex items-center justify-between space-x-4 px-6 2xl:container">
          <h5 hidden className="text-2xl font-medium text-gray-600 lg:block">Habitually</h5>
          <div className="flex space-x-4 ">
            <div hidden className="md:block">
              <div className="relative flex items-center text-gray-400 focus-within:text-blue-600">
                <span className="absolute left-4 flex h-6 items-center border-r border-gray-300 pr-3">
                  <svg xmlns="http://ww50w3.org/2000/svg" className="w-4 fill-current" viewBox="0 0 35.997 36.004">
                    <path id="Icon_awesome-search" data-name="search" d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"></path>
                  </svg>
                </span>
                <input type="search" name="leadingIcon" id="leadingIcon" placeholder="Search here" className="w-full rounded-xl border border-gray-500 py-2.5 pl-14 pr-4 text-sm text-gray-600 outline-none transition focus:border-blue-300 input input-bordered" />
              </div>
            </div>
            <button aria-label="search" className="h-10 w-10 rounded-xl border bg-gray-100 focus:bg-gray-100 active:bg-gray-200 md:hidden">
              <svg xmlns="http://ww50w3.org/2000/svg" className="mx-auto w-4 fill-current text-gray-600" viewBox="0 0 35.997 36.004">
                <path id="Icon_awesome-search" data-name="search" d="M35.508,31.127l-7.01-7.01a1.686,1.686,0,0,0-1.2-.492H26.156a14.618,14.618,0,1,0-2.531,2.531V27.3a1.686,1.686,0,0,0,.492,1.2l7.01,7.01a1.681,1.681,0,0,0,2.384,0l1.99-1.99a1.7,1.7,0,0,0,.007-2.391Zm-20.883-7.5a9,9,0,1,1,9-9A8.995,8.995,0,0,1,14.625,23.625Z"></path>
              </svg>
            </button>
            <button onClick={toGarden} aria-label="notification" className="h-10 w-10 rounded-xl border border-gray-300 bg-green-900 focus:bg-gray-100 active:bg-gray-200">
              <p>G</p>
            </button> 
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;