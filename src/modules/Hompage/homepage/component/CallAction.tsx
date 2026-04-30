import Buttons from "../../../../components/ui/buttons/Buttons";
import InputField from "../../../../components/ui/input-field";
import { formData } from "../../views/PersonalLoan";

function CallAction() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); //  stops page reload

    console.log("Form submitted!");
  };

  return (
    <section className=" bg-green-700 py-15 px-6 md:px-20 ">
      <h1 className="text-4xl text-white text-center mb-5 font-bold">
        <i>Contact Us</i>
      </h1>
      <div className=" grid md:grid-cols-2 gap-10 items-center">
        <div className="bg-white rounded-2xl shadow-lg h-full ">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-7 px-4 mt-5"
          >
            <InputField
              placeholder="Enter Your Name"
              name="Name"
              type="text"
              value={formData.name}
              onChange={() => {}}
              variant="secondary"
            />

            <InputField
              placeholder="Your Email Address"
              name="Your Email Address"
              type="text"
              variant="secondary"
              value={formData.email}
              onChange={() => {}}
            />

            <InputField
              placeholder="Leave a Message"
              name="Message"
              type="text"
              value={formData.message}
              onChange={() => {}}
              variant="secondary"
            />
          </form>
          <div className="flex justify-end p-5">
            <Buttons type="submit" text="Sumbit" variant="primary" />
          </div>
          {/* <h1 className="text-gray-900 font-semibold text-lg">
            Form goes here
          </h1> */}
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
