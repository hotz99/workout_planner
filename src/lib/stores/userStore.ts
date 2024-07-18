import { writable } from "svelte/store";
import type { User } from "firebase/auth";
import { firebase } from "$lib";
import { onAuthStateChanged } from "firebase/auth";

const user = writable<User | null>(null);

onAuthStateChanged(firebase.auth, (firebaseUser) => {
    user.set(firebaseUser);
});

export { user };
