export interface User {
  user_id: String;
  username: String;
  avatar: String;
  name: String;
  email: String;
  location: String | null;
  role: "member" | "moderator" | "admin";
  active: Boolean;
}
