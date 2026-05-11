export type CardProps = {
  name: string;
  number: string;
  text: string;
  icon: string;
  progress?: { current: number; total: number; percentage: number }; // optional
  badge?: string;
};

export const Cards = [
  {
    name: "Total Loan",
    number: "3",
    text: "Active loan account",
    icon: "💼",
  },
  {
    name: "Total Outstanding",
    number: "₦23,50,00",
    text: "Remaining principal amount",
    icon: "💴",
  },
  {
    name: "EMI Progress",
    number: "126/384",
    progress: { current: 126, total: 384, percentage: 32.8 },
    text: "32.8% completed",
    icon: "📊",
  },
  {
    name: "Next EMI",
    number: "₦21,495",
    text: "Due: 15 Jan 2025",
    badge: "Upcoming",
    icon: "📆",
  },
];
