export const enum UserStatus {
  Active,
  Inactive,
  Pending,
  Deleted,
  Banned,
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  businessName?: string;
  state: string;
  city: string;
  phoneNumber: string;
}

export interface InternalUser extends User {
  createdAt: string | Date;
  updatedAt: string | Date;
  password: string;
  verificationToken?: string;
  status: UserStatus;
}

export type FullUser = User & InternalUser;