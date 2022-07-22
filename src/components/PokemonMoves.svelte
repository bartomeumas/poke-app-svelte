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
  let moves;
</script>

<div class="mt-4 rounded-sm w-full capitalize">
  <Table class="text-center">
    <TableHead>
      <TableHeadCell>Move</TableHeadCell>
      <TableHeadCell>Level</TableHeadCell>
      <TableHeadCell>Learn method</TableHeadCell>
    </TableHead>
    <TableBody class="divide-y">
      {#each moves as move}
        <TableBodyRow>
          <TableBodyCell>{move.move.name}</TableBodyCell>
          <TableBodyCell
            >{move.version_group_details[0].level_learned_at}</TableBodyCell
          >
          <TableBodyCell
            >{move.version_group_details[0].move_learn_method
              .name}</TableBodyCell
          >
        </TableBodyRow>
      {/each}
    </TableBody>
  </Table>
</div>
