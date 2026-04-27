import { User, FileText, Upload, Search, Wallet } from "lucide-react";

export type Props = {
  title: string;
  desc: string;
};

export const steps = [
  {
    title: "Login / Sign Up",
    desc: "Access your account securely",
    icon: User,
  },
  {
    title: "Apply for Loan",
    desc: "Fill out the application form",
    icon: FileText,
  },
  {
    title: "Upload Documents",
    desc: "Submit required documents",
    icon: Upload,
  },
  {
    title: "Review",
    desc: "We verify and approve",
    icon: Search,
  },
  {
    title: "Get Funds",
    desc: "Receive money instantly",
    icon: Wallet,
  },
];
