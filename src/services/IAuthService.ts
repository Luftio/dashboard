import UserData from "../types/UserData";

export default interface IAuthService {
  isLoggedIn(): boolean;
  getUserData(): UserData | null;
  loginEmail(email: string, password: string): Promise<void>;
  logout(): Promise<void>;
}
