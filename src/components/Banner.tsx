

import bannerImage from "../assets/banner-stack.png";

const Banner = () => {
  const handleExplore = () => {
    console.log("Explore Technologies clicked");
  };

  const handleLearnMore = () => {
    console.log("Learn More clicked");
  };

  return (
    <section className="w-full bg-white py-8 md:py-12">
     
      <div className="w-full px-18 md:px-25 lg:px-28">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          
          <div className="w-full text-left md:w-1/2">
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Build Your Ideal
              <span className="mt-1 block bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
                Development Stack
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-sm leading-relaxed text-slate-500 sm:text-base">
              Explore frontend, backend, database, and tooling options,
              compare them side by side, and put together the stack that
              fits your next project.
            </p>

            
            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={handleExplore}
                className="rounded-xl bg-gradient-to-r from-orange-500 via-pink-500 to-rose-500 px-6 py-3 text-xs font-semibold text-white shadow-sm transition-all hover:opacity-95 active:scale-95 sm:text-sm"
              >
                Explore Technologies
              </button>

              <button
                onClick={handleLearnMore}
                className="rounded-xl border border-gray-200 bg-white px-8 py-3 text-xs font-medium text-slate-600 shadow-sm transition-all hover:bg-gray-50 active:scale-95 sm:text-sm"
              >
                Learn More
              </button>
            </div>
          </div>

         
          <div className="flex w-full justify-center md:w-1/2 md:justify-end">
            <img
              src={bannerImage}
              alt="Development technology illustration"
              className="w-full max-w-[480px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
