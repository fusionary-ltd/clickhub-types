export declare enum TrackingType {
    LeadView = 0
}
export interface Tracking {
    leadId: number;
    userId: number;
    createdAt: string;
    type: TrackingType;
}
