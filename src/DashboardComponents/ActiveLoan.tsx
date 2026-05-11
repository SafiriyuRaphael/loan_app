import { Buttons } from "../components/ui/buttons";
import { Loans } from "../components/ui/data/Loans";

function ActiveLoan() {
  return (
    <section className="md:px-20 px-15 mt-3">
      <div className=" p-4 border-2 w-full border-gray-500 rounded-2xl">
        <p className="text-sm text-gray-500 font-bold">Active Loans</p>
        {Loans.map((Loan, index) => (
          <div
            key={index}
            className=" p-4 mt-6 border-2 border-gray-500 rounded-2xl"
          >
            <div className=" space-y-5 flex justify-between items-center ">
              <div className="flex items-center">
                {" "}
                <div>{Loan.Icon}</div>
                <div>
                  <h3 className="text-sm font-bold">{Loan.bankname}</h3>
                  <p className="text-sm text-gray-500">{Loan.loantype}</p>
                </div>
              </div>
              <Buttons text="active" variant="primary" />
              {/* <div className="bg-black text-white p-2 rounded-md">active</div> */}
            </div>

            <div className="flex justify-between items-center gap-10">
              <div>
                <p className="text-sm text-gray-500">{Loan.fee}</p>
                <p className="text-sm font-bold">{Loan.amount}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">{Loan.emi}</p>
                <p className="text-sm font-bold">{Loan.topay}</p>
              </div>

              <div>
                <p className="text-sm text-gray-500">{Loan.interest}</p>
                <p className="text-sm font-bold">{Loan.rate}</p>
              </div>

              <div className="pr-40">
                <p className="text-sm text-gray-500">{Loan.next}</p>
                <p className="text-sm font-bold">{Loan.date}</p>
              </div>
            </div>

            <div className="flex justify-between items-center space-y-2 mt-4">
              <p className="text-sm font-semibold">{Loan.text}</p>
              <p className="text-sm text-gray-500">{Loan.progress}</p>
            </div>

            <div className="w-full h-2 rounded-full bg-gray-200">
              <div
                className="h-2 w-80 bg-green-500"
                style={{ width: `${Loan.progressbar}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ActiveLoan;
