# react-storage-information

## How to use?

Simple, just import `useStorageInformation` function from `react-storage-information` and call it in component like this:

```
const { used, total, ready, error } = useStorageInformation();
```

## How it works?

After initial call hook will return simple object - `{ ready: false }`.

After some time properties will be updated. Their values will depend on `StorageManager` existence is browser.

If `StorageManager` exists in `navigator` hook will return object with type `HookReturnType`. Example response:

```
{
    ready: true,
    available: {
        megabytes: '111616.63MB',
        percentage: '99.99%',
        raw: 117038514176,
        readable: '111.62GB',
    },
    total: {
        megabytes: '111630.10MB',
        percentage: '10000.00%',
        raw: 117052647363,
        readable: '111.63GB',
    },
    used: {
        megabytes: '13.48MB',
        percentage: '0.01%',
        raw: 14133187,
        readable: '13.48MB',
    },
    native: {
      quota: 117052647363,
      usage: 14133187,
    },
}
```

If `StorageManager` is not available, hook will return:

```
{
    ready: false,
    error: 'Not supported.
}
```

## Configuration

You can pass those options to hook:

- notSupportedMessage: string, default = 'Not supported' - will be used in `error` property when `StorageManager` is not available
- units: UnitsType, default = `{ gigabytes: 'GB', megabytes: 'MB', percentage: '%' }` - will be used during formated properties creation

## Supported browsers

Because hook relies on [StorageManager API](https://developer.mozilla.org/en-US/docs/Web/API/StorageManager). Current support is a little bit poor, check it [here](https://caniuse.com/#feat=mdn-api_storagemanager).

Currently situation looks like this:

- Firefox >= 57
- Firefox Android - **not supported**
- Chrome >= 48
- Chrome Android >= 79
- Chrome iOS >= **not supported**
- Opera >= 64
- Opera Android >= 48
- Safari - **not supported**
- Safari iOS - **not supported**
- IE - **not supported**
- Edge - **not supported**
- Samsung Browser >= 5

## Requirements

- react >= 16.9.0
