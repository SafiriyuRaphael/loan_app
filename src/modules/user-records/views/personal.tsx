import PersonalDetailsForm from "../forms/personal-dta";

const PersonalDetails = () => {
  return (
    <div className="text-black ">
      <h1 className="text-2xl font-bold">Your Personal Details</h1>
      <p>Fill in your personal details to get started</p>
      <PersonalDetailsForm />
    </div>
  );
};

export default PersonalDetails;
