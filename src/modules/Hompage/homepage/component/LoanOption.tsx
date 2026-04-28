import { Loan } from "../../../../components/ui/data/LoanOptions";
import Buttons from "../../../../components/ui/buttons/Buttons";
import { useNavigate } from "react-router";

function LoanOption({ white = false }) {
  const navigate = useNavigate();
  return (
    <section className="relative py-16 md:px-10" id="loans">
      <div className="text-center mb-10 space-y-2">
        <h2
          className={`text-3xl md:text-4xl font-bold  ${white ? "text-gray-200" : "text-gray-900"}`}
        >
          Our Loan Services
        </h2>
        <p className={`${white ? "text-gray-200" : "text-gray-600"}`}>
          Choose the loan that fits your needs
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        {Loan.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex flex-col justify-between p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition bg-white"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-600 mb-4">
                <Icon size={24} />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6">
                <Buttons
                  text="Apply Now"
                  variant="primary"
                  onClick={() => {
                    navigate("/user-records");
                  }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default LoanOption;
