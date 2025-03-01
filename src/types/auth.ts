export interface UserData {
  sub: string; // User ID
  name: string;
  email: string;
  picture?: string;
}

export interface GoogleAuthResponse {
  credential: string;
}

export type UserToken = string | null;
