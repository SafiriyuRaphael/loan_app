import InputField from "../../../../components/ui/input-field";
import { UserRecordsStore } from "../../store";

function BankKYC() {
  const { userRecords, updateUserRecords } = UserRecordsStore();
  return (
    <section className="text-black  py-6 flex flex-col gap-6 ">
      <form className="flex flex-col gap-6">
        <div className="bg-white border rounded-xl p-4 md:p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Bank Details
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Account Number */}
            <div className="px-3 py-2 border rounded-lg bg-white">
              <InputField
                label="Account Number"
                name="accountNumber"
                type="number"
                placeholder="Enter account number"
                value={userRecords?.accountNumber || ""}
                onChange={(event) =>
                  updateUserRecords({ accountNumber: event.target.value })
                }
                inputMode="numeric"
                className="h-10 bg-white text-black"
              />
            </div>

            {/* Bank Name */}
            <div className="px-3 py-2 border rounded-lg bg-white">
              <label className="text-sm font-semibold block mb-1">
                Bank Name
              </label>
              <select
                name="bank"
                value={userRecords?.bankName || ""}
                onChange={(event) =>
                  updateUserRecords({ bankName: event.target.value })
                }
                className="w-full h-10 px-3 text-sm border rounded-md outline-none"
              >
                <option value="">Select bank</option>
                <option>Access Bank</option>
                <option>GTBank</option>
                <option>First Bank</option>
                <option>UBA</option>
                <option>Zenith Bank</option>
              </select>
            </div>

            <div className="md:col-span-2 px-3 py-2 border rounded-lg bg-white">
              <InputField
                label="Account Name"
                name="accountName"
                type="text"
                value={userRecords?.accountHolderName || ""}
                onChange={(event) =>
                  updateUserRecords({ accountHolderName: event.target.value })
                }
                className="h-10 bg-white text-black"
              />

              <p className="text-sm text-gray-500 mt-2">
                Account name will appear here automatically.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white border rounded-xl p-4 md:p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            Identity Verification (KYC)
          </h3>

          <div className="flex gap-6  text-gray-700">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                checked={userRecords?.kycDocumentType === "bvn"}
                onChange={() => {
                  userRecords?.kycDocumentType !== "bvn"
                    ? updateUserRecords({ kycDocumentType: "bvn" })
                    : undefined;
                }}
              />
              BVN
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                checked={userRecords?.kycDocumentType === "nin"}
                onChange={() => {
                  userRecords?.kycDocumentType !== "nin"
                    ? updateUserRecords({ kycDocumentType: "nin" })
                    : undefined;
                }}
              />
              NIN
            </label>
          </div>

          <div className="p-2 border-2 rounded-lg border-gray-300 bg-white outline-none">
            <InputField
              label={
                userRecords?.kycDocumentType === "bvn"
                  ? "Enter BVN"
                  : "Enter NIN"
              }
              name="identityNumber"
              type="number"
              placeholder={
                userRecords?.kycDocumentType === "bvn"
                  ? "Enter your BVN"
                  : "Enter your NIN"
              }
              value={userRecords?.kycDocumentNumber}
              onChange={(e) => {
                updateUserRecords({ kycDocumentNumber: e.target.value });
              }}
              inputMode="numeric"
              className=" bg-white text-black"
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
