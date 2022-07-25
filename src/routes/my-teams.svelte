<script>
  import { Button } from "flowbite-svelte";
  import Heading from "../components/Heading.svelte";
  import TeamCard from "../components/TeamCard.svelte";
  import TeamCardList from "../components/TeamCardList.svelte";
</script>

<main>
  <div class="flex justify-between">
    <Heading title="My teams" />
    <a href="/new-team"><Button size="md" color="light">New team</Button></a>
  </div>
  <TeamCardList />
</main>
