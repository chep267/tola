/**
 * C
 */

class LocalStorage {
    get = (key: string) => {
        return window.localStorage.getItem(key);
    };

    set = (key: string, data: string) => {
        window.localStorage.setItem(key, data);
    };

    remove = (key: string) => {
        window.localStorage.removeItem(key);
    };

    clear = () => {
        window.localStorage.clear();
    };

    getQuery = (results: Array<any>) => {
        let headerFields = {};
        if (results) {
            results.forEach((result) => {
                headerFields = { [result[0]]: result[1], ...headerFields };
            });
        }
        return Promise.resolve(headerFields);
    };

    getList = (keys: Array<string>) => {
        const results = keys.map((key) => [key, this.get(key)]);
        return this.getQuery(results);
    };
}

const localStorage = new LocalStorage();
export default localStorage;
