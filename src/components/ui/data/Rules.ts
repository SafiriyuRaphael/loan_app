import { Calendar, CreditCard, Wallet, UserCheck } from "lucide-react";

export type Props = {
  title: string;
  desc: string;
};

export const rules = [
  {
    title: "Age Requirement",
    desc: "Applicant must be at least 18 years old and legally eligible.",
    icon: Calendar,
  },
  {
    title: "Valid Identification",
    desc: "A government-issued ID is required for verification.",
    icon: CreditCard,
  },
  {
    title: "Steady Income",
    desc: "You must have a stable source of income or business revenue.",
    icon: Wallet,
  },
  {
    title: "Basic Profile",
    desc: "Complete your personal and contact information correctly.",
    icon: UserCheck,
  },
];
