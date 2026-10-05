import { Suspense } from "react";
import Application from "./components/applications/Applications";
import Banner from "./components/Banner"
import Nav from "./components/Nav"
const applicationsFetch =async ()=>{
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
<Suspense fallback=>
<Application applicationsPromise={applicationsPromise}/>
</Suspense>

    </>
  )
}

export default App

