import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "../../../utils/firebaseConfig/index";

const createUser = async ({ data, cbSuccess, cbFailure }) => {
    const { email, password } = data;
    try {
        const { user } = await createUserWithEmailAndPassword(auth, email, password);
        cbSuccess();
    } catch (e) {
        cbFailure(e);
        //cbSuccess, cbFailure
    }
};

const authenticateUser = async ({ data, cbSuccess, cbFailure }) => {
    const { email, password } = data;
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        cbSuccess(user);
    } catch (e) {
        cbFailure(e);
    }
};

export {
    createUser,
    authenticateUser
}

