import Buttons from "../../../../components/ui/buttons/Buttons";

function CallAction() {
  return (
    <section className=" bg-green-700 py-15 px-6 md:px-20 ">
      <div className=" grid md:grid-cols-2 gap-10 items-center">
        <div className="bg-white rounded-2xl p-8 shadow-lg h-full flex items-center justify-center">
          <h1 className="text-gray-900 font-semibold text-lg">
            Form goes here
          </h1>
        </div>

        <div className="text-white space-y-5">
          <h3 className="text-3xl md:text-4xl font-bold leading-snug">
            Get the Best Loan Experience Today
          </h3>

          <p className="text-green-100 leading-relaxed max-w-md">
            Enjoy fast approvals, flexible repayment options, and a seamless
            application process designed to meet your financial needs without
            stress.
          </p>

          <div>
            <Buttons text="Contact Us" variant="primary" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default CallAction;
