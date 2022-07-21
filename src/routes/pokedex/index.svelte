<!-- <script>
  import { onMount } from "svelte";
  import axios from "axios";
  import { Query, useQueryClient } from "@sveltestack/svelte-query";

  import { SimpleSearch } from "flowbite-svelte";
  import { Previous, Next } from "flowbite-svelte";
  import Heading from "../../components/Heading.svelte";
  import PokemonCardList from "../../components/PokemonCardList.svelte";

  let limit = 20;
  const changeLimit = 20;
  /**
   * @type {string}
   */
  let endpoint;
  $: endpoint = `https://pokeapi.co/api/v2/pokemon?limit=${limit}`;
  /**
   * @type {any[]}
   */
  export let pokemons = [];

  const fetchPokemons = async function () {
    try {
      const response = await axios.get(endpoint);
      pokemons = response.data.results;
    } catch (error) {
      console.error(error);
    }
  };

  onMount(fetchPokemons);

  const previous = () => {
    if (limit + 1 > changeLimit) {
      limit -= changeLimit;
      console.log(limit);
    }
  };
  const next = () => {
    limit += changeLimit;
    console.log(limit);
  };
</script> -->
<script>
  import { onMount } from "svelte";
  import axios from "axios";
  import { Query, useQueryClient } from "@sveltestack/svelte-query";

  import { SimpleSearch } from "flowbite-svelte";
  import { Previous, Next } from "flowbite-svelte";
  import Heading from "../../components/Heading.svelte";
  import PokemonCardList from "../../components/PokemonCardList.svelte";

  /**
   * @type {string}
   */
  const endpoint = "https://pokeapi.co/api/v2/";
  /**
   * @type {any[]}
   */

  const client = useQueryClient();

  let limit = 20;

  const setLimit = (number) => {
    limit = newLimit;
  };

  export /**
   * @type {never[]}
   */
  let pokemons = [];

  const fetchPokemons = async (limit = 20) => {
    try {
      const response = await axios.get(`${endpoint}/pokemon/?limit=${limit}`);
      pokemons = response.data.results;
    } catch (error) {
      console.error(error);
    }
  };

  const prefetchNextPokemons = (data) => {
    if (data && data.hasMore) {
      client.prefetchQuery(["pokemon", limit + 20], () =>
        fetchPokemons(limit + 20)
      );
    }
  };

  $: queryOptions = {
    queryKey: ["pokemon", limit],
    queryFn: () => fetchPokemons(limit),
    onSuccess: prefetchNextPokemons,
  };

  onMount(fetchPokemons);
</script>

<!-- <main>
  <Heading title="Pokedex" />
  <SimpleSearch />
  <PokemonCardList {pokemons} />
  <div>{endpoint}</div>
  <div class="flex justify-center mt-4">
    <Previous on:previous={previous} icon />
    <Next on:next={next} icon />
  </div>
</main> -->

<main>
  <Heading title="Pokedex" />
  <SimpleSearch />
  <Query options={queryOptions}>
    <div slot="query" let:queryResult>
      {#if queryResult.status == "loading"}
        Loading...
      {:else if queryResult.status === "error"}
        <span>Error: {queryResult.error.message}</span>
      {:else}
        <div>
          {#each queryResult.data.pokemons as pokemon}
            <PokemonCardList {pokemons} />
          {/each}
        </div>
        <button on:click={() => setLimit(-20)}>Previous</button>
        <button
          on:click={() =>
            setLimit(
              queryResult.data && !queryResult.data.hasMore ? limit : limit + 20
            )}
          disabled={queryResult.data && !queryResult.data.hasMore}
        >
          Next Page
        </button>
        >
        {#if queryResult.isFetching}Loading...{/if}
      {/if}
    </div>
  </Query>
</main>
