export declare const enum UserStatus {
    Active = 0,
    Inactive = 1,
    Pending = 2,
    Deleted = 3,
    Banned = 4
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
