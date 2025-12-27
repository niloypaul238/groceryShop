import Link from 'next/link';
import React from 'react';
import { FcGoogle } from "react-icons/fc";

const SingUp = () => {
    return (
        <div>

            <div className="">
                <div className="flex bg-white rounded-lg shadow overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                    <div className="hidden lg:block lg:w-1/2 bg-cover ">
                        <div className='flex justify-center items-center'> <img src="https://i.ibb.co.com/29CVJ2f/grocery-shop-emblem-for-food-store-or-supermarket-vector.jpg" className=" rounded-2xl mr-3  " alt="" /></div>
                    </div>
                    <div className="w-full p-8 lg:w-1/2">

                        <p className="text-xl text-gray-600 text-center">Create Account</p>
                        
                        <div>
                            <a href="#" className="flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100">
                                <div className="px-4 py-3">
                                    <FcGoogle className='text-2xl' />

                                </div>
                                <h1 className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">Sign Up with Google</h1>
                            </a>
                            <div className="mt-4 flex items-center justify-between">
                                <span className="border-b w-1/5 lg:w-1/4"></span>
                                <a href="#" className="text-xs text-center text-gray-500 uppercase">or SingUp with email</a>
                                <span className="border-b w-1/5 lg:w-1/4"></span>
                            </div>
                        </div>

                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Enter Your Name</label>
                            <input placeholder='Type here' className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="text" />
                        </div>
                        <div className="mt-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
                            <input placeholder='Type here' className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" />
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                                {/* <a href="#" className="text-xs text-gray-500">Forget Password?</a> */}
                            </div>
                            <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" />
                        </div>
                        <div className="mt-4">
                            <div className="flex justify-between">
                                <label className="block text-gray-700 text-sm font-bold mb-2">Confrom Password</label>
                                {/* <a href="#" className="text-xs text-gray-500">Forget Password?</a> */}
                            </div>
                            <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" />
                        </div>
                        <div className="mt-8">
                            <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Sing Up</button>
                        </div>


                        <div className="mt-4 flex items-center justify-between">
                            <span className="border-b w-1/5 md:w-1/4"></span>
                            <Link href="/login" className="text-xs text-gray-500 uppercase">or Login</Link>
                            <span className="border-b w-1/5 md:w-1/4"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUp;