import { useState, useEffect } from 'react';
import { toPercentage, toMegabytes, toReadable } from './helpers';
import { UnitsType, HookOptionsType, HookReturnType } from './typings';

const defaultUnits: UnitsType = {
  gigabytes: 'GB',
  megabytes: 'MB',
  percentage: '%',
};

const defaultOptions: HookOptionsType = {
  notSupportedMessage: 'Not supported.',
  units: defaultUnits,
};

export default function useStorageInformation({
  notSupportedMessage,
  units,
}: HookOptionsType = defaultOptions): HookReturnType {
  const [storageSpace, setStorageSpace] = useState<StorageEstimate | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(function effect(): void {
    (async function calculateStorageSpace(): Promise<void> {
      try {
        if (!navigator?.storage?.estimate) {
          throw new Error(notSupportedMessage);
        }

        setStorageSpace(await navigator.storage.estimate());
      } catch (internalError) {
        setError(internalError.message);
      }
    })();
  }, []);

  if (error) {
    return {
      ready: false,
      error,
    };
  }

  if (!storageSpace?.quota || !storageSpace?.usage) {
    return {
      ready: false,
    };
  }

  return {
    ready: true,
    available: {
      megabytes: toMegabytes(storageSpace.quota - storageSpace.usage, units),
      percentage: toPercentage((storageSpace.quota - storageSpace.usage) / storageSpace.quota, units),
      raw: storageSpace.quota - storageSpace.usage,
      readable: toReadable(storageSpace.quota - storageSpace.usage, units),
    },
    total: {
      megabytes: toMegabytes(storageSpace.quota, units),
      percentage: toPercentage(100, units),
      raw: storageSpace.quota,
      readable: toReadable(storageSpace.quota, units),
    },
    used: {
      megabytes: toMegabytes(storageSpace.usage, units),
      percentage: toPercentage(storageSpace.usage / storageSpace.quota, units),
      raw: storageSpace.usage,
      readable: toReadable(storageSpace.usage, units),
    },
  };
}
