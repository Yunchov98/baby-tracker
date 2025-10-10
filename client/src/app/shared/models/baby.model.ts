export interface Baby {
  id: string;
  name: string;
  birthDate: Date;
  gender: 'male' | 'female';
  photoUrl?: string;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
  parentId: string;
  weightAtBirth?: number; // in grams
  heightAtBirth?: number; // in centimeters
  headCircumferenceAtBirth?: number; // in centimeters
  allergies?: string[];
  medicalConditions?: string[];
  immunizations?: { name: string; date: Date }[];
  milestones?: { milestone: string; date: Date }[];
  favoriteFoods?: string[];
  sleepPatterns?: string;
  feedingPreferences?: string;
  diaperChanges?: string;
  growthCharts?: {
    date: Date;
    weight: number;
    height: number;
    headCircumference: number;
  }[];
  emergencyContacts?: {
    name: string;
    relation: string;
    phone: string;
    email?: string;
  }[];
  pediatricianInfo?: {
    name: string;
    phone: string;
    email?: string;
    address?: string;
  };
  createdBy: string; // userId of the creator
  sharedWith?: string[]; // array of userIds with whom the baby profile is shared
}
