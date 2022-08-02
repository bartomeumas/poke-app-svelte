<script>
  import { goto } from "$app/navigation";
  import Heading from "../Heading.svelte";

  import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
  } from "firebase/auth";

  export /**
   * @type {string}
   */
  let title;
  /**
   * @type {any}
   */
  let errorMessage;

  const auth = getAuth();

  function login() {
    let email = document.getElementById("emailInput").value;
    let password = document.getElementById("passInput").value;
    if (title == "Login") {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          localStorage.setItem("uid", user.uid);
          goto("/");
        })
        .catch((error) => {
          errorMessage = error.message;
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
          goto("/");
        })
        .catch((error) => {
          errorMessage = error.message;
        });
    }
  }
</script>

<div class="w-full max-w-md mx-auto">
  <Heading {title} />
  <form
    class="bg-white shadow-md rounded px-8 pt-6 pb-8 my-4"
    on:submit|preventDefault={login}
  >
    <div class="mb-2">
      <label
        for="emailInput"
        class="block text-gray-700 text-sm font-bold mb-2"
      >
        Email
      </label>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="emailInput"
        type="text"
        placeholder="email"
      />
    </div>
    <div>
      <label for="passInput" class="block text-gray-700 text-sm font-bold mb-2">
        Password
      </label>
      <input
        class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
        id="passInput"
        type="password"
        placeholder="password"
      />
      <!-- <p class="text-red-500 text-xs italic">Please choose a password.</p> -->
    </div>
    <div class="flex items-center justify-between">
      <button
        class="bg-gray-800 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
      >
        {#if title == "Login"}
          Sign In
        {:else}
          Sign Up
        {/if}
      </button>
      {#if title == "Login"}
        <a
          class="inline-block align-baseline font-bold text-sm text-gray-600 hover:text-gray-800"
          href="/signup"
        >
          Register account
        </a>
      {:else}
        <a
          class="inline-block align-baseline font-bold text-sm text-gray-600 hover:text-gray-800"
          href="/login"
        >
          Already have an account? Sign in
        </a>
      {/if}
    </div>
    {#if errorMessage}
      <div>{errorMessage}</div>
    {/if}
  </form>
</div>
