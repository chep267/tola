import firebaseApp from '../utils/firebase';
import {
    getDatabase,
    ref as dbRef,
    query,
    get,
    onValue,
    onChildChanged,
    onChildAdded,
    onChildRemoved,
    set,
    update,
    remove,
    QueryConstraint,
    DataSnapshot,
} from 'firebase/database';

const db = getDatabase(firebaseApp);

export interface payloadPropsWithCallBack {
    type?: string;
    path?: string;
    data?: object;
    queryConstraints?: QueryConstraint[];
    fnCallBack(snapshot: DataSnapshot, previousChildName?: string | null | undefined): unknown;
}

export interface payloadPropsWithoutCallBack {
    type?: string;
    path?: string;
    data?: object;
    queryConstraints?: QueryConstraint[];
}

const FIREBASE_GET = (payload: payloadPropsWithoutCallBack) => {
    const { path, queryConstraints } = payload;
    if (!queryConstraints || queryConstraints.length === 0) {
        return get(query(dbRef(db, path)));
    }
    return get(query(dbRef(db, path), ...queryConstraints));
};

const FIREBASE_ON_GET = (payload: payloadPropsWithCallBack) => {
    const { type, path, fnCallBack } = payload;
    if (type === 'add') return onChildAdded(dbRef(db, path), fnCallBack);
    if (type === 'remove') return onChildRemoved(dbRef(db, path), fnCallBack);
    if (type === 'change') return onChildChanged(dbRef(db, path), fnCallBack);
    return onValue(dbRef(db, path), fnCallBack);
};

const FIREBASE_SET = (payload: payloadPropsWithoutCallBack) => {
    const { path, data } = payload;
    return set(dbRef(db, path), data);
};

const FIREBASE_UPDATE = (payload: payloadPropsWithoutCallBack) => {
    const { path, data = {} } = payload;
    return update(dbRef(db, path), data);
};

const FIREBASE_REMOVE = (payload: payloadPropsWithoutCallBack) => {
    const { path } = payload;
    return remove(dbRef(db, path));
};

export { FIREBASE_GET, FIREBASE_SET, FIREBASE_UPDATE, FIREBASE_REMOVE, FIREBASE_ON_GET };
