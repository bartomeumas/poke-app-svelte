<script>
  import { fade } from "svelte/transition";
  import { favorites, favs } from "../Favorites";
  import { Heart } from "svelte-heros";

  export /**
   * @type {any}
   */
  let pokemon;

  const { name, id } = pokemon;

  export let showName = true;
  export let isDetails = false;
  let isFavorited = false;

  if (favs.has(name)) {
    isFavorited = true;
  }
  /**
   * @type {{ stats: { base_stat: any; }[]; }}
   */
  export /**
   * @type {any}
   */
  let pokemonId = 1;
</script>

<div
  class="overlay bg-white rounded-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700 w-full h-min sm:max-w-xs sm:mr-4"
  transition:fade={{ delay: 25 * pokemonId, duration: 400 }}
>
  {#if showName}
    <div
      class="flex justify-between px-2 sm:px-4 bg-slate-100 bg-opacity-10 py-2"
    >
      <h5 class="mx-auto text-lg sm:text-2xl font-bold text-white capitalize">
        {name}
      </h5>
      <Heart
        class={isFavorited ? "text-red-500 my-auto" : "text-gray-500 my-auto"}
        on:click={() => {
          favorites.toggleFavorite(name);
          isFavorited = !isFavorited;
        }}
      />
    </div>{/if}
  <a href={`/pokedex/${name}`}>
    {#if !isDetails}
      <img
        class="rounded-t-lg w-full"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{pokemonId +
          1}.png"
        alt={name}
      />
    {/if}
    {#if isDetails}
      <img
        class="rounded-t-lg w-full"
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{id}.png"
        alt={name}
      />
    {/if}
  </a>
</div>
