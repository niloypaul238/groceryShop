"use client"
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useContext, useState } from 'react';
import { FiShoppingCart } from "react-icons/fi";
import { RxCross1, RxCross2 } from "react-icons/rx";
import { MycreateCon } from './Context';


const Nav = () => {
    const [toogle , setToggle] = useState(false)
    const [slide,setSlide] = useState(true)
    const [carts,setCharts,buy,setBuy] = useContext(MycreateCon)
    console.log(buy);
    const pathName = usePathname()
   
    return (
        <div className=''>
            <nav className="bg-white border-gray-200 py-2.5 shadow w-full">
                <div className="flex w-10/12 mx-auto flex-wrap items-center justify-between px-4 ">
                    <Link  href="/" className="flex items-center">
                        {/* <img src="https://www.svgrepo.com/show/499962/music.svg" className="h-6 mr-3 sm:h-9" alt="Landwind Logo"> */}
                            <img src="https://i.ibb.co.com/29CVJ2f/grocery-shop-emblem-for-food-store-or-supermarket-vector.jpg" className="h-10 rounded-2xl mr-3  w-10" alt="" />
                            <span className="self-center text-xl font-semibold whitespace-nowrap ">Grocery Shop</span>
                    </Link>
                    <RxCross1 onClick={()=>setToggle(!toogle)} className='lg:hidden' />
                    
                    <div className={`items-center justify-between w-full transition-all  duration-150  lg:flex hidden  lg:w-auto lg:order-1`} id="mobile-menu-2">
                        <ul className="flex items-center flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                          
                          
                            <Link  href="/" className={`block py-2 pl-3 pr-4 ${pathName === '/' && 'text-purple-700'} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0   lg:bg-white mb-1 lg:mb-0  dark:hover:bg-gray-700  lg:dark:hover:bg-transparent `}>Home</Link>

                            <Link href="/products" className={`block py-2 pl-3 pr-4 ${pathName === '/products' && 'text-purple-700'} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0  lg:bg-white mb-1 lg:mb-0  dark:hover:bg-gray-700  lg:dark:hover:bg-transparent `}>Products</Link>
                           <Link href="/about" className={`block py-2 pl-3 pr-4 ${pathName === '/about' && 'text-purple-700'} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0   lg:bg-white mb-1 lg:mb-0  dark:hover:bg-gray-700  lg:dark:hover:bg-transparent `}>About</Link>
                            <Link href="/contuct" className={`block py-2 pl-3 pr-4 ${pathName === '/contuct' && 'text-purple-700'} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0  lg:bg-white mb-1 lg:mb-0  dark:hover:bg-gray-700  lg:dark:hover:bg-transparent `}>Contucts</Link>
                            <div className='relative'>
                                <FiShoppingCart className='text-xl cursor-pointer' onClick={()=>setSlide(!slide)} />
                                <span className='absolute  -top-3 -right-2'></span>
                            </div>
                            <Link  href={'/login'}  className='border px-5 rounded bg-green-900 text-white' replace>Login</Link>
                        </ul>

                        
                    </div>

                    <div className={`items-center justify-between w-full transition-all  duration-150 lg:hidden flex ${toogle == false && 'h-0'} lg:hidden overflow-hidden lg:w-auto lg:order-1`} id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                          
                          
                            <Link onClick={()=>setToggle(false)} href="/" className={`block py-2 pl-3 pr-4 ${pathName === '/' && 'text-purple-700'} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0   lg:bg-white mb-1 lg:mb-0  dark:hover:bg-gray-700  lg:dark:hover:bg-transparent `}>Home</Link>

                            <Link onClick={()=>setToggle(false)} href="/products" className={`block py-2 pl-3 pr-4 ${pathName === '/products' && 'text-purple-700'} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0  lg:bg-white mb-1 lg:mb-0  dark:hover:bg-gray-700  lg:dark:hover:bg-transparent `}>Products</Link>
                           <Link onClick={()=>setToggle(false)} href="/about" className={`block py-2 pl-3 pr-4 ${pathName === '/about' && 'text-purple-700'} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0   lg:bg-white mb-1 lg:mb-0  dark:hover:bg-gray-700  lg:dark:hover:bg-transparent `}>About</Link>


                            <Link onClick={()=>setToggle(false)} href="/contuct" className={`block py-2 pl-3 pr-4 ${pathName === '/contuct' && 'text-purple-700'} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-purple-700 lg:p-0  lg:bg-white mb-1 lg:mb-0  dark:hover:bg-gray-700  lg:dark:hover:bg-transparent `}>Contucts</Link>
                            <Link onClick={()=>setToggle(false)}  href={'/login'}  className='border px-5 rounded bg-green-900 text-white' replace>Login</Link>
                        </ul>

                        
                    </div>
                </div>
            </nav>
            <div className={`fixed transition duration-200 ${slide == false ? 'right-0' : '-right-148'} top-0 z-44 w-100 h-screen p-3 bg-gray-300/90`}>
                    <RxCross2 className='cursor-pointer text-2xl' onClick={()=>setSlide(!slide)} />

                        <div className='mt-3'>
                            <p className='text-center border-b'>Buy Products </p>
                            <div>

                            </div>
                        </div>
            </div>

            
        </div>
    );
};

export default Nav;