type DiaperType = 'wet' | 'dirty' | 'mixed';

export interface DiaperLog {
  id: string;
  babyId: string;
  type: DiaperType;
  time: Date;
  notes?: string;
}
