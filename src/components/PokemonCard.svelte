<script>
  import { Heart } from "svelte-heros";

  export /**
   * @type {any}
   */
  let pokemon;
  export let showName = true;
  export let isDetails = false;
  /**
   * @type {{ stats: { base_stat: any; }[]; }}
   */
  export /**
   * @type {any}
   */
  let pokemonId = 1;
</script>

<div
  class="bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700 w-full h-min sm:max-w-xs sm:mr-4"
>
  {#if showName}
    <div
      class="flex justify-between px-2 sm:px-4 bg-slate-100 bg-opacity-10 py-2"
    >
      <h5 class="mx-auto text-lg sm:text-2xl font-bold text-white">
        {pokemon.name}
      </h5>
      <Heart class="text-red-700 my-auto" on:click={() => {}} />
    </div>{/if}
  <a href={`/pokedex/${pokemon.name}`}>
    {#if !isDetails}
      <img
        class="rounded-t-lg w-full"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{pokemonId +
          1}.png"
        alt={pokemon.name}
      />
    {/if}
    {#if isDetails}
      <img
        class="rounded-t-lg w-full"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{pokemon.id}.png"
        alt={pokemon.name}
      />
    {/if}
  </a>
</div>
