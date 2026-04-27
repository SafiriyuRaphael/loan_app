import { steps } from "../../../../components/ui/data/Steps";

function Process() {
  const activeStep = 2; // 👈 change this (0–4)

  return (
    <section className="py-20 px-6 md:px-20 bg-gray-50">
      <div className="text-center mb-15">
        <h2 className=" text-3xl md:text-4xl font-bold text-gray-900">
          How It Works
        </h2>
        <p className="text-gray-600">
          Follow these simple steps to get your loan
        </p>
      </div>

      <div className="relative">
        <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-gray-300"></div>

        <div className="flex flex-col md:flex-row md:justify-between gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = index === activeStep;

            return (
              <div
                key={index}
                className="flex md:flex-col items-start md:items-center gap-4 md:gap-0 relative z-10"
              >
                <div
                  className={`
                    w-12 h-12 rounded-3xl flex items-center justify-center
                    transition-all duration-300
                    ${
                      isActive
                        ? "bg-green-600 text-white shadow-lg shadow-green-400/50 scale-110"
                        : "bg-green-100 text-green-600"
                    }
                  `}
                >
                  <Icon size={20} />
                </div>

                <div className="md:hidden w-0.5 h-10 bg-gray-300 ml-5"></div>

                <div className="md:text-center max-w-40">
                  <h3
                    className={`font-semibold ${
                      isActive ? "text-green-600" : "text-gray-900"
                    }`}
                  >
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-1">{step.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Process;
