<script context="module">
  import { fade } from "svelte/transition";

  import PokemonCard from "../../components/PokemonCard.svelte";
  import PokemonStats from "../../components/PokemonStats.svelte";
  import PokemonMoves from "../../components/PokemonMoves.svelte";
  import PokemonDetails from "../../components/PokemonDetails.svelte";
  /** @type {import('../../../.svelte-kit/types/src/routes/pokedex/__types/[id]').Load} */
  export let isFavorited;
  export async function load({ params, fetch }) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
    const pokemon = await res.json();

    if (res.ok) {
      return {
        props: {
          pokemon,
        },
      };
    }

    return {
      status: res.status,
      error: new Error("Could not find Pokemon"),
    };
  }
</script>

<script>
  // @ts-nocheck

  export /**
   * @type {{ name: any; }}
   */
  let pokemon;

  let { stats, moves } = pokemon;
</script>

<div
  class="overlay sm:flex justify-between gap-x-4"
  transition:fade={{ delay: 0, duration: 400 }}
>
  <div>
    <PokemonCard {pokemon} isDetails={true} />
    <PokemonDetails details={pokemon} />
  </div>
  <div class="w-full ">
    <PokemonStats {stats} />
    <PokemonMoves {moves} />
  </div>
</div>
