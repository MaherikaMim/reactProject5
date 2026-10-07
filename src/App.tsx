



import { Suspense } from "react";
import Applications from "./components/applications/Applications";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import type { Iapp } from "./types/appType"; 

const applicationsFetch = async (): Promise<Iapp[]> => {
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
};

function App() {
  const applicationsPromise = applicationsFetch();

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto w-full max-w-full px-3 md:px-6">
        <Nav />
        <Banner />
        
        <Suspense fallback={<h2>Loading..........</h2>}>
          <Applications applicationsPromise={applicationsPromise} />
        </Suspense>
        
        <Footer />
      </div>
    </div>
  );
}

export default App;
