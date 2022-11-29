export enum TrackingType {
  LeadView,
}

export interface Tracking {
  leadId: number;
  userId: number;
  createdAt: string;
  type: TrackingType;
}