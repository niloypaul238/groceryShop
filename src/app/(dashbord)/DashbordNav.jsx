"use client"
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { RxCross1 } from "react-icons/rx";
import { CiLogout } from "react-icons/ci";


const DashbordNav = () => {
    const router = usePathname()
    const useRout = useRouter()
    const [toogle , setToggle] = useState(false)

   
    return (
        <div >
            <nav className="bg-white border-gray-200 py-2.5 shadow w-full">
                <div className="flex w-10/12 mx-auto flex-wrap items-center justify-between px-4 ">
                    <Link href="/" className="flex items-center">
                        {/* <img src="https://www.svgrepo.com/show/499962/music.svg" className="h-6 mr-3 sm:h-9" alt="Landwind Logo"> */}
                            <img src="https://i.ibb.co.com/29CVJ2f/grocery-shop-emblem-for-food-store-or-supermarket-vector.jpg" className="h-10 rounded-2xl mr-3  w-10" alt="" />
                            <span className="self-center text-xl font-semibold whitespace-nowrap ">Grocery Shop</span>
                    </Link>
                    <RxCross1 onClick={()=>setToggle(!toogle)} className='lg:hidden' />
                    
                    <div className={`items-center justify-between w-full transition-all  duration-150 lg:flex ${toogle == true && 'h-0'} overflow-hidden lg:w-auto lg:order-1`} id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <Link href={'/login'}  replace={true} className={`roundedBtn flex justify-center items-center gap-x-2`}>LogOut <CiLogout /></Link>
                        </ul>

                        
                    </div>
                </div>
            </nav>

            
        </div>
    );
};

export default DashbordNav;