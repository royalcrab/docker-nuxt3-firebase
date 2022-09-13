import { initializeApp } from 'firebase/app';
//import { getFunctions, connectFunctionsEmulator } from "firebase/functions";
//import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
//import { getStorage, connectStorageEmulator } from "firebase/storage";
//import { getAuth, connectAuthEmulator } from "firebase/auth";

import { defineNuxtPlugin } from '#app';

export default defineNuxtPlugin(() => {

    const runtimeConfig = useRuntimeConfig();
    const firebaseConfig = {
        apiKey: runtimeConfig.public.firebase.apiKey,
        authDomain: runtimeConfig.public.firebase.authDomain,
        projectId: runtimeConfig.public.firebase.projectId,
        storageBucket: runtimeConfig.public.firebase.storageBucket,
        messagingSenderId: runtimeConfig.public.firebase.messagingSenderId,
        appId: runtimeConfig.public.firebase.appId,
    };

    initializeApp(firebaseConfig);

    const isEmulating = window.location.hostname === "localhost";
    if (isEmulating) {
        const auth = getAuth();
        connectAuthEmulator(auth, "http://localhost:9099");

        //const storage = getStorage();
        //connectStorageEmulator(storage, "localhost", 9199);

        //const db = getFirestore(firebase);
        //connectFirestoreEmulator(db, 'localhost', 8080); 

        //const functions = getFunctions(firebase);
        //connectFunctionsEmulator(functions, "localhost", 5001);
    }
});
