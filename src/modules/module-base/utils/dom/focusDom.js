const focusDom = (dom, toStart = false) => {
    if (!dom) return null;
    dom.focus();
    if (typeof window.getSelection !== 'undefined' && typeof document.createRange !== 'undefined') {
        // HTML5: chrome, firefox, IE>=9, Opera, Safari...
        // Tao doi tuong 1 vung chon (chua xac dinh).
        const range = document.createRange();
        // Xac dinh vi tri vung chon tren giao dien la noi dung doi tuong hien tai (boi chon toan bo noi dung)
        range.selectNodeContents(dom);
        // Lay danh sach cac vung dang chon tren giao dien
        if (typeof toStart === 'boolean') {
            // True: Chuyen con tro ve dau
            // False: Chuyen con tro ve cuoi
            // undefined: chon toan bo
            range.collapse(toStart);
        }
        // Lay danh sach cac vung dang chon tren giao dien
        const sel = window.getSelection();
        // Bo chon tat ca cac vung nay
        sel.removeAllRanges();
        // Chinh thuc boi chon vung chon khoi tao ben tren: range.
        sel.addRange(range);
    } else if (typeof document.body.createTextRange !== 'undefined') {
        // IE<9
        const range = document.body.createTextRange();
        range.moveToElementText(dom);
        if (toStart) {
            // True: Chuyen con tro ve dau
            // False: Chuyen con tro ve cuoi
            // undefined: chon toan bo
            range.collapse(toStart);
        }
        range.select();
    }
    return null;
};

export default focusDom;
