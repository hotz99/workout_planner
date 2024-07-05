import { firebase } from "$lib";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";

const logIn = async () => {
  try {
    signInWithPopup(firebase.auth, firebase.googleProvider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential!.accessToken;
        // The signed-in user info.
        const user = result.user;
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
  logIn,
  logOut,
};

export { auth };