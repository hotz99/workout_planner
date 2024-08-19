import { writable } from "svelte/store";
import type { User } from "firebase/auth";
import { firebase } from "$lib";
import { onAuthStateChanged } from "firebase/auth";

const userStore = writable<User | null>(null);

onAuthStateChanged(firebase.auth, (firebaseUser) => {
  userStore.set(firebaseUser);
});

export { userStore };
