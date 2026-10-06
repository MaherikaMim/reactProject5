// import bannerImage from "../assets/banner-stack.png";

// const Banner = () => {
//   const handleExplore = () => {
//     console.log("Explore Technologies clicked");
//   };

//   const handleLearnMore = () => {
//     console.log("Learn More clicked");
//   };

//   return (
//     <section className="bg-white" >
//       <div className="mx-auto flex max-w-6xl items-center justify-between gap-10 px-6 py-16">

//         {/* Left Side */}
//         <div className="w-1/2">
//           <h1 className="text-5xl font-bold leading-tight text-[#10182f]">
//             Build Your Ideal
//             <span className="block bg-gradient-to-r from-[#ff512f] via-[#dd2476] to-[#7b2cff] bg-clip-text text-transparent">
//               Development Stack
//             </span>
//           </h1>

//           <p className="mt-6 max-w-lg text-base leading-6 text-[#526078]">
//             Explore frontend, backend, database, and tooling options,
//             compare them side by side, and put together the stack that
//             fits your next project.
//           </p>

       
//           <div className="mt-10 flex gap-3">
//             <button
//               onClick={handleExplore}
//               className="rounded-md bg-gradient-to-r from-[#ff6b1a] to-[#ed3d86] px-4 py-2 text-xs font-medium text-white transition hover:scale-105 active:scale-95"
//             >
//               Explore Technologies
//             </button>

//             <button
//               onClick={handleLearnMore}
//               className="rounded-md border border-gray-200 bg-white px-8 py-2 text-xs text-gray-600 transition hover:bg-gray-50 active:scale-95"
//             >
//               Learn More
//             </button>
//           </div>
//         </div>

//         {/* Right Side */}
//         <div className="flex w-1/2 justify-center">
//           <img
//             src={bannerImage}
//             alt="Development technology illustration"
//             className="w-full max-w-[300px]"
//           />
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Banner;


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
      {/* Left ebong Right edge-e space toiri korar jonno px-12 md:px-20 lg:px-28 bebohar kora hoyeche */}
      <div className="w-full px-18 md:px-25 lg:px-28">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Left Content Section */}
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

            {/* Action Buttons */}
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

          {/* Right Illustration Section */}
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
