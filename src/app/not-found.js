import Link from 'next/link';
import React from 'react';
import { TbError404 } from "react-icons/tb";

const notfound = () => {
    return (
        <div>
            <div className="h-screen mx-auto grid place-items-center text-center px-8">
                
                <div className='text-center flex justify-center items-center flex-col'>
                    <TbError404 className='text-[100px]' />
                    <p>Page Not Found</p>
                    <Link href={'/'} color="gray" className="w-full border border-gray-300 mt-5 px-4 md:w-[8rem]">
                        back home
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default notfound;