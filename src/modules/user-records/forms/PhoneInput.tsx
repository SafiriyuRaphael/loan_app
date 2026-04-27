import { useState } from "react";
import { Countries, type Country } from "./Countries";

export default function PhoneInput() {
  const [selectedCountry, setSelectedCountry] = useState<Country>(Countries[0]);
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <div className="flex items-center border rounded px-3 py-2 w-full gap-2">
      <span className="text-xl">{selectedCountry.flag}</span>

      <span className="text-gray-700 font-medium">{selectedCountry.code}</span>

      <input
        type="text"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value.replace(/\D/g, ""))}
        placeholder="Enter phone number"
        className="w-full outline-none"
      />
    </div>
  );
}
