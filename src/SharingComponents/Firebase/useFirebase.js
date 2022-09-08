import firebaseAuthentication from './firebaseAuthentication';
import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from 'firebase/auth';
import { useRef, useState } from 'react';
import { useEffect } from 'react';
firebaseAuthentication();
const useFirebase = () => {
  const auth = getAuth();
  const [user, setUser] = useState({});
  const [error, setError] = useState('');
  const googleProvider = new GoogleAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const fNameRef = useRef();
  const lNameRef = useRef();

  const emailRef = useRef();
  const passwordRef = useRef();
  const repasswordRef = useRef();

  // On Auth State Change _________________________

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  // Google Sign In___________________________________
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const googleUser = result.user;

        setUser(googleUser);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // Facebook Sign In____________________________________
  const handleFacebookSignIn = () => {
    signInWithPopup(auth, facebookProvider)
      .then((result) => {
        const facebookUser = result.user;

        setUser(facebookUser);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // Set Display name_________________________________

  const displayName = () => {
    updateProfile(auth.currentUser, {
      displayName: fNameRef.current.value + ' ' + lNameRef.current.value,
    })
      .then((result) => {})
      .catch((error) => {
        setError(error.message);
      });
  };

  // Sign Up with email address ___________________________________________

  const handleSignUp = (e) => {
    e.preventDefault();

    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((result) => {
        const signedUpUser = result.user;
        displayName();
        emailVerification();

        setUser(signedUpUser);
        alert('Resistered Successfully');
        setError('');
      })
      .catch((error) => {
        setError(error.message);
      });
    e.target.reset();
  };

  // Login With email and password __________________________________________________

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((result) => {
        const signInInfo = result.user;
        setUser(signInInfo);
        setError('');
      })
      .catch((error) => {
        setError(error.message);
      });
    e.target.reset();
  };

  // Verify Account  ________________________________________________________________

  const emailVerification = () => {
    sendEmailVerification(auth, emailRef.current.value).then((result) => {
      alert('check your email to verify account');
    });
  };

  // Log Out ______________________________________________________________

  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setUser('');
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  // Password Reset _________________________________________________

  const handleResetPassword = () => {
    sendPasswordResetEmail(auth, emailRef.current.value)
      .then(() => {
        // Password reset email sent!
        // ..

        setError('Please check your mail to reset the password');
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return {
    user,
    error,
    fNameRef,
    lNameRef,
    emailRef,
    passwordRef,
    repasswordRef,
    handleLogout,
    handleGoogleSignIn,
    handleSignIn,
    handleFacebookSignIn,
    handleSignUp,
    handleResetPassword,
  };
};
export default useFirebase;
