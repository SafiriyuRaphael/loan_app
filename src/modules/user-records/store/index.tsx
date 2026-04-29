import { create } from "zustand";

type UserRecordsStoreType = {
  userRecords: UserRecordType | null;
  setUserRecords: (records: UserRecordType) => void;
  updateUserRecords: (records: Partial<UserRecordType>) => void;
};

export const UserRecordsStore = create<UserRecordsStoreType>((set) => ({
  userRecords: null,
  setUserRecords: (records: UserRecordType) => set({ userRecords: records }),
  updateUserRecords: (records: Partial<UserRecordType>) =>
    set((state) => ({
      userRecords: { ...state.userRecords, ...(records as UserRecordType) },
    })),
}));
