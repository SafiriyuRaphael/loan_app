import BankKYC from "../forms/account-dta";

export default function Account() {
  return (
    <div>
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
        Bank Details & Verification
      </h2>
      <p className="text-sm text-gray-500">Complete your KYC to continue</p>

      <BankKYC />
    </div>
  );
}
