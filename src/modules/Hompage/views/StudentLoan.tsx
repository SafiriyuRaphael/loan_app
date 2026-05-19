// import React from 'react'

import InputField from "../../../components/ui/input-field";

function StudentLoan() {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-6">
      <div className=" w-full max-w-5xl">
        <h2 className="text-3xl font-bold text-center">Student Details</h2>
        <p className="text-center text-gray-500 mt-2 mb-8">
          Fill in the required details to proceed
        </p>

        <form className=" w-full flex flex-col gap-4 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              name="Institution Name"
              label="Institution Name"
              type="text"
              variant="secondary"
            />

            <InputField
              name="Course Of Study"
              label="Course Of Study"
              type="text"
              variant="secondary"
            />

            <InputField
              name="Current Level"
              label="Current Level"
              type="text"
              variant="secondary"
            />

            <InputField
              name="Expected Graduation Year"
              label="Expected Graduation Year"
              type="number"
              variant="secondary"
            />
            <InputField
              name="Parent/ Guardian Full Name"
              label="Parent/ Guardian Full Name"
              type="text"
              variant="secondary"
            />

            <InputField
              name="Parent/ Guardian Phone Number"
              label="Parent/ Guardian Phone Number"
              type="text"
              variant="secondary"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <InputField
              label="Loan Amount (₦)"
              name="loanAmount"
              type="number"
              inputMode="numeric"
              variant="secondary"
            />

            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-600">Purpose of Loan</label>

              <select className="w-full  rounded-xl border border-black bg-white/20 px-4 py-3 outline-none ">
                <option>Select purpose</option>
                <option>Tuition Fees</option>
                <option>Accommodation</option>
                <option>Books & Materials</option>
                <option>Emergency Needs</option>
                <option>Others</option>
              </select>
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-sm text-gray-600">Loan Duration</label>
              <select className="w-full  rounded-xl border border-black bg-white/20 px-4 py-3 outline-none ">
                <option>Select duration</option>
                <option>3 Months</option>
                <option>6 Months</option>
                <option>12 Months</option>
                <option>24 Months</option>
              </select>
            </div>

            <fieldset className="border-2 rounded-lg pb-3 pt-2 border-emerald-400 bg-white p-3 focus-within:border-emerald-500 transition">
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

          <div className="flex flex-col gap-2">
            <label className="text-sm text-gray-600">Upload Student ID</label>

            <label
              htmlFor="studentId"
              className="
      flex
      items-center
      justify-center
      w-full
      rounded-xl
      border-2
      border-dashed
      border-gray-600
      p-6
      cursor-pointer
    "
            >
              Click to upload file
            </label>

            <input
              id="studentId"
              type="file"
              accept="image/*,.pdf"
              className="hidden"
            />
          </div>
        </form>
      </div>
    </section>
  );
}

export default StudentLoan;
