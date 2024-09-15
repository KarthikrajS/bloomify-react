import React, { useState } from "react";

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const data = [
        "https://images.pexels.com/photos/27155551/pexels-photo-27155551/free-photo-of-beautiful-indian-bride-with-traditional-dresses-and-makeup.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/1297483/pexels-photo-1297483.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/19567892/pexels-photo-19567892/free-photo-of-model-in-a-sari-and-a-green-blouse-sitting-with-a-big-leaf-among-the-pillars.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ];

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
    };
    const nextSlide = () => {
          console.log("inside");
        setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
    };

    return (
        <div className="h-[calc(100vh-80px)] w-[100vw] relative overflow-hidden z-0">
            {/*  width: 300vw;
    height: 100%;
    display: flex;
    transition: all 1s ease; */}
            <div className="w-[300vw] h-[100%] flex transition-all duration-100 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
                <img className="w-[100vw] h-[100%] object-cover"  src={data[0]} alt="" />
                <img className="w-[100vw] h-[100%] object-cover" src={data[1]} alt="" />
                <img className="w-[100vw] h-[100%] object-cover" src={data[2]} alt="" />
            </div>
            <div className=" w-fit flex absolute left-0 right-0 bottom-[100px] gap-3 m-auto ">
                <div className="bg-white w-[50px] h-[50px] border-solid border-[#999] border-[1px] flex items-center justify-center cursor-pointer" onClick={prevSlide}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m18.75 4.5-7.5 7.5 7.5 7.5m-6-15L5.25 12l7.5 7.5" />
                    </svg>

                    {/* <WestOutlinedIcon /> */}
                </div>
                <div className=" bg-white w-[50px] h-[50px] border-solid border-[#999] border-[1px] flex items-center justify-center cursor-pointer" onClick={nextSlide}>
                    {/* <EastOutlinedIcon /> */}
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5" />
                    </svg>

                </div>
            </div>
        </div>
    );
};

export default Slider;