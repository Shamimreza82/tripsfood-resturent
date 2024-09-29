import React from 'react';
import burger from '../assets/Untitled-1.png'
import phone from '../assets/phone.png'
import { FaApple } from "react-icons/fa";
import { BsAndroid2 } from "react-icons/bs";



const Footer = () => {
    return (
        <div className=' bg-slate-900 text-white mt-20' >
            {/* <div className='h-full w-full opacity-20 absolute' ></div> */}
            <div className='flex items-center justify-between h-[70vh]'>
                <div className='relative text-white z-20  flex-1'>
                    <div className='lg:ml-52 space-y-10'>
                        <p className='text-[#F38D50]'>Get our beautyfull app</p>
                        <h4 className='text-3xl'>Trips food help you to <br />
                            order more food helpfully.</h4>
                        <div className='flex gap-10'>
                            <div className='flex items-center gap-4 bg-white text-black p-1 px-4 rounded-full'>
                                <FaApple className='text-4xl' />
                                <div>
                                    <p>Download on </p>
                                    <p>Apple Store </p>
                                </div>
                            </div>
                            <div className='flex items-center gap-4 bg-white text-black p-1 px-4 rounded-full'>
                                <BsAndroid2 className='text-4xl' />
                                <div>
                                    <p>Download on </p>
                                    <p>Play Store </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div className=' flex-1 text-left overflow-hidden' >
                    <div className='flex justify-center'>
                        <img className='w-80 ' src={phone} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;

// style={{
//     backgroundImage: `url(${burger})`,
//     backgroundSize: "cover",
//     backgroundPosition: "center",

// }}