<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import axios from "axios";

  import { Previous, Next } from "flowbite-svelte";
  import { SimpleSearch } from "flowbite-svelte";
  import Heading from "../../components/Heading.svelte";
  import PokemonCardList from "../../components/PokemonCardList.svelte";

  let counter = 0;
  let limit = 20;
  let offset = counter * limit;
  /**
   * @type {string}
   */
  $: endpoint = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
  /**
   * @type {any[]}
   */
  export let pokemons = [];

  const fetchPokemons = async function () {
    try {
      const response = await axios.get(endpoint);
      pokemons = response.data.results;
    } catch (error) {
      console.error(error);
    }
  };

  onMount(fetchPokemons);
</script>

<main>
  <div>
    <Heading title="Pokedex" />
    <div class="my-4">
      <SimpleSearch />
    </div>
    <PokemonCardList {pokemons} />
    <Previous
      on:previous={() => {
        if (counter > 0) {
          counter -= 1;
        }
      }}
    />
    <Next
      on:next={() => {
        counter += 1;
      }}
    />
  </div>
</main>
