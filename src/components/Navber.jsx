
import { IoSearchSharp } from "react-icons/io5";
import { BiSolidRightArrow } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { MdLockPerson } from "react-icons/md";

const Navber = () => {
    return (
        <div className="navbar  px-20 z-50 backdrop-blur-sm bg-slate-800 fixed text-white  bg-slate-800/30 shadow-lg">
            <div className=" flex-1 gap-10">
                <a className=" text-xl font-inter font-bold ">tripsfood</a>
                <button className="btn btn-square btn-ghost">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block h-5 w-5 stroke-current">
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
                <IoSearchSharp />
            </div>

            <div className="lg:flex-none gap-x-5">
                <div>
                    <MdLockPerson />
                </div>
                <div className="flex items-center gap-7">
                    Accounts
                    <IoIosArrowDown />
                </div>
                <button className=" hover:scale-95 bg-[#FFBE00] py-2 px-4 rounded-3xl text-black font-bold text-sm flex items-center gap-2 hover:bg-slate-400 duration-200 hover:text-white">
                    MAKE A BOOKING
                    <BiSolidRightArrow />
                </button>
            </div>
        </div>
    );
};

export default Navber;