export interface SuggestDataInterface {
  geo_lat: string;
  geo_lon: string;
  postal_code: string;
}
export interface SuggestInterface {
  value: string;
  data: SuggestDataInterface;
}

export interface SuggestProps {
  mode?: string;
}

export enum SuggestThemes {
  LIGHT = 'light',
  DARK = 'dark',
}
