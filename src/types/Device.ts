import DeviceData from "./DeviceData";

export default interface Device {
  id: string;
  name: string;
  color: string;
  data: DeviceData[];
}
