<script context="module">
  import PokemonCard from "../../components/PokemonCard.svelte";
  import PokemonStats from "../../components/PokemonStats.svelte";
  import PokemonMoves from "../../components/PokemonMoves.svelte";
  import PokemonDetails from "../../components/PokemonDetails.svelte";
  /** @type {import('../../../.svelte-kit/types/src/routes/pokedex/__types/[id]').Load} */

  export async function load({ params, fetch }) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.name}`);
    const pokemon = await res.json();
    console.log(pokemon);

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
  <div class="sm:flex justify-between gap-x-4">
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
