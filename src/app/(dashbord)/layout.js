import Dashbord from "./Dashbord";
import DashbordNav from "./DashbordNav";

export default function DashbordRootLayout({ children }) {
    return (
       
                <div >
                    <DashbordNav/>
                    {children}
                </div>
                
          
    )
}