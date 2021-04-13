export default interface DeviceData {
  color: string;
  value: number;
  minValue: number;
  maxValue: number;
  change: number;
  title: string;
  type: string;
  values: { ts: Date; value: number }[];
}
