"use client"
import { useContext } from "react";
import Nav from "./Nav";
import { MycreateCon } from "./Context";
import Image from "next/image";
import Link from "next/link";
import Footer from "./Footer";
import { useRouter } from "next/navigation";



export default function Home() {
  // let [products,setProducts] = useState([])
  // useEffect(()=>{
  //   fetch('products.json').then(res => res.json()).then(data => setProducts(data))
  // },[])
  let [prooducts,setProoducts] = useContext(MycreateCon)
  let router = useRouter()
  
  return (
    <div className="">
        <Nav/>
        
            <img src="https://i.ibb.co.com/hJRtjmrh/online-delivery-service-home-office-warehouse-cartoon-paper-art-on-mobile-illustration-shopping-onli.jpg" alt="" className="w-full"/>

          <div className="w-11/12 mx-auto">
            <div className="mt-5">
            <p className="text-center mb-4 text-2xl ">Popular Sell products </p>
            <div className="sm:grid sm:grid-cols-2 md:grid-cols-3 gap-x-7 md:gap-x-7 gap-y-3">
                {
                  prooducts.slice(0,6).map(product => {
                    return(
                      <div key={product.id} className="flex flex-col rounded-3xl leading-5 shadow justify-center items-center border border-gray-200 p-2">
                          <img src={product.image} className=" h-40"/>
                          <p className="text-xl">{product.title}</p>
                          <div className="flex w-full justify-between">
                            <span>Category : {product.category}</span>
                            <span className="text-green-800 bg-green-500/10 px-2"> {product.price} TK</span>
                          </div>
                          <Link href={`/products/${product.id}`} className="bg-green-800 text-white w-full text-center my-1 p-1 rounded-2xl">View more </Link>
                      </div>
                    )
                  })
                }
            </div>
            <div className='text-center'>
                
            <button className='mt-5 roundedBtn mx-auto' onClick={()=>router.push('/products')}>See all Products</button>
            </div>
            
          </div>
          </div>
          

          <Footer/>
    </div>
  );
}
