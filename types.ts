export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  type: 'text' | 'chat' | 'audio';
  image?: string;
}

export interface CurriculumItem {
  title: string;
  description: string;
  icon: string;
  isSpecial?: boolean;
}

export interface EnrollmentFormData {
  fullName: string;
  email: string;
  whatsapp: string;
  country: string;
  knowledgeLevel: 'Beginner' | 'Intermediate' | 'Advanced';
  paymentMethod: 'Crypto' | 'Card' | 'Bank Transfer';
}