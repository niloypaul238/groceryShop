import DashSlidNav from "./DashSlidNav";

export default function DashbordLayout ({children}){
    return(
        
                <div className="md:flex min-h-[100vh] mt-3 gap-x-3">
                    <div className="basis-1/5 static top-0 border-r min-h-[100%] border-gray-500/30">
                        <DashSlidNav/>
                    </div>
                    <div  className="basis-4/5 ">
                        {children}
                    </div>
                    
                </div>
           
    )
}