// import React from "react";

// import Lottie from "lottie-react"; 
// import loaderAnimation from "../assets/Recrumeta-2loader.json"; 

// function Load() {
  
//   return (
//     <div className="w-screen h-screen flex justify-center items-center overflow-hidden">
//       <Lottie
//         animationData={loaderAnimation} 
//         loop={true}
        
//         style={{width:"1080", height:"1080" }}
//       />
//     </div>
//   );
// }

import React from "react";

function Load() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-gradient-to-tr from-[#f7ae87] via-[#e4c4b0] to-[#ffffff] animate-gradient">
      
      
      {/* Catchy animated text */}
      <p className="mt-8 text-white font-bold text-xl tracking-wider animate-bounce">
        <svg
  width="600"
  height="180"
  viewBox="0 0 600 150"
  xmlns="http://www.w3.org/2000/svg"
>
  <text
    x="50%"
    y="50%"
    textAnchor="middle"
    alignmentBaseline="middle"
    fontFamily="sans-serif"
    fontWeight="bold"
    fontSize="90"
    fill="#000"
  >
    Swift
    <tspan fill="#E65F2B">Hire</tspan>
  </text>
</svg>

      </p>
    </div>
  );
}

export default Load;
