export type KYCForm = {
  accountNumber: string;
  bank: string;
  accountName: string;
  identityNumber: string;
};

// validation.ts
export const validateKYC = (form: any, idType: string) => {
  const errors: any = {};

  // Account Number
  if (!form.accountNumber) {
    errors.accountNumber = "Account number is required";
  } else if (form.accountNumber.length !== 10) {
    errors.accountNumber = "Must be 10 digits";
  }

  // Bank
  if (!form.bank) {
    errors.bank = "Select a bank";
  }

  // Identity
  if (!form.identityNumber) {
    errors.identityNumber = `${idType.toUpperCase()} is required`;
  } else if (form.identityNumber.length !== 11) {
    errors.identityNumber = "Must be 11 digits";
  }

  return errors;
};
