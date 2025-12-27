"use client"
import Link from 'next/link';
import { MycreateCon } from '../../../Context';
import React, { use, useContext } from 'react';
import { useRouter } from 'next/navigation';

const ProductId = ({ params }) => {
    const router = useRouter()
    let [prooducts, setProoducts,carts,setCharts] = useContext(MycreateCon)

    const { id } = use(params)

    const findProduct = prooducts.find(pro => pro.id == Number(id))

    
    const buyFun = ()=>{
        alert('add successfull')
        router.push('/products')
        
    }
    return (
        <div className='w-11/12  border border-gray-200 mx-auto mt-4 rounded p-2'>

            <div className=' flex '>
                <div className='  flex-1'>
                    <img className='' src={findProduct?.image} alt="" />
                </div>

                <div className='w-50  flex-1'>
                    <p className='text-amber-700 text-3xl'>{findProduct?.title}</p>
                    <p className=' '> Price : {findProduct?.price}TK</p>
                    <p className=' '> Description : {findProduct?.description}</p>
                    <button onClick={buyFun} className='bg-green-700 text-white px-4 py-1 mt-4 cursor-pointer'>Buy Now</button>
                </div>
            </div>

        <div className='flex justify-between'>
            <div></div>
            <Link href={'/'} className='text-green-800 mt-4 md:mt-0 hover:text-green-400 bg-green-800/10 px-3 py-1'>Back to Home</Link>
        </div>
        

        </div>
    );
};

export default ProductId;