// import React from 'react'

import CallAction from "../homepage/component/CallAction";
import Eligibility from "../homepage/component/Eligibility";
import Faq from "../homepage/component/Faqs";
import Footers from "../homepage/component/Footers";
import Heros from "../homepage/component/Heros";
import LoanOption from "../homepage/component/LoanOption";
import Navbar from "../homepage/component/Navbar";
import Process from "../homepage/component/Process";
import Testimony from "../homepage/component/Testimony";
import WhyChooseUs from "../homepage/component/WhyUs";

function HomePage() {
  return (
    <div>
      <Navbar />
      <Heros />
      <LoanOption />
      <Process />
      <WhyChooseUs />
      <Eligibility />
      <Testimony />
      <CallAction />
      <Faq />
      <Footers />
    </div>
  );
}

export default HomePage;
