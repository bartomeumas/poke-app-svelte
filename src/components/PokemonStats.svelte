<script>
  import {
    Table,
    TableHead,
    TableHeadCell,
    TableBody,
    TableBodyRow,
    TableBodyCell,
  } from "flowbite-svelte";
  export /**
   * @type {any}
   */
  let stats;
</script>

<div class="mt-4 sm:mt-0 rounded-sm w-full">
  <Table class="text-center">
    <TableHead>
      {#each stats as stat}
        <TableHeadCell>{stat.stat.name}</TableHeadCell>
      {/each}
    </TableHead>
    <TableBody class="divide-y">
      <TableBodyRow>
        {#each stats as stat}
          <TableBodyCell>{stat.base_stat}</TableBodyCell>
        {/each}
      </TableBodyRow>
    </TableBody>
  </Table>
</div>
