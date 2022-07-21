<script>
  import {
    Table,
    TableBody,
    TableBodyRow,
    TableBodyCell,
  } from "flowbite-svelte";

  export let details;
</script>

<div class="mt-4 sm:mt-0 rounded-sm w-full">
  <Table striped={true}>
    <TableBody class="text-center divide-y">
      <TableBodyRow>
        <TableBodyCell>ID</TableBodyCell>
        <TableBodyCell>{details.id}</TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Types</TableBodyCell>
        <TableBodyCell>
          {details.types[0].type.name}
          {#if details.types[1]}
            / {details.types[1].type.name}
          {/if}
        </TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Abilities</TableBodyCell>
        <TableBodyCell
          >{details.abilities[0].ability.name} / {details.abilities[1].ability
            .name}</TableBodyCell
        >
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Weight</TableBodyCell>
        <TableBodyCell>{details.weight}</TableBodyCell>
      </TableBodyRow>
    </TableBody>
  </Table>
</div>
