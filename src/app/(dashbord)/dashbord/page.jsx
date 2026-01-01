
import React from 'react';
import { BiBarChart, BiCoinStack, BiDownload, BiFilter, BiPlus } from 'react-icons/bi';
import { FaUserSecret } from 'react-icons/fa';
import Chartss from './Chartss';

const Dashbord = () => {
    return (
        <div>
            <div>
                <div className='bg-[#c9d8e8] rounded-xl p-4'>
                    <div className="flex  justify-between items-center mb-4">
                        <div>
                        <h1 className="text-3xl font-bold text-gray-800">Dashboard</h1>
                        <p className="text-gray-500">Manage your app from your dashboard</p>
                        </div>

                        <button className="flex cursor-pointer items-center gap-2 bg-white shadow px-4 py-2 rounded-lg">
                        Export Data <BiDownload size={18} />
                        </button>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <div className="bg-[#e8f0ff] p-5 rounded-xl shadow">
                        <div className="flex justify-between items-center">
                            <h2 className="text-gray-500">Total Agencies</h2>
                            <FaUserSecret className="text-purple-500 bg-purple-200 w-10 h-10 p-2 rounded" />
                        </div>
                        <p className="text-3xl font-extrabold mt-2">3</p>
                        <p className="text-green-600 text-sm mt-1">+3 this month</p>
                        </div>

                        <div className="bg-[#e8f4ff] p-5 rounded-xl shadow">
                        <div className="flex justify-between items-center">
                            <h2 className="text-gray-500">Total Coin Sales</h2>
                            <BiCoinStack className="text-blue-500 bg-blue-200 w-10 h-10 p-2 rounded" />
                        </div>
                        <p className="text-3xl font-extrabold mt-2">5.3M</p>
                        <p className="text-green-600 text-sm mt-1">+3 this month</p>
                        </div>

                        <div className="bg-[#e8ffe8] p-5 rounded-xl shadow">
                        <div className="flex justify-between items-center">
                            <h2 className="text-gray-500">Avg Commission</h2>
                            <BiBarChart className="text-green-500 bg-green-200 w-10 h-10 p-2 rounded" />
                        </div>
                        <p className="text-3xl font-extrabold mt-2">10.0%</p>
                        <p className="text-green-600 text-sm mt-1">+3 this month</p>
                        </div>
                    </div>
                </div>
                

                {/* Search + Filter */}
                <div className="flex flex-wrap items-center gap-4 my-4">
                    <input
                    
                    type="text"
                    placeholder="Search by agency ID or name"
                    className="flex-1 px-4 py-2 rounded-lg shadow bg-[#c9d8e8] focus:outline-none"
                    />

                    <button className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow">
                    <BiFilter size={18} /> Filter
                    </button>

                    <button className="flex items-center hover:bg-[#f35c4e] cursor-pointer gap-2 bg-[#ff6f61] text-white px-4 py-2 rounded-lg shadow">
                    <BiPlus size={18} /> Add Agancy
                    </button>
                </div>

                <div>
                    <Chartss/>
                </div>
            </div>

            
        </div>
    );
};

export default Dashbord;