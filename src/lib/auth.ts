import { firebase } from "$lib";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

const logIn = async () => {
  try {
    signInWithPopup(firebase.auth, firebase.googleProvider)
      .then((result) => {
        console.log("logged in:", result.user.email);

      }).catch((error) => {
        console.log("failed to create logIn popup:", error);
      });
  } catch (error) {
    console.error("error logging in:", error);
  }
};

const logOut = async () => {
  try {
    await signOut(firebase.auth);
  } catch (error) {
    console.error("error logging out:", error);
  }
};

const auth = {
  signIn: logIn,
  signOut: logOut,
};

export { auth };
