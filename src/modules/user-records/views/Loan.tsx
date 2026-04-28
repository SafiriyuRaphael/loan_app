import LoanDetailsForm from "../forms/loan-dta";
// import React from 'react'

function Loan() {
  return (
    <div className="text-black">
      <h1 className="text-2xl font-bold"> Loan Details</h1>
      <p>Fill in your loan request below.</p>
      <LoanDetailsForm />
    </div>
  );
}

export default Loan;
