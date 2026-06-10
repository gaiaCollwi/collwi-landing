export interface UserReviewSimple {
  id: string;
  content: string;
  approved: boolean;
  userProfile?: { country: string, role: string };
}
