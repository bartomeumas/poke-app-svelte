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
  {#each pokemons as pokemon, index (pokemon)}
    <div>
      {#if pokemon.url}
        <PokemonCard {pokemon} pokemonId={Number(pokemon.url.split("/")[6])} />
      {:else}
        <PokemonCard {pokemon} pokemonId={index + 1} />
      {/if}
    </div>
  {/each}
</div>
