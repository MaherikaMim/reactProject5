// import { Suspense } from "react";
// import Application from "./components/applications/Applications";
import { Suspense } from "react";
import Applications from "./components/applications/Applications";
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import Footer from "./components/Footer";

const applicationsFetch =async (): Promise <Iapp >=>{
  const res= await fetch ('/data.json')
  const data = await res.json();
  return data;
}
function App() {
const applicationsPromise=applicationsFetch();
  return (
    <>
  
 <Nav/>
<Banner/>
  
<Suspense fallback={<h2>Loading..........</h2>}>
<Applications applicationsPromise={applicationsPromise}/>
</Suspense>
<Footer/>
</>)

}


export default App

