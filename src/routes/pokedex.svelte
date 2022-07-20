<script>
  import axios from "axios";
  import { onMount } from "svelte";

  import { SimpleSearch } from "flowbite-svelte";
  import { Previous, Next } from "flowbite-svelte";
  import Heading from "../components/Heading.svelte";
  import PokemonCardList from "../components/PokemonCardList.svelte";

  let limit = 20;
  let endpoint = "https://pokeapi.co/api/v2/pokemon?limit=" + { limit };
  /**
   * @type {any[]}
   */
  export let pokemons = [];

  onMount(async function () {
    try {
      const response = await axios.get(endpoint);
      pokemons = response.data.results;
      console.log(pokemons);
    } catch (error) {
      console.error(error);
    }
  });

  const previous = () => {
    limit += 20;
    console.log(limit);
  };
  const next = () => {
    limit -= 20;
    console.log(limit);
  };
</script>

<main>
  <Heading title="Pokedex" />
  <SimpleSearch />
  <PokemonCardList {pokemons} />
  <div class="flex justify-center mt-4">
    <Previous on:previous={previous} icon />
    <Next on:next={next} icon />
  </div>
</main>
