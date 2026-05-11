export type props = {
  Icon: string;
  bankname: string;
  loantype: string;
  fee: string;
  amount: string;
  emi: string;
  topay: string;
  interest: string;
  rate: string;
  next: string;
  date: string;
  text: string;
  progress: string;
  progressbar?: { current: number; total: number; percentage: number };
};
export const Loans = [
  {
    Icon: "🏦",
    bankname: "HDFC Bank",
    loantype: "Home Loan",
    fee: "Outstanding",
    amount: "₦18,000,000",
    emi: "EMI Amount",
    topay: "₦2,149,50",
    interest: "Interest Rate",
    rate: "8.5% p.a.",
    next: "Next Due",
    date: "📆 15 Jan, 2025",
    text: "Progress",
    progress: "48/240 EMIs",
    progressbar: { current: 48, total: 240, percentage: 8.5 },
  },
  {
    Icon: "🏤",
    bankname: "ICICI Bank",
    loantype: "Personal Loan",
    fee: "Outstanding",
    amount: "₦4,000,000",
    emi: "EMI Amount",
    topay: "₦128,500",
    interest: "Interest Rate",
    rate: "9.2% p.a.",
    next: "Next Due",
    date: "📆 20 Jan, 2025",
    text: "Progress",
    progress: "36/84 EMIs",
    progressbar: { current: 36, total: 84, percentage: 9.2 },
  },
  {
    Icon: "🏤",
    bankname: "HDFC Bank",
    loantype: "Home Loan",
    fee: "Outstanding",
    amount: "₦18,000,000",
    emi: "EMI Amount",
    topay: "₦2,149,50",
    interest: "Interest Rate",
    rate: "8.5% p.a.",
    next: "Next Due",
    date: "📆 15 Jan, 2025",
    text: "Progress",
    progress: "48/240 EMIs",
    progressbar: { current: 48, total: 240, percentage: 8.5 },
  },
];
