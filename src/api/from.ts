export const TuyaFroms = ["tuya", "kalevolsmart"] as const;
export type TuyaFrom = (typeof TuyaFroms)[number];
