import { useState } from "react";
import Loan from "../../user-records/views/Loan";
import PersonalDetails from "../../user-records/views/personal";
import Reviews from "../../user-records/views/Reviews";
import AccountDetails from "../../user-records/views/Account";

type FormDataType = {
  loanAmount: string;
  loanPurpose: string;
  loanDuration: string;
  repaymentPlan: string;
  employmentStatus: string;
  nin: string;
  bvn: string;
  firstName: string;
  lastName: string;
  streetAddress: string;
  city: string;
  state: string;
  country: string;
  phoneNumber: string;
  email: string;
  accountNumber: string;
  bank: string;
  accountName: string;
};

export const formData = {
  loanAmount: "",
  loanPurpose: "",
  loanDuration: "",
  repaymentPlan: "",
  employmentStatus: "",
  nin: "",
  bvn: "",
  firstName: "",
  lastName: "",
  streetAddress: "",
  city: "",
  state: "",
  country: "",
  phoneNumber: "",
  email: "",
  accountNumber: "",
  bank: "",
  accountName: "",
};

function PersonalLoan() {
  const [step, setStep] = useState<number>(0);

  const [formDatas, setFormDatas] = useState<FormDataType>({
    loanAmount: "",
    loanPurpose: "",
    loanDuration: "",
    repaymentPlan: "",
    employmentStatus: "",
    nin: "",
    bvn: "",
    firstName: "",
    lastName: "",
    streetAddress: "",
    city: "",
    state: "",
    country: "",
    phoneNumber: "",
    email: "",
    accountNumber: "",
    bank: "",
    accountName: "",
  });

  const steps: React.ReactNode[] = [
    <Loan />,
    <PersonalDetails />,
    <AccountDetails />,
    <Reviews />,
  ];

  return (
    <div className="h-screen flex flex-col justify-between">
      {/* CONTENT */}
      <div className="flex-1 overflow-y-auto">{steps[step]}</div>

      {/* BUTTONS */}
      <div className="flex justify-between p-4 border-t bg-white">
        <button
          disabled={step === 0}
          onClick={() => setStep((prev) => prev - 1)}
          className="px-4 py-2 border rounded disabled:opacity-50"
        >
          Back
        </button>

        <button
          onClick={() => {
            if (step === steps.length - 1) {
              alert("SUCCESSFUL");
              console.log(formData);
            } else {
              setStep((prev) => prev + 1);
            }
          }}
          className="px-4 py-2 bg-green-600 text-white rounded"
        >
          {step === steps.length - 1 ? "Submit" : "Next"}
        </button>
      </div>
    </div>
  );
}

export default PersonalLoan;
