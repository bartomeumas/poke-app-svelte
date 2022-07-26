<script>
  import {
    Table,
    TableBody,
    TableBodyRow,
    TableBodyCell,
  } from "flowbite-svelte";

  export /**
   * @type {{ id: any; types: { type: { name: any; }; }[]; abilities: { ability: { name: any; }; }[]; weight: any; height: any; base_experience: any; }}
   */
  let details;
  const { id, types, abilities, weight, height, base_experience } = details;
</script>

<div class="mt-4 rounded-sm w-full capitalize">
  <Table striped={true}>
    <TableBody class="text-center divide-y">
      <TableBodyRow>
        <TableBodyCell>ID</TableBodyCell>
        <TableBodyCell>{id}</TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>types</TableBodyCell>
        <TableBodyCell>
          {types[0].type.name}
          {#if types[1]}
            / {types[1].type.name}
          {/if}
        </TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Abilities</TableBodyCell>
        <TableBodyCell
          >{abilities[0].ability.name} / {abilities[1].ability
            .name}</TableBodyCell
        >
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Weight</TableBodyCell>
        <TableBodyCell>{weight}</TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Height</TableBodyCell>
        <TableBodyCell>{height}</TableBodyCell>
      </TableBodyRow>
      <TableBodyRow>
        <TableBodyCell>Base Exp</TableBodyCell>
        <TableBodyCell>{base_experience}</TableBodyCell>
      </TableBodyRow>
    </TableBody>
  </Table>
</div>
