import { emptyArray } from '../../constants/object';

function deepUpdate(original, keys = emptyArray, data) {
    if (keys.length === 0) {
        return data;
    }

    const currentKey = keys[0];

    if (Array.isArray(original)) {
        return original.map((value, index) =>
            index === currentKey
                ? deepUpdate(value, keys.slice(1), data) // (A)
                : data
        ); // (B)
    }

    if (typeof original === 'object' && !!original) {
        return Object.fromEntries(
            Object.entries(original).map((keyValuePair) => {
                const [k, value] = keyValuePair;
                if (k === currentKey) {
                    return [k, deepUpdate(value, keys.slice(1), data)]; // (C)
                } else {
                    return keyValuePair; // (D)
                }
            })
        );
    }

    // Primitive value
    return original;
}

function deepGet(original, keys = emptyArray) {
    if (keys.length === 0 || !original) return original;
    const currentKey = keys[0];
    if (keys.length === 1) return original[currentKey];
    return deepGet(original[currentKey], keys.slice(1));
}

export { deepGet, deepUpdate };
