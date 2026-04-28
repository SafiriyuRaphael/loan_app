// import { validateKYC } from "../../../authentication/utils/Validation";
// import type { KYCErrors } from "../../../authentication/libs/type";
import { useState } from "react";
import InputField from "../../../../components/ui/input-field";
import { formData } from "../../../Hompage/views/PersonalLoan";

function BankKYC() {
  const [idType, setIdType] = useState<"bvn" | "nin">("bvn");
  return (
    <section className="text-black  py-6 flex flex-col gap-6 ">
      <form className="flex flex-col gap-6">
        <div className="bg-white border rounded-xl p-4 md:p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Bank Details
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className=" border-2 rounded-lg border-gray-300 bg-white outline-none">
              <InputField
                label="Account Number"
                name="accountNumber"
                type="number"
                placeholder="Enter account number"
                value={formData.accountNumber}
                onChange={() => {}}
                inputMode="numeric"
                className="h-10 bg-white text-black"
              />
            </div>

            <div className=" border-2 rounded-lg border-gray-300 bg-white outline-none">
              <div className="flex flex-col">
                <label className="text-xs text-gray-500 mb-1">Bank Name</label>
                <select
                  name="bank"
                  value=""
                  onChange={() => {}}
                  className="h-10 px-3 text-sm border rounded-md outline-noneborder-red-500"
                >
                  <option value="">Select bank</option>
                  <option>Access Bank</option>
                  <option>GTBank</option>
                  <option>First Bank</option>
                  <option>UBA</option>
                  <option>Zenith Bank</option>
                </select>
              </div>
            </div>

            <div className=" border-2 rounded-lg border-gray-300 bg-white outline-none">
              <InputField
                label="Account Name"
                name="accountName"
                type="text"
                readOnly
                className="h-10 bg-white text-black border-gray-300 md:col-span-2"
              />
            </div>
            <p className="text-sm text-gray-500 mt-3">
              Account name will apear here automatically.
            </p>
          </div>
        </div>

        <div className="bg-white border rounded-xl p-4 md:p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Identity Verification (KYC)
          </h3>

          <div className="flex gap-6 mb-4 text-gray-700">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                checked={idType === "bvn"}
                onChange={() => {}}
              />
              BVN
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                checked={idType === "nin"}
                onChange={() => {}}
              />
              NIN
            </label>
          </div>

          <div className=" border-2 rounded-lg border-gray-300 bg-white outline-none">
            <InputField
              label={idType === "bvn" ? "Enter BVN" : "Enter NIN"}
              name="identityNumber"
              type="number"
              placeholder={
                idType === "bvn" ? "Enter your BVN" : "Enter your NIN"
              }
              value={"bvn"}
              onChange={() => {}}
              inputMode="numeric"
              className="h-10 bg-white text-black"
            />
          </div>

          <p className="text-xs text-gray-500 mt-3">
            🔒 Your data is secure and encrypted.
          </p>
        </div>
      </form>
    </section>
  );
}

export default BankKYC;
