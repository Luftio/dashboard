import axios from "axios";
import jwt_decode from "jwt-decode";

import IAuthService from "./IAuthService";

const THINGSBOARD_SERVER = "https://app.luftio.com/tb/";

export default class ThingsboardService implements IAuthService {
  isLoggedIn() {
    return localStorage.getItem("token") != null;
  }

  getUserData() {
    const token = localStorage.getItem("token");
    if (token == null) return null;
    const decoded = jwt_decode(token) as Record<string, any>;
    return {
      email: decoded.email,
      fullName: decoded.email,
      scopes: decoded.scopes,
      customerId: decoded.customerId,
    };
  }

  async loginEmail(email: string, password: string) {
    const response = await axios.post(THINGSBOARD_SERVER + "api/auth/login", {
      username: email,
      password,
    });
    localStorage.setItem("token", response.data.token);
  }

  async logout() {
    localStorage.removeItem("token");
  }

  getAuthHeader() {
    const token = localStorage.getItem("token");
    return { "X-Authorization": "Bearer " + token };
  }

  // Singleton
  private static instance: ThingsboardService;
  static getInstance(): ThingsboardService {
    if (!this.instance) this.instance = new ThingsboardService();
    return this.instance;
  }
}
