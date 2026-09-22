import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.cofig";
import { createContext, useEffect, useState } from "react";
import useAxiosPublic from "../Hook/useAxiosPublic";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const googleProvider = new GoogleAuthProvider();
    const [loading, setLoading] = useState(true);

    const axiosPublic = useAxiosPublic();
    // create user-------
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)

    }
    // ------------login--------------------
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    // ----------Google Login-------------
    const googleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    // -------------logout------------
    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }
    // ----------update profile------------
    const updateUserProfile = (name, PhotoURL) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: PhotoURL
        })
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {

            setUser(currentUser);
            if (currentUser) {
                // get token and store clint side

                // const userInfo = { email: currentUser.email };
                // axiosPublic.post('/jwt', userInfo)
                //     .then(res => {
                //         if (res.data.token) {
                //             localStorage.setItem('access-token', res.data.token);
                //         }
                //     })


            }
            else {
                // TODO: remove token(if token in the client side)
                localStorage.removeItem('access-token')

            }
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    }, [axiosPublic])
    const allInfo = {
        user,
        loading,
        googleProvider,
        createUser,
        signIn,
        googleLogin,
        logOut,
        updateUserProfile,
        setUser,


    }
    return (
        <AuthContext.Provider value={allInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;