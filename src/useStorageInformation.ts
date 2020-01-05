import { useState, useEffect } from 'react';
import { toPercentage, toMegabytes, toReadable } from './helpers';
import { UnitsType, OptionsType, ReturnType } from './typings';

const defaultUnits: UnitsType = {
  gigabytes: 'GB',
  megabytes: 'MB',
  percentage: '%',
};

const defaultOptions: OptionsType = {
  notSupportedMessage: 'Not supported.',
  units: defaultUnits,
};

function useStorageInformation({ notSupportedMessage, units }: OptionsType = defaultOptions): ReturnType {
  const [storageSpace, setStorageSpace] = useState<StorageEstimate | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async function calculateStorageSpace() {
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
      error,
      ready: false,
    };
  }

  if (!storageSpace?.quota || !storageSpace?.usage) {
    return {
      ready: false,
    };
  }

  return {
    available: {
      megabytes: toMegabytes(storageSpace.quota - storageSpace.usage, units),
      percentage: toPercentage((storageSpace.quota - storageSpace.usage) / storageSpace.quota, units),
      raw: storageSpace.quota - storageSpace.usage,
      readable: toReadable(storageSpace.quota - storageSpace.usage, units),
    },
    ready: true,
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

export default useStorageInformation;
