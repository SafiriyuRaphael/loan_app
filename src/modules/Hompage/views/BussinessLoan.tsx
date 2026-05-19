import InputField from "../../../components/ui/input-field";

function BusinessLoan() {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-6">
      <div className=" w-full max-w-5xl">
        <h2 className="text-3xl font-bold text-center">Business Details</h2>
        <p className="text-center text-gray-500 mt-2 mb-8">
          Fill in the required details to proceed
        </p>

        <form className=" w-full flex flex-col gap-4 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* placeholders, should i put */}
            <InputField
              name="Business Name"
              label="Business Name"
              type="text"
              variant="secondary"
            />

            <InputField
              name="CAC Registration Number"
              label="CAC Registration Number"
              type="text"
              variant="secondary"
            />

            <InputField
              name="Business Address"
              label="Business Address"
              type="text"
              variant="secondary"
            />
            <InputField
              name="businessPhone"
              label="Business Phone Number"
              type="tel"
              variant="secondary"
            />

            <InputField
              name="businessEmail"
              label="Business Email Address"
              type="email"
              variant="secondary"
            />

            <InputField
              name="Years In Business"
              label="Years In Business"
              type="number"
              variant="secondary"
            />

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-600">
                Business Industry
              </label>

              <select className="w-full rounded-xl border border-black bg-white px-4 py-3 outline-none">
                <option>Select industry</option>

                <option>Fashion & Clothing</option>

                <option>Food & Beverages</option>

                <option>Technology</option>

                <option>Agriculture</option>

                <option>Beauty & Cosmetics</option>

                <option>Retail & Wholesale</option>

                <option>Health & Pharmacy</option>

                <option>Education</option>

                <option>Transportation & Logistics</option>

                <option>Construction</option>

                <option>Real Estate</option>

                <option>Manufacturing</option>

                <option>Media & Entertainment</option>

                <option>Hospitality & Tourism</option>

                <option>Finance</option>

                <option>Other</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-600">
                Estimated Monthly Revenue
              </label>

              <select
                className="w-full rounded-xl border border-black
               bg-white px-4 py-3 outline-none"
              >
                <option>Select range</option>
                <option>Below ₦50,000</option>
                <option>₦50,000 - ₦100,000</option>
                <option>₦100,000 - ₦300,000</option>
                <option>₦300,000 - ₦500,000</option>
                <option>₦500,000 - ₦1,000,000</option>
                <option>Above ₦1,000,000</option>
              </select>
            </div>

            <InputField
              label="Loan Amount (₦)"
              name="loanAmount"
              type="number"
              inputMode="numeric"
              variant="secondary"
            />

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-600">
                Purpose of Loan
              </label>

              <select className="w-full  rounded-xl border border-black bg-white/20 px-4 py-3 outline-none ">
                <option>Select purpose</option>
                <option>Inventory</option>
                <option>Equipment</option>
                <option>Expansion</option>
                <option>Salaries</option>
                <option>Others</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-600">
                Loan Duration
              </label>
              <select className="w-full  rounded-xl border border-black bg-white/20 px-4 py-3 outline-none ">
                <option>Select duration</option>
                <option>3 Months</option>
                <option>6 Months</option>
                <option>12 Months</option>
                <option>24 Months</option>
              </select>
            </div>

            <fieldset className=" md:grid-cols-2 border-2 rounded-lg pb-3 pt-2 border-emerald-400 bg-white p-3 focus-within:border-emerald-500 transition">
              <legend className="px-2 text-sm text-emerald-600 font-medium">
                Repayment Plan
              </legend>
              <div className="flex gap-4 flex-wrap">
                <label className="flex items-center gap-2">
                  <input type="radio" name="repaymentplan" value="monthly" />
                  Monthly
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="repaymentplan" value="weekly" />
                  Weekly
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="repaymentplan" value="bi-weekly" />
                  Bi-weekly
                </label>
              </div>
            </fieldset>
          </div>
        </form>
      </div>
    </section>
  );
}

export default BusinessLoan;
