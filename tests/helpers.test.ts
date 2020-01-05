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
});
