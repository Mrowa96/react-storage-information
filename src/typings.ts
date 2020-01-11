export type UnitsType = {
  gigabytes: string;
  megabytes: string;
  percentage: string;
};

export type HookOptionsType = {
  notSupportedMessage?: string;
  units?: UnitsType;
};

export type HookReturnType = {
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
