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
    <section className="bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-10 px-6 py-12">
        {/* Left Side */}
        <div className="w-1/2">
          <h1 className="text-5xl font-bold leading-tight text-[#10182f]">
            Build Your Ideal
            <span className="block bg-gradient-to-r from-[#ff512f] via-[#dd2476] to-[#7b2cff] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>

          <p className="mt-6 max-w-lg text-base leading-6 text-[#526078]">
            Explore frontend, backend, database, and tooling options,
            compare them side by side, and put together the stack that
            fits your next project.
          </p>

          <div className="mt-10 flex gap-3">
            <button
              onClick={handleExplore}
              className="rounded-md bg-gradient-to-r from-[#ff6b1a] to-[#ed3d86] px-4 py-2 text-xs font-medium text-white transition hover:scale-105 active:scale-95"
            >
              Explore Technologies
            </button>

            <button
              onClick={handleLearnMore}
              className="rounded-md border border-gray-200 bg-white px-8 py-2 text-xs text-gray-600 transition hover:bg-gray-50 active:scale-95"
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex w-1/2 justify-end">
          <img
            src={bannerImage}
            alt="Development technology illustration"
            className="w-full max-w-[300px]"
          />
        </div>
      </div>