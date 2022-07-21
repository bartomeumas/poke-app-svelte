<script context="module">
  import PokemonCard from "../../components/PokemonCard.svelte";
  import PokemonStats from "../../components/PokemonStats.svelte";
  import PokemonDetails from "../../components/PokemonDetails.svelte";
  /** @type {import('./__types/[id]').Load} */

  export async function load({ params, fetch }) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.id}`);
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
  export /**
   * @type {{ name: any; }}
   */
  let pokemon;

  let pokemonStats = {
    hp: pokemon.stats[0].base_stat,
    attack: pokemon.stats[1].base_stat,
    defense: pokemon.stats[2].base_stat,
    specialAttack: pokemon.stats[3].base_stat,
    specialDefense: pokemon.stats[4].base_stat,
    speed: pokemon.stats[5].base_stat,
  };
</script>

<div>
  <div class="sm:flex justify-between ">
    <PokemonCard {pokemon} isDetails={true} />
    <div class="w-full lg:flex lg:gap-x-4">
      <PokemonDetails details={pokemon} />
      <PokemonStats stats={pokemonStats} />
    </div>
  </div>
</div>
