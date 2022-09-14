<template>
    <div class="bg-light p-5 rounded">
      <h1>Firebase Authentication Example</h1>
      <p class="lead">This example is a quick exercise to sign in with a google acount.</p>
      <div v-if="currentUser == null">
          <button type="button" role="button" class="btn btn-primary"
              @click="signIn">
              Sign In
          </button>
      </div>
      <div v-else>
          <button type="button" role="button" class="btn btn-primary"
              @click="signOutUser">
              Sign Out
          </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import {
      getAuth,
      onAuthStateChanged,
      GoogleAuthProvider,
      signInWithPopup,
      signOut,
  } from 'firebase/auth';
  
  import {ref} from 'vue';
  
  const currentUser = ref(null);
  
  onMounted(() => {
      onAuthStateChanged(getAuth(), (user) => {
          if ( user != null ){
              currentUser.value = user;
          }else{
              currentUser.value = null;
          }
      });
  });
  
  function signIn()
  {
      const provider = new GoogleAuthProvider();
      signInWithPopup(getAuth(), provider)
      .then((auth) => {
          console.log("login", auth );
      })
      .catch((error) => {
          console.log("faild to login", error.code, error.message );
      });
  }
  
  function signOutUser()
  {
      signOut(getAuth());
  }
  
  </script>
  