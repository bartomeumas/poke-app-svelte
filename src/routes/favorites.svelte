<script>
  import { favorites } from "../Favorites";

  import Heading from "../components/Heading.svelte";
  import PokemonCardList from "../components/PokemonCardList.svelte";

  console.log(favorites);
</script>

<main>
  <Heading title="Favorites" />
  <PokemonCardList pokemons={favorites} />
</main>
