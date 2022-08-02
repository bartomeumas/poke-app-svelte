<script>
  import "../app.css";
  import App from "./fb";
  import { onMount } from "svelte";
  import { getAuth, onAuthStateChanged } from "firebase/auth";
  import { goto } from "$app/navigation";

  import NavBar from "../components/NavBar.svelte";

  onMount(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("Welcome mmg");
      } else {
        goto("/login");
      }
    });
  });
</script>

<NavBar />
<div class="mx-10 my-4"><slot /></div>
