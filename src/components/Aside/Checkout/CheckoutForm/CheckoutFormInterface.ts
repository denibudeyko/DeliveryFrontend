export interface CheckoutFormInterface {
  name: string;
  phone: string;
  email: string;
  floor: string;
  office: string;
  apartment: string;
  date: string;
  time: string;
  additionalComment: string;
}

export enum checkoutDaysEnum {
  TODAY = 'Today',
  TOMMOROW = 'Tomorrow',
}
