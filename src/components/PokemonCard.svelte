<script>
  import { Heart } from "svelte-heros";

  export /**
   * @type {any}
   */
  let pokemon;
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
  <a href={pokemon.url}>
    <img
      class="rounded-t-lg w-full"
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{pokemonId +
        1}.png"
      alt={pokemon.name}
    />
  </a>
  <!-- <div class="bg-slate-100 bg-opacity-10 rounded-b-lg text-center">
      <div class="text-white p-2">
        <div class="flex justify-evenly">
          <div>
            <p>HP <b>{pokemon.stats[0].base_stat}</b></p>
            <p>Spe <b>{pokemon.stats[5].base_stat}</b></p>
          </div>
          <div>
            <p>Atk <b>{pokemon.stats[1].base_stat}</b></p>
            <p>SpA <b>{pokemon.stats[2].base_stat}</b></p>
          </div>
          <div>
            <p>Def <b>{pokemon.stats[3].base_stat}</b></p>
            <p>SpDef <b>{pokemon.stats[4].base_stat}</b></p>
          </div>
        </div>
      </div> 
    </div>-->
</div>
