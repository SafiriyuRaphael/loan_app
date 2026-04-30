import InputField from "../../../../components/ui/input-field";
import { UserRecordsStore } from "../../store";

export default function PersonalDetailsForm() {
  const { userRecords, setUserRecords, updateUserRecords } = UserRecordsStore();
  return (
    <section>
      <form className="text-gray-400 py-8 flex flex-col items-start">
        <div className=" mt-8 grid md:grid-cols-2 gap-4 w-full">
          <div className=" border-2 rounded-lg border-gray-300 bg-white outline-none">
            <InputField
              placeholder="First Name"
              name="First Name"
              type="text"
              value={userRecords?.firstName || ""}
              onChange={(event) =>
                updateUserRecords({ firstName: event.target.value })
              }
              variant="primary"
            />
          </div>

          <div className=" border-2 rounded-lg border-gray-300 bg-white outline-none">
            <InputField
              placeholder="Last Name"
              name="Last Name"
              type="text"
              variant="primary"
              value={userRecords?.lastName || ""}
              onChange={(event) =>
                updateUserRecords({ lastName: event.target.value })
              }
            />
          </div>
        </div>

        <p className="text-sm mt-10 font-bold text-black">
          YOUR RESIDENTIAL ADDRESS
        </p>

        <div className="mt-3 grid md:grid-cols-2 gap-5 w-full">
          <div className=" border-2 rounded-lg border-gray-300 bg-white outline-none">
            <InputField
              placeholder="Street Address"
              name="Street Address"
              type="text"
              variant="primary"
              value={userRecords?.address || ""}
              onChange={(event) =>
                updateUserRecords({ address: event.target.value })
              }
            />
          </div>
          <div className=" border-2 rounded-lg border-gray-300 bg-white outline-none">
            <InputField
              placeholder="Street Address"
              name="Street Address"
              type="text"
              variant="primary"
              value={userRecords?.address || ""}
              onChange={(event) =>
                updateUserRecords({ address: event.target.value })
              }
            />
          </div>
        </div>

        <div className=" mt-5 grid md:grid-cols-3 gap-6 w-full">
          <div className=" border-2 rounded-lg border-gray-300 bg-white outline-none">
            <InputField
              placeholder="City"
              name="City"
              type="text"
              variant="primary"
              value={userRecords?.city || ""}
              onChange={(event) =>
                updateUserRecords({ city: event.target.value })
              }
            />
          </div>
          <div className=" border-2 rounded-lg border-gray-300 bg-white outline-none">
            <InputField
              placeholder="State"
              name="State"
              type="text"
              variant="primary"
              value={userRecords?.state || ""}
              onChange={(event) =>
                updateUserRecords({ state: event.target.value })
              }
            />
          </div>
          <div className=" border-2 rounded-lg border-gray-300 bg-white outline-none">
            <InputField
              placeholder="Country"
              name="Country"
              type="text"
              variant="primary"
              value={userRecords?.country || ""}
              onChange={(event) =>
                updateUserRecords({ country: event.target.value })
              }
            />
          </div>
        </div>

        <p className="text-sm font-bold mt-10 text-black">CONTACT DETAILS</p>
        <div className=" mt-5 grid md:grid-cols-3 justify-center items-center gap-6">
          <div className="border-2 rounded-lg border-gray-300 bg-white outline-none h-full w-25">
            <div className="flex items-center gap-3 px-3 ">
              <div className="h-7 w-9 bg-green-500"></div>
              <InputField
                placeholder="+47"
                name="+47"
                type="number"
                variant="primary"
              />
            </div>
          </div>

          <div className="border-2 rounded-lg border-gray-300 bg-white outline-none">
            <InputField
              placeholder="Your Phone Number"
              name="Your Phone Number"
              type="text"
              variant="primary"
              value={userRecords?.phone || ""}
              onChange={(event) =>
                updateUserRecords({ phone: event.target.value })
              }
            />
          </div>

          <div className="h-7 flex items-center justify-center w-7 border-3  border-green-700 text-2xl text-green-700 rounded-full">
            {" "}
            ?{" "}
          </div>
        </div>

        <div className="grid md:grid-cols-2 mt-4 gap-5 justify-center items-center">
          <div className=" border-2 rounded-lg border-gray-300 bg-white outline-none">
            <InputField
              placeholder="Your Email Address"
              name="Your Email Address"
              type="text"
              variant="primary"
              value={userRecords?.email || ""}
              onChange={(event) =>
                updateUserRecords({ email: event.target.value })
              }
            />
          </div>

          <div className="h-7 flex items-center justify-center w-7 border-3  border-green-700 text-2xl text-green-700 rounded-full">
            {" "}
            ?{" "}
          </div>
        </div>
      </form>
    </section>
  );
}
