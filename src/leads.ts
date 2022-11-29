export enum LeadType {
  Phone = 'phone',
  Email = 'email',
  Chat = 'chat',
  Form = 'form'
}

export interface Lead {
  id: number;
  name: string;
  createdAt: string;
  updatedAt: string;
  niche: string;
  area: string;
}

export interface LeadContact {
  phone: string;
  email: string;
  fullMessage: string;
}
