export type KYCForm = {
  accountNumber: string;
  bank: string;
  accountName: string;
  identityNumber: string;
};

export type KYCErrors = Partial<Record<keyof KYCForm, string>>;
