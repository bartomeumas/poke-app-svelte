<script>
  import {
    Navbar,
    NavBrand,
    NavHamburger,
    NavLi,
    NavUl,
  } from "flowbite-svelte";

  import { getAuth, signOut } from "firebase/auth";

  const auth = getAuth();
  signOut(auth)
    .then(() => {
      console.log("Signed out");
    })
    .catch((error) => {
      console.log(error.message);
    });
</script>

<Navbar let:hidden let:toggle>
  <NavBrand href="/">
    <img src="/images/pokeball.png" class="mr-3 h-6 sm:h-9" alt="pokeball" />
    <span
      class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
    >
      PokeYOU
    </span>
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden}>
    <NavLi href="/">Home</NavLi>
    <NavLi href="/favorites">Favorites</NavLi>
    <NavLi href="/my-teams">My Teams</NavLi>
    <button on:click={signOut} class="text-red-500">Sign Out</button>
  </NavUl>
</Navbar>
