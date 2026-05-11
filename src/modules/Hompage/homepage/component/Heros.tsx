import { motion } from "framer-motion";
import Buttons from "../../../../components/ui/buttons/Buttons";
import Loan from "../../../../assets/image/Loan.svg";
import { useNavigate } from "react-router";

export default function Heros() {
  const navigate = useNavigate();

  const routeToApply = () => {
    navigate("/auth/signup");
  };
  return (
    <section
      className="pt-6 px-6 md:px-20 min-h-screen bg-linear-to-b from-white to-green-50"
      id="home"
    >
      <div className=" grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
            Fast & Easy Loans <br />
            <span className="text-green-700">For Your Needs</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-lg">
            Get quick access to personal, business (SME), and student loans with
            flexible repayment and zero hidden charges.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Buttons
              text="Apply Now"
              variant="primary"
              onClick={routeToApply}
            />
            <Buttons text="Learn More" variant="secondary" />
          </div>

          <div className="mt-8 flex flex-wrap gap-6 text-sm text-gray-500">
            <span>✔ No hidden fees</span>
            <span>✔ Fast approval</span>
            <span>✔ Secure process</span>
          </div>
        </motion.div>

        <div>
          <img src={Loan} alt="" />
        </div>
      </div>
    </section>
  );
}
