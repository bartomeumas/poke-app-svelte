<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import axios from "axios";

  import { Previous, Next } from "flowbite-svelte";
  import { SimpleSearch } from "flowbite-svelte";
  import Heading from "../components/Heading.svelte";
  import PokemonCardList from "../components/PokemonCardList.svelte";

  let counter = 0;
  let limit = 20;
  $: offset = counter * limit;
  /**
   * @type {string}
   */
  $: endpoint = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
  /**
   * @type {any[]}
   */
  export let pokemons = [];

  const fetchPokemons = async (endpoint) => {
    try {
      const response = await axios.get(endpoint);
      pokemons = response.data.results;
    } catch (error) {
      console.error(error);
    }
  };

  // This listens to changes in the current endpoint and if endpoint
  // it will rerun the fetch request

  $: refetch = fetchPokemons(endpoint);

  const decreaseCounter = () => {
    if (counter > 0) {
      counter = counter -= 1;
    }
  };

  const increaseCounter = () => {
    counter = counter += 1;
  };

  onMount(fetchPokemons);
</script>

<main>
  <div class="overlay" transition:fade={{ duration: 400 }}>
    <Heading title="Pokedex" />
    <div class="my-4">
      <SimpleSearch />
    </div>
  </div>
  <PokemonCardList {pokemons} />
  <div class="overlay flex justify-center my-4" transition:fade>
    <Previous on:previous={decreaseCounter} />
    <Next on:next={increaseCounter} />
  </div>
</main>
