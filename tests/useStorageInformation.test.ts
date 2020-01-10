import { renderHook, act } from '@testing-library/react-hooks';
import useStorageInformation from '../src/useStorageInformation';

const estimateMock = jest.fn();

describe('useStorageInformation hook', () => {
  it('shoulde return only ready property on initial call', async () => {
    let renderedHook;

    // @ts-ignore: Unreachable code error
    navigator.storage = {
      estimate: () => {},
    };

    await act(async () => {
      renderedHook = renderHook(() => useStorageInformation());
    });

    expect(renderedHook.result.current.ready).toEqual(false);
    expect(renderedHook.result.current.error).toBeUndefined();
  });

  it('shoulde return valid values', async () => {
    // @ts-ignore: Unreachable code error
    navigator.storage = {
      estimate: estimateMock,
    };
    estimateMock.mockResolvedValueOnce({
      quota: 117052647363,
      usage: 14133187,
    });

    const { result, waitForNextUpdate } = renderHook(() => useStorageInformation());

    await waitForNextUpdate();

    expect(result.current.ready).toEqual(true);
    expect(result.current.error).toBeUndefined();
    expect(result.current.available).toEqual({
      megabytes: '111616.63MB',
      percentage: '99.99%',
      raw: 117038514176,
      readable: '111.62GB',
    });
    expect(result.current.total).toEqual({
      megabytes: '111630.10MB',
      percentage: '10000.00%',
      raw: 117052647363,
      readable: '111.63GB',
    });
    expect(result.current.used).toEqual({
      megabytes: '13.48MB',
      percentage: '0.01%',
      raw: 14133187,
      readable: '13.48MB',
    });
  });

  it('shoulde return error if storage manager is not available', () => {
    // @ts-ignore: Unreachable code error
    navigator.storage = {
      estimate: undefined,
    };

    const { result } = renderHook(() => useStorageInformation());

    expect(result.current.ready).toEqual(false);
    expect(result.current.error).toEqual('Not supported.');
  });
});
