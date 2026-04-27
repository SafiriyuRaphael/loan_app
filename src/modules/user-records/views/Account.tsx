import AccountDta from "../forms/account-dta";

type Props = {
  formData: any;
  setFormData: React.Dispatch<React.SetStateAction<any>>;
};

// import React from 'react'
function AccountDetails() {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
        Bank Details & Verification
      </h2>

      <p className="text-sm text-gray-500">Complete your KYC to continue</p>

      <AccountDta />
    </div>
  );
}
export default AccountDetails;
