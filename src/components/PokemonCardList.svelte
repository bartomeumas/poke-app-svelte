<script>
  import PokemonCard from "./PokemonCard.svelte";
  /**
   * @type {any}
   */
  export let pokemons;
</script>

<div
  class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
>
  {#each pokemons as pokemon (pokemon)}
    <div>
      <PokemonCard {pokemon} pokemonId={Number(pokemon.url.split("/")[6])} />
    </div>
  {/each}
</div>
