import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <div>
            
            <footer className="relative overflow-hidden px-6 md:px-16 lg:px-24 xl:px-32 w-full text-sm text-slate-500 bg-white pt-10">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14">
                <div className="sm:col-span-2 lg:col-span-1">
                    <Link className='flex ' href="#">
                        <img src="https://i.ibb.co.com/29CVJ2f/grocery-shop-emblem-for-food-store-or-supermarket-vector.jpg" className="h-10 rounded-2xl   w-10" alt="" />
                            <span className="self-center text-xl font-semibold whitespace-nowrap ">Grocery Shop</span>
                    </Link>
                    <p className="text-sm/7 mt-6">
                        PrebuiltUI is a free and open-source UI component library with over 340+
                        beautifully crafted, customizable components built with Tailwind CSS.
                    </p>
                </div>
                <div className="flex flex-col lg:items-center lg:justify-center">
                    <div className="flex flex-col text-sm space-y-2.5">
                        <h2 className="font-semibold mb-5 text-gray-800">Company</h2>
                        <a className="hover:text-slate-600 transition" href="#">About us</a>
                        <a className="hover:text-slate-600 transition" href="#">Careers</a>
                        <a className="hover:text-slate-600 transition" href="#">Contact us</a>
                        <a className="hover:text-slate-600 transition" href="#">Privacy policy</a>
                    </div>
                </div>
                <div>
                    <h2 className="font-semibold text-gray-800 mb-5">Subscribe to our newsletter</h2>
                    <div className="text-sm space-y-6 max-w-sm">
                        <p>The latest news, articles, and resources, sent to your inbox weekly.</p>
                        <div className="flex items-center">
                            <input className="rounded-l-md bg-gray-100 outline-none w-full max-w-64 h-11 px-3" type="email" placeholder="Enter your email" />
                            <button className="bg-linear-to-b from-indigo-600 to-indigo-800 cursor-pointer hover:from-indigo-700 hover:to-indigo-900 transition px-4 h-11 text-white rounded-r-md">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-4 border-t mt-6 border-slate-200">
                <p className="text-center">
                    Copyright 2025 © <a href="#">Grocery</a> All Right Reserved.
                </p>
                <div className="flex items-center gap-4">
                    <Link href="/">Privacy Policy</Link>
                    <Link href="/">Terms of Service</Link>
                    <Link href="/">Cookie Policy</Link>
                </div>
            </div>
        </footer>
        </div>
    );
};

export default Footer;