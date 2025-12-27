"use client"
import React, { useContext } from 'react';
import Link from 'next/link';
import { MycreateCon } from '../../Context';



const Products = () => {
    let [prooducts, setProoducts, catagory, setCatagory] = useContext(MycreateCon)
    //  console.log(catagory);
    return (
        <div className='w-11/12 mx-auto '>
            <div className='bg-[url(https://i.ibb.co.com/5pzxS4G/concept-spring-shopping-season-sale-space-text-185193-107437.jpg)] w-full bg-right bg-[#dad7d7e5] h-40 bg-no-repeat flex flex-col justify-center items-center'>
                <h1 className='sm:text-4xl'>GROCERY E_SHOP</h1>
                <p className=' mt-3'>Products</p>
            </div>

            {/*  */}
            <div className='mt-5 bg-gray-600 text-white'>
                <p className='text-center py-2 text-lg'>Catagory</p>
                <div className='flex gap-x-3.5 justify-center'>
                    {
                        catagory.map(cata => <Link key={cata?.id} href={`/products/catagory/${cata.name}`}>{cata?.name}</Link>)
                    }
                </div>
            </div>
            <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-6 gap-x-7 md:gap-x-7 gap-y-3">
                {
                    prooducts.map(product => {
                        return (
                            <div key={product.id} className="flex flex-col rounded-3xl leading-5 shadow justify-center items-center border border-gray-200 p-2">
                                <img src={product.image} className=" h-30" />
                                <p className="text-xl">{product.title}</p>
                                <div className="flex w-full my-1 justify-between">
                                    <span>Category : {product.category}</span>
                                    <span className="text-green-800 bg-green-500/10 px-2"> {product.price} TK</span>
                                </div>
                                <Link href={`/products/${product.id}`} className="bg-green-800 text-white w-full text-center my-1 p-1 rounded-2xl">View more </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Products;