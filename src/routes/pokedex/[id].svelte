<script>
  import PokemonCard from "../../components/PokemonCard.svelte";

  import axios from "axios";
  import { onMount } from "svelte";

  import Heading from "../../components/Heading.svelte";

  /**
   * @type {{ name: any; }}
   */
  export let pokemon;

  // let endpoint = `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`;
  let endpoint = `https://pokeapi.co/api/v2/pokemon/pikachu`;
  /**
   * @type {any[]}
   */

  onMount(async function () {
    try {
      const response = await axios.get(endpoint);
      pokemon = response.data;
      console.log(pokemon);
    } catch (error) {
      console.error(error);
    }
  });
</script>

<div>
  <Heading title={pokemon.name} />
  <!--<PokemonCard {pokemon} /> -->
</div>
