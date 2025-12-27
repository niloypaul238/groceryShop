"use client"
import Image from 'next/image';
import { MycreateCon } from '../../../../Context';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { use, useContext } from 'react';

const CatagoryName = ({params}) => {
     let {catagoryname} = use(params)
     const router = useRouter()
    //  console.log(catagoryname);
     let [prooducts, setProoducts, catagory, setCatagory] = useContext(MycreateCon)
     const findCatagory = prooducts.filter(pro => pro?.category.toUpperCase() == catagoryname.toUpperCase())
     console.log(findCatagory);
    return (
        <div className='w-11/12 mx-auto'>
            <p className='text-green-700'>CATAGORY  : {catagoryname.toUpperCase()}</p>
            <div className="sm:grid  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6 gap-x-7 md:gap-x-7 gap-y-3">
                {
                    findCatagory.length > 0 ?
                    findCatagory.map(product => {
                        return (
                            <div key={product.id} className="flex flex-col rounded-3xl leading-5 shadow justify-center items-center border border-gray-200 p-2">
                                <img src={product.image} alt='pic' className=" h-30" />
                                <p className="text-xl">{product.title}</p>
                                <div className="flex w-full my-1 justify-between">
                                    <span>Category : {product.category}</span>
                                    <span className="text-green-800 bg-green-500/10 px-2"> {product.price} TK</span>
                                </div>
                                <Link href={`/products/${product.id}`} className="bg-green-800 text-white w-full text-center my-1 p-1 rounded-2xl">View more </Link>
                            </div>
                        )
                    }) : 
                    <div className='flex justify-center items-center w-full col-span-4'>
                         <img src='https://i.ibb.co.com/60F1fsD5/no-product-found.webp' className='mx-auto h-40 w-40'/>
                    </div>
                   
                }
                
            </div>
            <div className='text-center'>
                
            <button className='mt-5 px-9 py-1 rounded bg-green-800 text-center text-white mx-auto' onClick={()=>router.back()}>Back</button>
            </div>
        </div>
    );
};

export default CatagoryName;