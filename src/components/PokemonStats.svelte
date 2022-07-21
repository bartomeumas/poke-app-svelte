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
   * @type {{ hp: any; attack: any; defense: any; specialAttack: any; specialDefense: any; speed: any; }}
   */
  let stats;
</script>

<div class="mt-4 lg:mt-0 rounded-sm w-full">
  <Table>
    <TableHead>
      <TableHeadCell>HP</TableHeadCell>
      <TableHeadCell>Atk</TableHeadCell>
      <TableHeadCell>Def</TableHeadCell>
      <TableHeadCell>SP.Atk</TableHeadCell>
      <TableHeadCell>SP.DEF</TableHeadCell>
      <TableHeadCell>SPD</TableHeadCell>
    </TableHead>
    <TableBody class="divide-y">
      <TableBodyRow>
        <TableBodyCell>{stats.hp}</TableBodyCell>
        <TableBodyCell>{stats.attack}</TableBodyCell>
        <TableBodyCell>{stats.defense}</TableBodyCell>
        <TableBodyCell>{stats.specialAttack}</TableBodyCell>
        <TableBodyCell>{stats.specialDefense}</TableBodyCell>
        <TableBodyCell>{stats.speed}</TableBodyCell>
      </TableBodyRow>
    </TableBody>
  </Table>
</div>
