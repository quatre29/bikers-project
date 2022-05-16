export interface User {
  user_id: string;
  username: string;
  avatar: string;
  name: string;
  email: string;
  location: string | null;
  role: "member" | "moderator" | "admin" | "developer" | "blogger";
  active: boolean;
  description?: string;
  created_at?: Date;
}
