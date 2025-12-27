"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FcBusinessman } from 'react-icons/fc';

const DashSlidNav = () => {
    const pathname = usePathname()
    return (
        <div className='p-2 sticky top-0'>
            
            <div className='flex items-end gap-x-2'>
                <FcBusinessman className='w-10 h-10 border border-gray-700/30' />
                <p className='text-gray-600'>Admin : Niloy Paul</p>

            </div>
            <div className='mt-4'>
                <ul className='flex flex-col'>
                    <Link className={`${pathname == "/dashbord" && 'bg-green-900 text-white'} p-1`} href={'/dashbord'}>Dashbord</Link>
                    <Link className={`${pathname == "/dashbord/userlist" && 'bg-green-900 text-white'} p-1`}  href={'/dashbord/userlist'}>userlist</Link>
                     <Link className={`${pathname == "/dashbord/orders" && 'bg-green-900 text-white'} p-1`}  href={'/dashbord/orders'}>Orders</Link>
                    <Link className={`${pathname == "/dashbord/setting" && 'bg-green-900 text-white'} p-1`}  href={'/dashbord/setting'}>Setting</Link>
                
                    {/* <Link href={'/dashbord'}>Dashbord</Link>
                    <Link href={'/dashbord'}>Dashbord</Link>
                    <Link href={'/dashbord'}>Dashbord</Link> */}
                </ul>
            </div>
        </div>
    );
};

export default DashSlidNav;