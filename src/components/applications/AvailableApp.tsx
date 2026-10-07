


import { useState } from "react";
import type { Iapp } from "../../types/appType";

const AvailableApp = ({ applications }: { applications: Iapp[] }) => {
  const [selectedStack, setSelectedStack] = useState<Iapp[]>([]);

  // Category restriction bad diye sob tech add korar function
  const handleAddToStack = (app: Iapp) => {
    setSelectedStack((prevStack) => {
      // Shudhu same item er duplicate erikaite (Already added kina check)
      const isAlreadyAdded = prevStack.some(
        (item) => (item.id || item.name) === (app.id || app.name)
      );

      if (isAlreadyAdded) return prevStack; // Age theke thakle same jinish add hbe na
      return [...prevStack, app]; // Sob notun item add hbe (2-3 ta ba taar beshi)
    });
  };

  const handleRemoveFromStack = (appName: string) => {
    setSelectedStack((prevStack) =>
      prevStack.filter((item) => item.name !== appName)
    );
  };

  const handleRemoveAll = () => {
    setSelectedStack([]);
  };

  return (
    <main className="flex flex-col gap-8 lg:flex-row lg:items-start">
      {/* Tech Cards Grid */}
      <div className="mt-6 grid flex-1 grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {applications.map((application) => (
          <div
            key={application.id || application.name}
            className="group flex min-h-[250px] flex-col justify-between rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <div>
              <div className="mb-4 flex items-start justify-between">
                <img
                  src={application.image}
                  alt={application.name}
                  className="h-8 w-8 object-contain"
                />

                {application.badge && (
                  <span
                    className={`rounded-full px-2.5 py-1 text-[10px] font-medium ${
                      application.badgeStyle || "bg-blue-50 text-blue-600"
                    }`}
                  >
                    {application.badge}
                  </span>
                )}
              </div>

              <h2 className="mb-2 text-base font-bold text-gray-900">
                {application.name}
              </h2>

              <p className="line-clamp-3 text-xs leading-5 text-gray-500">
                {application.description ||
                  "A declarative, component-based library for building user interfaces."}
              </p>
            </div>

            <div className="mt-5">
              <div className="mb-3 flex items-center justify-between text-[10px]">
                <div className="flex items-center gap-3">
                  <span className="rounded bg-gray-100 px-2 py-1 font-medium text-gray-600">
                    {application.category || "Frontend"}
                  </span>

                  <span className="font-medium text-gray-500">
                    {application.level || "Beginner-Friendly"}
                  </span>
                </div>

                <div className="flex items-center gap-1 font-medium text-gray-600">
                  <span className="text-amber-400">★</span>
                  <span>{application.rating || 4.9}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => handleAddToStack(application)}
                className="w-full rounded-lg bg-[#0b0f19] py-2 text-xs font-medium text-white transition-all duration-200 hover:bg-black hover:shadow-md active:scale-[0.98]"
              >
                Add to Stack
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Your Stack Side Panel */}
      <div className="mt-6 w-full rounded-3xl border border-gray-100 bg-white p-6 shadow-sm lg:w-80">
        <h2 className="text-xl font-bold text-gray-900">Your Stack</h2>
        <p className="mt-1 text-sm text-slate-400">
          {selectedStack.length === 0
            ? "No technologies selected yet."
            : `${selectedStack.length} Technology Selected`}
        </p>

        {selectedStack.length === 0 ? (
          <div className="mt-5 flex h-32 items-center justify-center rounded-2xl border border-dashed border-gray-200 bg-gray-50/50 p-4 text-center">
            <span className="text-xs font-medium text-gray-400">
              Your stack is empty.
            </span>
          </div>
        ) : (
          <div className="mt-5 flex flex-col gap-3">
            {/* Selected items shob gulo scroll/list show korbe */}
            {selectedStack.map((item) => (
              <div
                key={item.id || item.name}
                className="flex items-center justify-between rounded-2xl border border-gray-200 p-3.5 bg-white"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-8 w-8 object-contain"
                  />
                  <div>
                    <p className="text-sm font-bold text-gray-900 leading-tight">
                      {item.name}
                    </p>
                    <span className="text-[11px] text-gray-400 font-medium">
                      {item.category || "Frontend"}
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => handleRemoveFromStack(item.name)}
                  className="text-gray-400 transition-colors hover:text-gray-600"
                  aria-label="Remove item"
                >
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            ))}

            <button
              type="button"
              onClick={handleRemoveAll}
              className="mt-4 w-full rounded-2xl border border-red-200 py-2.5 text-center text-sm font-semibold text-red-500 transition-colors hover:bg-red-50"
            >
              Remove All
            </button>
          </div>
        )}
      </div>
    </main>
  );
};

export default AvailableApp;