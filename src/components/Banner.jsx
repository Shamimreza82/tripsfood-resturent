import React from 'react';
import { BiSolidRightArrow } from "react-icons/bi";
import { MdOutlineFacebook } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { AiFillTwitterCircle } from "react-icons/ai";
import bgBanner from '../assets/bg_banner.jpg'
import burger from '../assets/Untitled-1.png'

const Banner = () => {
    return (
        <div  >
            <div
                style={{
                    backgroundImage: `url('${bgBanner}')`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}>
                    <div className='text-white absolute w-[1000px] opacity-40 '>
                        <img src={burger} alt="" />
                    </div>
                <div className='flex gap-10 h-screen justify-evenly items-center '>
                    <div className='lg:text-left text-center z-20  p-12 sh '>
                        <h2 className='lg:text-[96px] drop-shadow-2xl text-white text-4xl leading-tight font-bold'>Drink, food <br /> & Enjoy</h2>
                        <p className='text-white py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem iure ea soluta <br/> aut dicta quas recusandae id culpa iste asperiores.</p>
                        <button className=" hover:scale-95 bg-[#FFBE00] mt-8 py-4 px-6 rounded-3xl text-black font-bold text-xl flex items-center gap-2 hover:bg-slate-400 duration-200 hover:text-white">
                            MAKE A BOOKING
                            <BiSolidRightArrow />
                        </button>
                    </div>
                    <div >
                        <div className='h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px] bg-[#FCBD9A] rounded-full inline-flex items-center justify-center'>
                            <div className='h-[260px] w-[260px] sm:h-[340px] sm:w-[340px] md:h-[430px] md:w-[430px] bg-slate-100 rounded-full inline-flex items-center justify-center'>
                                <div
                                    className='h-[220px] w-[220px] sm:h-[300px] sm:w-[300px] md:h-[360px] md:w-[360px] bg-slate-500 rounded-full'
                                    style={{
                                        backgroundImage: "url('https://images.pexels.com/photos/5908232/pexels-photo-5908232.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center",
                                    }}>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='right-10 top-1/2 space-y-5 text-2xl fixed z-50 text-[#FFBE00]'>
                <MdOutlineFacebook />
                <RiInstagramFill />
                <AiFillTwitterCircle />
            </div>
        </div>
    );
};

export default Banner;