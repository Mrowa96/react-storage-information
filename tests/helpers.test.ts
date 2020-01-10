import { toPercentage, toMegabytes, toReadable } from '../src/helpers';

const defaultUnits = {
  gigabytes: 'GB',
  megabytes: 'MB',
  percentage: '%',
};

describe('helpers functions', () => {
  it('should return percentage value', () => {
    const value = toPercentage(0.7231719, defaultUnits);

    expect(value).toEqual('72.32%');
  });

  it('should return value converted to megabytes', () => {
    const value = toMegabytes(20213044, defaultUnits);

    expect(value).toEqual('19.28MB');
  });

  it('should return value converted to readable format', () => {
    const value = toReadable(20213044567, defaultUnits);

    expect(value).toEqual('19.28GB');
  });
});
