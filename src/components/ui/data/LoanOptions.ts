// import { title } from "process";
import { User, Briefcase, GraduationCap, Tractor } from "lucide-react";
export type LoanOpt = {
  title: string;
  desc: string;
};

export const Loan = [
  {
    icon: User,
    title: "Personal Loan",
    desc: "Quick personal funding for your needs",
  },
  {
    icon: Briefcase,
    title: "Business Loan",
    desc: "Grow your business with ease",
  },
  {
    icon: GraduationCap,
    title: "Student Loan",
    desc: "Support your education and academic goals",
  },
  {
    icon: Tractor,
    title: "Agriculture Loan",
    desc: "Funding to support your farming needs, from planting to harvest.",
  },
];
