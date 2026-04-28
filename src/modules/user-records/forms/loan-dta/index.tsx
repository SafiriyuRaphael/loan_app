import InputField from "../../../../components/ui/input-field";
import { formData } from "../../../Hompage/views/PersonalLoan";

//Loan Details
function LoanDetailsForm() {
  return (
    <section className=" flex flex-col justify-between">
      <form className="text-gray-400 py-8 flex flex-col items-start">
        <div className="mt-8 grid md:grid-cols-2 gap-10 w-full">
          <div className="border-2 rounded-lg border-gray-300 bg-white outline-none p-2">
            <InputField
              label="Loan Amount (₦)"
              name="loanAmount"
              type="number"
              inputMode="numeric"
              variant="primary"
              value={formData.loanAmount}
              onChange={() => {}}
            />
            <p className="text-xs text-gray-500 mt-1">
              Min: ₦50,000 – Max: ₦5,000,000
            </p>
          </div>

          <div className="border-2 rounded-lg border-gray-300 bg-white p-2">
            <label className="text-sm text-gray-600">Loan Purpose</label>
            <select className="w-full mt-1 outline-none">
              <option>Select purpose</option>
              <option>Education</option>
              <option>Medical</option>
              <option>Business</option>
              <option>Emergency</option>
              <option>Personal Use</option>
            </select>
          </div>

          <div className="border-2 rounded-lg border-gray-300 bg-white p-2">
            <label className="text-sm text-gray-600">Loan Duration</label>
            <select className="w-full mt-1 outline-none">
              <option>Select duration</option>
              <option>3 Months</option>
              <option>6 Months</option>
              <option>12 Months</option>
              <option>24 Months</option>
            </select>
          </div>

          {/* ( Repayment plan Radio buttons)  */}
          {/* <div className="border-2 rounded-lg border-gray-300 bg-white p-3">
            <p className="text-sm text-gray-600 mb-2">Repayment Plan</p>
            <div className="flex gap-4">
              <label className="flex items-center gap-2">
                <input type="radio" name="repaymentPlan" />
                Monthly
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="repaymentPlan" />
                Weekly
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="repaymentPlan" />
                Bi-weekly
              </label>
            </div>
          </div> */}

          <fieldset className="border-2 rounded-lg pb-3 pt-2 border-emerald-400 bg-white p-3 focus-within:border-emerald-500 transition">
            <legend className="px-2 text-sm text-emerald-600 font-medium">
              Repayment Plan
            </legend>
            <div className="flex gap-4 flex-wrap">
              <label className="flex items-center gap-2">
                <input type="radio" name="repaymentplan" />
                Monthly
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="repaymentplan" />
                Weekly
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="repaymentplan" />
                Bi-weekly
              </label>
            </div>
          </fieldset>

          <fieldset className="border-2 rounded-lg pb-3 pt-2 border-emerald-400 bg-white p-3 focus-within:border-emerald-500 transition">
            <legend className="px-2 text-sm text-emerald-600 font-medium">
              Employment Status
            </legend>
            <div className="flex gap-4 flex-wrap">
              <label className="flex items-center gap-2">
                <input type="radio" name="employmentStatus" />
                Employed
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="employmentStatus" />
                Self-Employed
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="employmentStatus" />
                Unemployed
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="employmentStatus" />
                Student
              </label>
            </div>
          </fieldset>

          {/* Employment Status (Radio OR Dropdown) */}
          {/* <div className="border-2 rounded-lg border-gray-300 bg-white p-3">
            <p className="text-sm text-gray-600 mb-2">Employment Status</p>
            <div className="flex gap-4 flex-wrap">
              <label className="flex items-center gap-2">
                <input type="radio" name="employmentStatus" />
                Employed
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="employmentStatus" />
                Self-Employed
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="employmentStatus" />
                Unemployed
              </label>
              <label className="flex items-center gap-2">
                <input type="radio" name="employmentStatus" />
                Student
              </label>
            </div>
          </div> */}
        </div>
      </form>
    </section>
  );
}

export default LoanDetailsForm;
