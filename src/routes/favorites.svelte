<script>
  import { favs } from "../Favorites";
  import Heading from "../components/Heading.svelte";
  import PokemonCardList from "../components/PokemonCardList.svelte";

  const favsArray = [...favs];

  console.log(favsArray);
</script>

<main>
  <div class="mb-4"><Heading title="Favorites" /></div>
  <PokemonCardList pokemons={favsArray} />
</main>
