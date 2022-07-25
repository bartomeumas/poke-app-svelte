<script context="module">
  import PokemonCard from "../../components/PokemonCard.svelte";
  import PokemonStats from "../../components/PokemonStats.svelte";
  import PokemonMoves from "../../components/PokemonMoves.svelte";
  import PokemonDetails from "../../components/PokemonDetails.svelte";
  import { favorites } from "../../Favorites";
  /** @type {import('../../../.svelte-kit/types/src/routes/pokedex/__types/[id]').Load} */
  export let isFavorited;
  export async function load({ params, fetch }) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
    const pokemon = await res.json();
    const { height, abilities } = pokemon;

    console.log({ height }, { abilities });
    console.log(favorites);

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

  let pokemonStats = pokemon.stats;

  let pokemonMoves = pokemon.moves;
</script>

<div>
  <div class="sm:flex justify-betwePen gap-x-4">
    <div>
      <PokemonCard {pokemon} isDetails={true} />
      <PokemonDetails details={pokemon} />
    </div>
    <div class="w-full ">
      <PokemonStats stats={pokemonStats} />
      <PokemonMoves moves={pokemonMoves} />
    </div>
  </div>
</div>
