import { Mail } from "lucide-react";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";

export default function Footers() {
  return (
    <footer className=" bg-green-700 text-gray-300 py-15 px-6 md:px-20">
      <div className="grid md:grid-cols-4 gap-15">
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-white">Loanify</h2>

          <p className="text-sm text-gray-300 leading-relaxed">
            Providing fast, secure, and flexible loan solutions to help you
            achieve your financial goals with confidence.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-green-400 cursor-pointer">Home</li>
            <li className="hover:text-green-400 cursor-pointer">Loans</li>
            <li className="hover:text-green-400 cursor-pointer">About</li>
            <li className="hover:text-green-400 cursor-pointer">Contact</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-green-400 cursor-pointer">
              Personal Loan
            </li>
            <li className="hover:text-green-400 cursor-pointer">
              Business Loan
            </li>
            <li className="hover:text-green-400 cursor-pointer">
              Student Loan
            </li>
            <li className="hover:text-green-400 cursor-pointer">
              Agriculture Loan
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-4">Contact</h4>

          <div className="space-y-3 text-sm">
            <p className="flex items-center gap-2">
              <Mail size={16} /> support@loanify.com
            </p>

            <div className="flex gap-3 mt-4">
              <FaSquareFacebook className="cursor-pointer hover:text-green-500" />
              <FaSquareXTwitter className="cursor-pointer hover:text-green-500" />
              <FaSquareInstagram className="cursor-pointer hover:text-green-500" />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-green-700 mt-12 pt-6 text-center text-sm text-white">
        © {new Date().getFullYear()} Loanify. All rights reserved.
      </div>
    </footer>
  );
}
