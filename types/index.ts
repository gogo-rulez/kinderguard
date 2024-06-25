export interface ContactInformation {
  phone_number: string;
  email: string;
}

export interface EmergencyContactInformation {
  name: string;
  relationship: string;
  phone_number: string;
}

export interface PhysicianContactInformation {
  name: string;
  phone_number: string;
}

export interface BasicInformation {
  full_name: string;
  date_of_birth: string;
  gender: string;
  photo: string;
  parent_guardian_names: string[];
  contact_information: ContactInformation;
}

export interface HealthMedicalInformation {
  allergies: string[];
  medical_conditions: string[];
  immunization_records: string[];
  emergency_contact_information: EmergencyContactInformation;
  physician_contact_information: PhysicianContactInformation;
  special_dietary_requirements: string[];
}

export interface Meals {
  breakfast: string;
  lunch: string;
  snacks: string;
}

export interface NapTimes {
  start_time: string;
  end_time: string;
}

export interface DailyActivityLog {
  date: string;
  attendance_status: string;
  meals: Meals;
  nap_times: NapTimes;
  activities: string[];
  mood_behavior: string;
}

export interface DevelopmentalMilestones {
  physical_development: string;
  cognitive_development: string;
  social_emotional_development: string;
  special_achievements_highlights: string;
}

export interface ParentalCommunication {
  message: string;
  date: string;
}

export interface IncidentReport {
  date: string;
  description: string;
  action_taken: string;
}

export interface Child {
  id: number;
  kindergardenId: number;
  groupId: number;
  basic_information: BasicInformation;
  health_medical_information: HealthMedicalInformation;
  daily_activity_logs: DailyActivityLog[];
  developmental_milestones: DevelopmentalMilestones;
  incidents_reports: IncidentReport[];
  parental_communication: ParentalCommunication[];
}
