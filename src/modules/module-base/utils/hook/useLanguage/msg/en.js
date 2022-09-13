const msgEN = {
    lang: 'LANGUAGE',
    type: 'News type',
    en: 'Vietnamese',
    vi: 'English',
    welcome: 'Welcome',
    login: {
        account: 'Account',
        signOut: 'SignOut',
        signIn: 'SignIn',
        register: 'Register',
        recover: {
            check: 'Check',
            code: 'Verification codes',
            pass: 'Change password',
            change: 'Change',
        },
        placeholder: {
            email: 'Press email...',
            password: 'Press password...',
            exactPass: 'Exact password...',
            code: 'Enter code...'
        },
        fb: 'SignIn with Facebook',
        gg: 'SignIn with Google ',
        handleText: {
            register: {
                first: 'You don\'t have account?',
                second: 'Register now!',
            },
            login: {
                first: 'You have an account?',
                second: 'SignIn now!',
            },
            recover: {
                first: 'Forgot password?',
                second: 'Recover now!',
            },
        },
        notify: {
            login: {
                wrong: 'Wrong account information or password! Re-enter to continue...',
                invalid: 'Invalid email, please re-enter!',
                email: 'You have not entered your email',
                pass: 'You have not entered your password!',
                null: 'This account is not registered!',
                server: 'Server is busy! Please try again in a few minutes.',
            },
            register: {
                wrong: 'This email has been register!\nTry to SignIn or Forgot password',
                invalid: 'Invalid email, please re-enter!',
                email: 'You have not entered your email',
                pass: 'You have not entered your password!',
                weak: 'Password must contain at least 6 characters! Please re-enter...',
                passHill: 'You have not entered the confirmation password!',
                passWrong: 'Confirmation password does not match!',
                success: 'You have successfully registered!',
            },
            recover: {
                email: {
                    wrong: 'This email is not registered!',
                    invalid: 'Invalid email, please re-enter!',
                    email: 'You have not entered your email',
                },
                code: {
                    wrong: 'The code is incorrect, please re-enter!',
                    code: 'You have not entered the code!',
                    start: 'The code has been sent to your email inbox.',
                    new: 'New code sent! Please check your email inbox.',
                    server: 'Email not sent! Click "send new code" to get the code!'
                },
                pass: {
                    wrong: 'This email has been register!\nTry to SignIn or Forgot password',
                    weak: 'Password must contain at least 6 characters! Please re-enter...',
                    pass: 'You have not entered your password!',
                    passHill: 'You have not entered the confirmation password!',
                    passWrong: 'Confirmation password does not match!',
                    success: 'You have successfully changed your password!',
                }
            }
        }
    },
    messenger: {
        chat: 'Chat',
        blog: 'Blog',
        search: 'search',
        delete: 'Delete message',
        copy: 'Copy message',
        revoke: 'Revoke message',
        empty: 'No messages!',
        you: 'You',
        history: {
            like: 'Sent like',
            file: 'Sent file',
            image: 'Sent image',
            video: 'Sent video',
            revoke: 'Revoked the message',
            delete: 'Deleted the message',
        }
    },
    user: {
        name: 'Name',
        contact: 'Contact',
        phone: 'Phone',
        null: 'no info',
        change: 'Double click to edit',
        cloud: 'My Cloud',
        bot: 'Chat Bot',
        alert: {
            name: 'Name cannot be blank! Please re-enter...',
            phone: 'Incorrect phone number! Please re-enter...',
            contact: 'Contact must be an email! Please re-enter...',
        },
    },
    thread: {
        share: {
            image: 'Shared photo',
            video: 'Shared video',
            file: 'Shared file',
            null: 'Empty',
        }
    },
};

export default msgEN;