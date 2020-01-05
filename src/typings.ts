export type UnitsType = {
  gigabytes: string;
  megabytes: string;
  percentage: string;
};

export type OptionsType = {
  notSupportedMessage: string;
  units: UnitsType;
};

export type ReturnType = {
  ready: boolean;
  error?: string;
  total?: {
    raw: number;
    percentage: string;
    megabytes: string;
    readable: string;
  };
  used?: {
    raw: number;
    percentage: string;
    megabytes: string;
    readable: string;
  };
  available?: {
    raw: number;
    percentage: string;
    megabytes: string;
    readable: string;
  };
};
