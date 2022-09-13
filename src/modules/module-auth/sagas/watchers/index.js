import { startAppWatcher, signInWatcher } from './SignIn';

const SignInSaga = [startAppWatcher, signInWatcher];
export default SignInSaga;
