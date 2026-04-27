export type Props = {
  title: string;
  desc: string;
};

import { Shield, Zap, Wallet, Smartphone } from "lucide-react";

export const benefits = [
  {
    icon: Zap,
    title: "Fast Approval",
    desc: "Get your loan approved within minutes without unnecessary delays or paperwork.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    desc: "We use advanced security systems to ensure your personal and financial data is always protected.",
  },
  {
    icon: Wallet,
    title: "Flexible Repayment",
    desc: "Enjoy repayment plans designed to fit your financial situation and lifestyle comfortably.",
  },
  {
    icon: Smartphone,
    title: "Easy Application",
    desc: "Apply for a loan anytime, anywhere with a simple and user-friendly process.",
  },
];
