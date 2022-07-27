<script>
  import { fade } from "svelte/transition";
  import { favs } from "../Favorites";

  import { SimpleSearch } from "flowbite-svelte";
  import Heading from "../components/Heading.svelte";
  import PokemonCardList from "../components/PokemonCardList.svelte";

  const favsArray = [...favs];

  console.log(favsArray);
</script>

<main>
  <div class="overlay" transition:fade={{ duration: 400 }}>
    <div class="mb-4"><Heading title="Favorites" /></div>
    <div class="my-4">
      <SimpleSearch />
    </div>
  </div>
  <PokemonCardList pokemons={favsArray} />
</main>
