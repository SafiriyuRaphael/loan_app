import { useLocation, useNavigate } from "react-router";

export default function ReviewPages() {
  const navigate = useNavigate();
  const location = useLocation();
  const formData = location.state || {};

  const fullName = `${formData.firstName || ""} ${formData.lastName || ""}`;

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-gray-50 px-4 overflow-hidden">
     
      <div className="absolute w-72 h-72 bg-green-200 rounded-full blur-3xl -top-15 -left-15 opacity-40"></div>
      <div className="absolute w-72 h-72 bg-green-300 rounded-full blur-3xl -bottom-15 -right-15 opacity-40"></div>

      
      <div className="relative w-full max-w-md bg-white shadow-xl rounded-2xl p-6 space-y-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Review Your Information
        </h2>

        <p className="text-sm text-gray-500">
          Please confirm your details before continuing
        </p>

        
        <div className="border rounded-xl p-4 space-y-2">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">Personal Info</h3>
            <button
              onClick={() => navigate("/personal-details", { state: formData })}
              className="text-green-600 text-sm hover:underline"
            >
              Edit
            </button>
          </div>

          <p>{fullName || "No name provided"}</p>
          <p>{formData.email || "No email provided"}</p>
          <p>{formData.phone || "No phone provided"}</p>
        </div>

     
        <div className="border rounded-xl p-4 space-y-2">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">Address</h3>
            <button
              onClick={() => navigate("/address", { state: formData })}
              className="text-green-600 text-sm hover:underline"
            >
              Edit
            </button>
          </div>

          <p>{formData.street || "No street provided"}</p>
          <p>
            {formData.city || "City"}, {formData.state || "State"}
          </p>
          <p>{formData.country || "No country provided"}</p>
        </div>

        
        <div className="border rounded-xl p-4 space-y-2">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold">Security</h3>
            <button
              onClick={() => navigate("/account-details", { state: formData })}
              className="text-green-600 text-sm hover:underline"
            >
              Edit
            </button>
          </div>

          <p>Password: ********</p>
        </div>

        
        <button
          onClick={() => alert("Create account logic here")}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-medium transition"
        >
          Confirm & Create Account
        </button>
      </div>
    </div>
  );
}
