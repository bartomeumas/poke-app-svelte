<script>
  import {
    Navbar,
    NavBrand,
    NavHamburger,
    NavLi,
    NavUl,
  } from "flowbite-svelte";
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
    <NavLi href="/" active={true}>Home</NavLi>
    <NavLi href="/pokedex">Pokedex</NavLi>
    <NavLi href="/build-your-team">Build your team</NavLi>
    <NavLi href="/favorites">Favorites</NavLi>
    <NavLi href="/my-teams">My Teams</NavLi>
  </NavUl>
</Navbar>
