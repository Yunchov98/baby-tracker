type FeedingType = 'breast' | 'bottle' | 'solid';

export interface FeedingLog {
  id: string;
  babyId: string;
  food: string;
  amount: number;
  time: Date;
  type: FeedingType;
  notes?: string;
}
