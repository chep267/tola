function Encrypt(value: string) {
    if (!value || value === '') return '';
    let result = '';
    const length = value.length;

    for (let i = 0; i < length; i += 1) {
        if (i < length - 1) {
            result += value.charCodeAt(i) + 10;
            result += '-';
        } else {
            result += value.charCodeAt(i) + 10;
        }
    }
    return result;
}

function Decrypt(value: string) {
    if (!value || value === '') return '';
    let result = '';
    const array: any = value.split('-');
    const length = array.length;

    for (let i = 0; i < length; i += 1) {
        result += String.fromCharCode(array[i] - 10);
    }
    return result;
}

export { Encrypt, Decrypt };
