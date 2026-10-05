
import type { Iapp } from "../../types/app";

const AvailableApp = ({ applications }: { applications: Iapp[] }) => {
  return (
    <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
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
                    application.badgeStyle ||
                    "bg-blue-50 text-blue-600"
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
              className="w-full rounded-lg bg-[#0b0f19] py-2 text-xs font-medium text-white transition-all duration-200 hover:bg-black hover:shadow-md active:scale-[0.98]"
            >
              Add to Stack
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AvailableApp;
