import { useState } from "react";
import { Buttons } from "../../../../components/ui/buttons";
import { useNavigate } from "react-router";

function Navbar() {
  const navigate = useNavigate();
  const navItems = ["Home", "Loans", "How It Works", "About Us", "Contact"];
  const [menuOpen, setMenuOpen] = useState(false);

  const routeToLogin = () => {
    navigate("/auth/signin");
  };
  

  const routeToApply = () => {
    navigate("/auth/signup");
  };

  return (
    <header className="z-10 sticky top-0 flex justify-between items-center w-full px-6 md:px-20 py-3 bg-white shadow-sm">
      <h1 className="text-2xl md:text-3xl font-bold text-green-700">
        AY LOANIFY
      </h1>

      <button
        className="md:hidden text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col items-center gap-6 py-6 md:hidden">
          <a href="/" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#" onClick={() => setMenuOpen(false)}>
            Loans
          </a>
          <a href="#" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
        </div>
      )}

      <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
        {navItems.map((li) => (
          <li
            key={li}
            className="cursor-pointer hover:text-green-600 transition"
          >
            {li}
          </li>
        ))}
      </ul>

      <div className="hidden md:flex items-center gap-4">
        <Buttons text="Login" variant="secondary" onClick={routeToLogin} />
        <Buttons text="Apply Now" variant="primary" onClick={routeToApply} />
      </div>
    </header>
  );
}

export default Navbar;
