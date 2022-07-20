<script>
  import { Heart } from "svelte-heros";

  export /**
   * @type {any}
   */
  let pokemon;
  /**
   * @type {{ stats: { base_stat: any; }[]; }}
   */
  export /**
   * @type {any}
   */
  let pokemonId = 1;
</script>

<div
  class="bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
>
  <div class="flex justify-around bg-slate-100 bg-opacity-10 py-2">
    <h5 class="text-center text-lg sm:text-2xl font-bold text-white">
      {pokemon.name}
    </h5>
    <Heart class="text-red-700" on:click={() => {}} />
  </div>
  <a href={`/pokedex/${pokemon.name}`}>
    <img
      class="rounded-t-lg w-full"
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{pokemonId +
        1}.png"
      alt={pokemon.name}
    />
  </a>
</div>
