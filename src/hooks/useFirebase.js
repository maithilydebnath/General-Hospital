import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState, useEffect } from 'react';
import initializeAuthentication from '../components/Login/Firebase/firebase.init';

initializeAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogin, setIsLogin] = useState(false);
    const [name, setName] = useState('');

    const auth = getAuth();
    // const handleName = e => {
    //     setName(e.target.value);
    // }
    const handleEmailChange = e => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }

    const handleRegistration = e => {
        e.preventDefault();
        setIsLoading(true)
        console.log(email, password);
        if (password.length < 6) {

            setError('Password should be at least 6 characters');
            return;
        }
        if (!/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/.test(password)) {
            setError('minimum 8 characters length, 2 letters in Upper Case, 1 Special Character,2 numerals (0-9) and 3 letters in Lower Case')
            return;
        }

        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                // Signed in 
                const user = result.user;
                console.log(user)
                setUserName();
                setError(' ');
                setIsLoading(false);


            })


            .catch((error) => {

                setError(error.message);

            });

    }
    const handleLogin = e => {
        setIsLoading(true)
        e.preventDefault();
        return signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                // Signed in 
                const user = result.user;
                console.log(user)
                setUserName();

                setError(' ');


                setIsLoading(false);

            })
            .catch((error) => {

                setError(error.message);

            });
    }
    // const loginProcess = (email, password) => {
    //     // setIsLoading(true);
    //     signInWithEmailAndPassword(auth, email, password)
    //         .then(result => {
    //             // Signed in 
    //             const user = result.user;
    //             console.log(user)
    //             setError(' ');
    //             // setIsLoading(false);

    //         })
    //         .catch((error) => {

    //             setError(error.message);

    //         });
    // }
    const setUserName = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {

        }).catch((error) => {

        });
    }
    // const createNewUser = (email, password) => {
    //     // setIsLoading(true);
    //     createUserWithEmailAndPassword(auth, email, password)
    //         .then(result => {
    //             // Signed in 
    //             const user = result.user;
    //             console.log(user)
    //             setError(' ');
    //             // setIsLoading(false);


    //         })


    //         .catch((error) => {

    //             setError(error.message);

    //         });

    // }

    // const handleRegistration = e => {
    //     e.preventDefault();
    //     console.log(email, password);
    //     if (password.length < 6) {

    //         setError('Password should be at least 6 characters');
    //         return;
    //     }
    //     if (!/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/.test(password)) {
    //         setError('minimum 8 characters length, 2 letters in Upper Case, 1 Special Character,2 numerals (0-9) and 3 letters in Lower Case')
    //         return;
    //     }

    //     isLogin ? loginProcess(email, password) : createNewUser(email, password)
    // }
    // const loginProcess = (email, password) => {
    //     // setIsLoading(true);
    //     signInWithEmailAndPassword(auth, email, password)
    //         .then(result => {
    //             // Signed in 
    //             const user = result.user;
    //             console.log(user)
    //             setError(' ');
    //             // setIsLoading(false);

    //         })
    //         .catch((error) => {

    //             setError(error.message);

    //         });
    // }
    // const createNewUser = (email, password) => {
    //     // setIsLoading(true);
    //     createUserWithEmailAndPassword(auth, email, password)
    //         .then(result => {
    //             // Signed in 
    //             const user = result.user;
    //             console.log(user)
    //             setError(' ');
    //             // setIsLoading(false);


    //         })


    //         .catch((error) => {

    //             setError(error.message);

    //         });

    // }
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        setIsLoading(true);



        return signInWithPopup(auth, googleProvider)
            // .then(result => {
            //     setUser(result.user);
            // })
            .finally(() => setIsLoading(false));
    }

    // observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }

    return {
        user, setUser,
        isLoading,
        signInUsingGoogle,
        logOut,
        // createNewUser,
        // loginProcess,
        handleRegistration,
        handleEmailChange,
        handlePasswordChange,
        error, setError,
        handleLogin,
        setUserName
    }
}

export default useFirebase;