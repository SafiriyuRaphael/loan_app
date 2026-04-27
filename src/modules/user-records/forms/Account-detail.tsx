import { useState } from "react";
import { useNavigate } from "react-router";
import Buttons from "../../../components/ui/buttons/Buttons";

type Props = {
  formData: {
    firstName: string;
    lastName: string;
  };
};

export default function AccountDetailsForm() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [formData, setFormdata] = useState({
    firstName: "Taiwo",
    lastName: "Taiwo",
  });
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const isMatch = password === confirmPassword;
  const [fullName, setFullName] = useState(
    `${formData.firstName} ${formData.lastName}`,
  );

  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-green-100 via-white to-green-200">
      <div className="w-full max-w-md p-6 space-y-6 text-black">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900">
            Secure Your Account
          </h2>
          <p className="text-gray-500 text-sm">
            Create a password to protect your account
          </p>
        </div>

        <div className="space-y-1">
          <label className="text-sm bg-white text-black font-bold">
            Full Name
          </label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full border rounded px-3 py-2 bg-gray-100"
          />
        </div>

        <div className="space-y-1 relative">
          <label className="text-sm text-black font-bold">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="w-full border rounded px-3 py-2 pr-10"
          />
        </div>

        <div className="space-y-1">
          <label className="text-sm text-black font-bold">
            Confirm Password
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            //   placeholder="Confirm password"
            className={`w-full border rounded px-3 py-2 ${
              confirmPassword && !isMatch ? "border-red-500" : "border-gray-500"
            }`}
          />

          {confirmPassword && !isMatch && (
            <p className="text-red-500 text-sm">Passwords do not match</p>
          )}
        </div>

        <button
          disabled={!password || !confirmPassword || !isMatch}
          className="w-full bg-green-600 text-white py-2 rounded disabled:opacity-50"
          onClick={() => navigate("/account-details")}
        >
          Continue
        </button>

        <div className="fixed bottom-6 right-6 mt-5 flex justify-end items-center gap-3">
          <Buttons
            text="Prev"
            variant="secondary"
            onClick={() => navigate(-1)}
          />
          <Buttons
            text="Next"
            variant="primary"
            onClick={() => navigate("/account-details")}
          />
        </div>
      </div>
    </section>
  );
}
