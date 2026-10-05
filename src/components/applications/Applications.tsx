import { use, useState } from "react";
import type { Iapp } from "../../types/appType";
import AvailableApp from "./AvailableApp";

interface ApplicationsProps{
    applicationsPromise:Promise<Iapp[]>;
}
const Applications = ({applicationsPromise}:ApplicationsProps) => {
    const applications =use(applicationsPromise);
    console.log(applications);
//     const[buttonType,setbuttonType]=useState("available")
// console.log(buttonType);

    return <div className="w-full px-20 container mx-auto">

        <div className="flex justify-between gap-4 mb-2"> 
            <div>
            <h1 className="font-bold text-4xl">Explore the <span className="text-pink-700">Technologies</span></h1>
            <p>pick one technology per catagory to build your ideal stack.</p>
             </div>
     </div>

            <AvailableApp applications={applications}/>
        </div>
  
};

export default Applications;