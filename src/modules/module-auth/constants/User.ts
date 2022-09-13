/**
 *
 * @author dongntd@bkav.com on 06/09/2022.
 *
 */

const REG_EMAIL = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

const emptyUser = {
    uid: 'uid.test',
    info: {
        email: 'chep.tola@gmail.com',
        name: 'Chep',
        password: '12345',
        contact: '',
        age: '',
        phone: '',
    },
    image: {
        avatar: '',
        background: '',
    },
    type: 'account',
};

export { emptyUser, REG_EMAIL };
