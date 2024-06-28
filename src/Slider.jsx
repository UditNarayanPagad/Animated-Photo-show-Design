import React, { useState } from "react";

const Slider = () => {

  let arr = [
    {
      pic: "https://5.imimg.com/data5/SELLER/Default/2023/3/TF/BK/UW/103578143/3d-nature-wallpaper-500x500.jpg",
      text: "Sea beach",
      text2: "Dazzling hues, painted skies, tranquil reflections, natural art.",
    },
    {
      pic: "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg?size=626&ext=jpg&ga=GA1.1.702002920.1710075982&semt=ais",
      text: "Mountains",
      text2: "Majestic peaks, rugged terrain, breathtaking vistas.",
    },
    {
      pic: "https://img.freepik.com/free-vector/gradient-landscape-with-river_23-2149113449.jpg?size=626&ext=jpg&ga=GA1.1.702002920.1710075982&semt=ais",
      text: "Sun rise",
      text2: "Endless horizons, rhythmic waves, diverse life, soothing sounds, deep mysteries.",
    },
    {
      pic: "https://img.freepik.com/free-photo/futuristic-moon-background_23-2150930692.jpg?size=626&ext=jpg&ga=GA1.1.702002920.1710075982&semt=ais",
      text: "Sun set",
      text2: "Verdant canopy, rustling leaves, earthy scents, teeming wildlife.",
    },
    {
      pic: "https://img.freepik.com/free-photo/digital-art-moon-wallpaper_23-2150918875.jpg?size=626&ext=jpg&ga=GA1.1.702002920.1710075982&semt=ais",
      text: "Moon",
      text2: "Vibrant blooms, delicate petals, sweet fragrances, intricate beauty.",
    },
  ];
  const [currIndex, setcurrIndex] = useState(0);
  function fullImage(index) {
    setcurrIndex(index);
  }

  return (
    <div className='bg-[url("https://t4.ftcdn.net/jpg/02/48/06/51/360_F_248065175_UKqGpkZFZG3mPBKKKpxseqS6VlIlmzq7.jpg")] w-full h-screen overflow-hidden'>
      {arr.map((item, index) => {
        return (
          <div
            style={
              currIndex === index
                ? { display: "inline-block", width: "100%", height: "100%" }
                : {}
            }
            className="relative w-0 h-0 transition-all duration-700 ease-in-out"
            onClick={() => fullImage(index)}
            key={index}
          >
            <h1 style={{backgroundColor:"rgba(255, 0, 0, 0.31)"}} className="absolute text-white text-4xl font-bold top-[40%] left-8 p-2 rounded-lg">{item.text}</h1>
            <h1 style={{backgroundColor:"rgba(255, 0, 0, 0.31)",fontWeight:"700"}} className="absolute text-white text-2xl top-[50%] left-11 bg-zinc-700 p-2 rounded-lg font-extrabold`">{item.text2}</h1>
            <img
              className="object-fit w-full h-full"
              src={`${item.pic}`}
              alt="img"
            />
          </div>
        );
      })}
      <div className="absolute bottom-8 right-8 flex gap-3 ">
        {arr.map((item, index) => {
          return (
            <div
              style={currIndex === index ? { display: "none" } : {}}
              className="drop-shadow-5xl hover:animate-bounce cursor-pointer"
              onClick={() => fullImage(index)}
              key={index}
            >
              <img
                className=" w-[10vw] h-[12vw] rounded-lg object-cover"
                src={`${item.pic}`}
                alt="img"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Slider;
