// import React from "react";

import { UserRecordsStore } from "../../store";

const ReviewDta = () => {
  const { userRecords } = UserRecordsStore();
  return (
    <div className=" flex justify-center p-4">
      <div className="w-full max-w-3xl flex flex-col bg-transparent">
        <div className="text-center py-3 shrink-0">
          <h1 className="text-2xl font-semibold text-gray-900">
            Review Your Application
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            Confirm details before submission
          </p>
        </div>

        <div className="flex-1 overflow-y-auto space-y-4 px-1 pb-4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex justify-between items-center px-4 py-3 bg-green-50">
              <h2 className="font-semibold text-gray-800 text-sm">
                Loan Details
              </h2>
              <button className="text-xs text-blue-600 hover:underline">
                Edit
              </button>
            </div>

            <div className="p-4 grid grid-cols-2 gap-3 text-xs">
              <span className="text-gray-500">Amount </span>
              <span className="text-lg font-semibold text-gray-900">
                {userRecords?.loanAmount || "₦0"}
              </span>

              <span className="text-gray-500">Purpose</span>
              <span className="text-lg font-semibold text-gray-900">
                Business
              </span>

              <span className="text-gray-500">Duration</span>
              <span className="text-lg font-semibold text-gray-900">
                {userRecords?.loanDuration || "not available"}
              </span>

              <span className="text-gray-500">Repayment</span>
              <span className="text-lg font-semibold text-gray-900">
                {userRecords?.repaymentPlan}
              </span>

              <span className="text-gray-500">Monthly Pay</span>
              <span className="text-green-600 font-semibold">₦87,000</span>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex justify-between items-center px-4 py-3">
              <h2 className="font-semibold text-gray-800 text-sm">
                Personal Details
              </h2>
              <button className="text-xs text-blue-600 hover:underline">
                Edit
              </button>
            </div>

            <div className="p-4 grid grid-cols-2 gap-3 text-xs">
              <span className="text-gray-500">Name</span>
              <span className="text-lg font-semibold text-gray-900">
                {userRecords?.firstName} {userRecords?.lastName} ol
              </span>

              <span className="text-gray-500">Phone</span>
              <span className="text-lg font-semibold text-gray-900">
                {userRecords?.phone}
              </span>

              <span className="text-gray-500">Email</span>
              <span className="text-lg font-semibold text-gray-900">
                {userRecords?.email}
              </span>

              <span className="text-gray-500">Employment</span>
              <span className="text-lg font-semibold text-gray-900">
                {userRecords?.employmentStatus}
              </span>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex justify-between items-center px-4 py-3">
              <h2 className="font-semibold text-gray-800 text-sm">
                Account Details
              </h2>
              <button className="text-xs text-blue-600 hover:underline">
                Edit
              </button>
            </div>

            <div className="p-4 grid grid-cols-2 gap-3 text-xs">
              <span className="text-gray-500">Account Name</span>
              <span className="text-lg font-semibold text-gray-900">
                {userRecords?.accountHolderName}
              </span>

              <span className="text-gray-500">Number</span>
              <span className="text-lg font-semibold text-gray-900">
                {userRecords?.accountNumber}
              </span>

              <span className="text-gray-500">Bank</span>
              <span className="text-lg font-semibold text-gray-900">
                {userRecords?.bankName}
              </span>

              <span className="text-gray-500">
                {userRecords?.kycDocumentType}
              </span>
              <span className="text-green-600">
                {userRecords?.kycDocumentNumber}
              </span>
            </div>
          </div>
        </div>

        <div className="shrink-0 bg-white border-t border-gray-100 p-3 space-y-3">
          <label className="flex items-start gap-2 text-xs text-gray-600">
            <input type="checkbox" className="mt-1 w-3 h-3" />I confirm all
            information is correct
          </label>
        </div>
      </div>
    </div>
  );
};

export default ReviewDta;
