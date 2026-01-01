'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { BsEye } from 'react-icons/bs';

const  UserList = () => {
    // table data fetch
    const [tableData, setTableData] = useState([])
    
    useEffect(() => {
        fetch('user.json').then(res => res.json()).then(data => setTableData(data))
    }, [])

    return (
        <div>
            <div className="bg-[#c9d8e8] border-1 border-white p-3 rounded-xl shadow overflow-auto">
                <table className="w-full  table text-left">
                    <thead className=''>
                        <tr className="text-gray-500 border-b border-white text-sm">
                            <th className="py-2">User ID</th>
                            <th>Name</th>
                            <th>Level</th>
                            <th>Diamonds</th>
                            <th>Beans</th>
                            <th>Coin Sell</th>
                            <th>Coin Buy</th>
                            <th>Location</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {

                            tableData?.map((row, i) => (

                                <tr key={i} className="  border-b border-white text-gray-900">
                                    <td className="py-3">{row.userId}</td>
                                    <td>{row.name.slice(0, 9)}...</td>
                                    <td>
                                        <span className="bg-[#dae1e9] px-2 py-1 rounded-md  text-xs">
                                            {row.label}
                                        </span>
                                    </td>
                                    <td>{row.diamonds}</td>
                                    <td>{row.beans}</td>
                                    <td>{row.coinSell}</td>
                                    <td>{row.coinBuy}</td>
                                    <td>{row.location}</td>
                                    <td>
                                        <span className={`px-3 py-1 rounded-full  text-green-800 font-semibold text-xs ${row.status == "active" && 'text-green-800'} ${row.status == "pending" && 'text-yellow-900'}`}>
                                            {row.status}
                                        </span>
                                    </td>
                                    <td>
                                        <button className=" cursor-pointer hover:text-white">
                                            <Link to={`/${row.userId}`}><BsEye size={16} /></Link>
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default UserList;