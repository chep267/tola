const msgVI = {
    lang: 'NGÔN NGỮ',
    type: 'Loại tin tức',
    en: 'Tiếng Việt',
    vi: 'Tiếng Anh',
    welcome: 'Xin chào',
    login: {
        account: 'Tài khoản',
        signOut: 'Đăng xuất',
        signIn: 'Đăng nhập',
        register: 'Đăng kí',
        recover: {
            check: 'Kiểm tra',
            code: 'Mã xác thực',
            pass: 'Đổi mật khẩu',
            change: 'Xác nhận',
        },
        placeholder: {
            email: 'Nhập email...',
            password: 'Nhập mật khẩu...',
            exactPass: 'Xác nhận mật khẩu...',
            code: 'Nhập code...'
        },
        fb: 'Đăng nhập qua Facebook',
        gg: 'Đăng nhập qua Google',
        handleText: {
            register: {
                first: 'Bạn chưa có tài khoản?',
                second: 'Đăng ký ngay!',
            },
            login: {
                first: 'Bạn đã có tài khoản?',
                second: 'Trở về đăng nhập!',
            },
            recover: {
                first: 'Quên mật khẩu?',
                second: 'Lấy lại!',
            },
        },
        notify: {
            login: {
                wrong: 'Sai thông tin tài khoản hoặc mật khẩu! Nhập lại để tiếp tục...',
                null: 'Tài khoản này chưa được đăng ký!',
                server: 'Máy chủ đang bận! Xin hãy thử lại sau ít phút.',
                invalid: 'Email chưa đúng, hãy nhập lại!',
                email: 'Bạn chưa nhập email!',
                pass: 'Bạn chưa nhập mật khẩu!',
            },
            register: {
                wrong: 'Email này đã được đăng ký!\nHãy thử đăng nhập lại hoặc quên mật khẩu.',
                invalid: 'Email chưa đúng, hãy nhập lại!',
                email: 'Bạn chưa nhập email!',
                pass: 'Bạn chưa nhập mật khẩu!',
                weak: 'Mật khẩu phải chứa ít nhất 6 kí tự! Hãy nhập lại...',
                passHill: 'Bạn chưa nhập mật khẩu xác nhận!',
                passWrong: 'Mật khẩu xác nhận không khớp!',
                success: 'Bạn đã đăng ký thành công!',
            },
            recover: {
                email: {
                    wrong: 'Email này chưa được đăng ký!',
                    invalid: 'Email chưa đúng, hãy nhập lại!',
                    email: 'Bạn chưa nhập email!',
                },
                code: {
                    wrong: 'Code không đúng, hãy nhập lại!',
                    code: 'Bạn chưa nhập code!',
                    start: 'Mã code đã được gửi tới hòm thư email của bạn.',
                    new: 'Đã gửi code mới! Hãy kiểm tra hòm thư email của bạn.',
                    server: 'Chưa gửi được email! Nhấn "gửi mã mới" để lấy code!'
                },
                pass: {
                    wrong: 'Email này đã được đăng ký!\nHãy thử đăng nhập lại hoặc quên mật khẩu.',
                    weak: 'Mật khẩu phải chứa ít nhất 6 kí tự! Hãy nhập lại...',
                    pass: 'Bạn chưa nhập mật khẩu!',
                    passHill: 'Bạn chưa nhập mật khẩu xác nhận!',
                    passWrong: 'Mật khẩu xác nhận không khớp!',
                    success: 'Bạn đã đổi mật khẩu thành công!',
                }
            }

        }
    },
    messenger: {
        chat: 'Nhắn tin',
        blog: 'Cá nhân',
        search: 'Tìm kiếm',
        delete: 'Xóa tin nhắn',
        copy: 'Sao chép tin nhắn',
        revoke: 'Thu hồi tin nhắn',
        empty: 'Không có tin nhắn!',
        you: 'Bạn',
        history: {
            like: 'Đã nhấn like',
            file: 'Đã gửi tệp tin',
            image: 'Đã gửi ảnh',
            video: 'Đã gửi video',
            revoke: 'Đã thu hồi tin nhắn',
            delete: 'Đã xóa tin nhắn',
        }
    },
    user: {
        name: 'Tên',
        contact: 'Liên hệ',
        phone: 'Điện thoại',
        null: 'trống',
        change: 'Nhấn đúp chuột để chỉnh sửa',
        cloud: 'Ghi chú của tôi',
        bot: 'Trợ lý ảo',
        alert: {
            name: 'Tên không được để trống! Hãy nhập lại...',
            phone: 'Số điện thoại không đúng! Hãy nhập lại...',
            contact: 'Liên hệ phải là một email! Hãy nhập lại...',
        },
    },
    thread: {
        share: {
            image: 'Ảnh đã chia sẻ',
            video: 'Video đã chia sẻ',
            file: 'Tệp đã chia sẻ',
            null: 'Thư mục trống',
        }
    }

};

export default msgVI;