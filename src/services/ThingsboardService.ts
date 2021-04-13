import axios from "axios";
import jwt_decode from "jwt-decode";

import IAuthService from "./IAuthService";
import UserData from "../types/UserData";

const THINGSBOARD_SERVER = "https://app.luftio.com/tb/";
const APP_BACKEND_SERVER = "https://app.luftio.com/backend/";

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

  private getAuthHeader() {
    const token = localStorage.getItem("token");
    return { "X-Authorization": "Bearer " + token };
  }

  async getDevices() {
    var userDetails = this.getUserData();
    var url = THINGSBOARD_SERVER;
    if (userDetails?.scopes[0] != "TENANT_ADMIN") {
      url += "api/customer/" + userDetails?.customerId;
    } else {
      url += "api/tenant";
    }
    url += "/devices?page=0&pageSize=100";
    const response = await axios.get(url, {
      headers: this.getAuthHeader(),
    });
    return response.data.data;
  }

  async getReadings(deviceId: string) {
    const response = await axios.get(THINGSBOARD_SERVER + "api/plugins/telemetry/DEVICE/" + deviceId + "/values/timeseries", {
      headers: this.getAuthHeader(),
    });
    const data = response.data;
    return {
      co2: Math.round(data.co2[0].value),
      temperature: Math.round(data.temp[0].value * 10) / 10,
      pressure: Math.round(data.pres[0].value / 100),
      humidity: Math.round(data.hum[0].value * 10) / 10,
    };
  }

  async getReadingsTimeseries(deviceId: string, keys: string, startTs: number, endTs: number, interval: number) {
    const response = await axios.get(THINGSBOARD_SERVER + `api/plugins/telemetry/DEVICE/${deviceId}/values/timeseries?keys=${keys}&startTs=${startTs}&endTs=${endTs}&interval=${interval}&agg=AVG`, {
      headers: this.getAuthHeader(),
    });
    const data = response.data;
    return data;
  }

  // Singleton
  private static instance: ThingsboardService;
  static getInstance(): ThingsboardService {
    if (!this.instance) this.instance = new ThingsboardService();
    return this.instance;
  }
}
