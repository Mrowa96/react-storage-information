import { UnitsType } from './typings';

export function toPercentage(value: number, units: UnitsType): string {
  return `${(value * 100).toFixed(2)}${units.percentage}`;
}

export function toMegabytes(value: number, units: UnitsType): string {
  return `${(value / (1024 * 1024)).toFixed(2)}${units.megabytes}`;
}

export function toGigabytes(value: number, units: UnitsType): string {
  return `${(value / (1024 * 1024 * 1000)).toFixed(2)}${units.gigabytes}`;
}

export function toReadable(value: number, units: UnitsType): string {
  return value > 1024 * 1024 * 100 ? `${toGigabytes(value, units)}` : `${toMegabytes(value, units)}`;
}
