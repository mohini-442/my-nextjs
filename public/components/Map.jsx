"use client";
import Image from "next/image";
import React from 'react'
import cartoon3 from '../assets/images/cartoon3.png';
import cartoon2 from '../assets/images/cartoon2.png';
import cartoon4 from '../assets/images/cartoon4.png';


const Map = () => {
    const carddata = [
        {
            Image: cartoon3,
            heading: "Candle Queen",
        },
        {
            Image: cartoon2,
            heading: "Candle Queen",
        },
        {
            Image: cartoon4,
            heading: "Candle Queen",
        },
    ];
    return (
        <div>
            <div className="container mx-auto px-3">
                <h1 className="text-4xl text-center pt-12 pb-12 font-semibold"> Map Cards</h1>
                <div className="flex-row flex flex-wrap gap-[30px] justify-center">
                    {carddata.map((a, index) => (
                        <div key={index} className="lg:w-[32%] mt-5 ">
                            <div className="loading-box">
                                <div className="music-card justify-center items-center flex flex-col">
                                    <Image src={a.Image} alt="music" className=" w-100" />
                                    <h1 className="text-[30px] text-bold capitalize pt-3">{a.heading}</h1>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Map